import axios from "axios";

import { Loading, Dark } from "quasar";

export default {
  name: "table-page",
  components: {},
  props: [],
  data() {
    return {
      tableData: [],
      columns: [
        {
          name: "API",
          align: "left",
          label: "API",
          field: (row) => row.API,
        },
        {
          name: "Authentication",
          align: "left",
          label: "AUTH",
          field: (row) => row.Auth,
        },
        {
          name: "CATEGORY",
          align: "left",
          label: "Category",
          field: (row) => row.Category,
        },
        {
          name: "CORS",
          align: "left",
          label: "Cors",
          field: (row) => row.Cors,
        },
        {
          name: "DESCRIPTION",
          align: "left",
          label: "Description",
          field: (row) => row.Description,
        },
        {
          name: "HTTPS",
          align: "left",
          label: "HTTPS",
          field: (row) => row.HTTPS,
        },
        {
          name: "LINK",
          align: "left",
          label: "Link",
          field: (row) => row.Link,
        },
      ],
      isDarkMode: false,
      ui: {
        data_fetchStatus: "IDEAL",
      },
    };
  },
  computed: {
    tableClass() {
      if (Dark.isActive) {
        return {};
      }
    },
  },
  mounted() {},
  methods: {
    fetchTableData() {
      this.ui.data_fetchStatus = "TRIGGERD";
      Loading.show();
      axios
        .get(`https://api.publicapis.org/entries`)
        .then((response) => {
          if (response.status == 200) {
            this.ui.data_fetchStatus = "SUCCESSFUL";
            this.tableData = response.data.entries;
            Loading.hide();
          }
          console.log(response);
        })
        .catch((error) => {
          this.ui.data_fetchStatus = "FAILED";
          console.log(error);
          Loading.hide();
        });
    },
    changeTheme() {
      Dark.set(this.isDarkMode);
    },
  },
  created() {
    this.fetchTableData();
  },
};
