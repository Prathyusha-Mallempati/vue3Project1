import axios from "axios";
import { CARDS_DATA } from "../../pages/cardsData";

export default {
  name: "main-layout",
  components: {
    // PageFooter
  },
  mixins: [
    // apiResponseStatusNotify
  ],
  props: [],
  meta() {
    return {};
  },
  data() {
    return {
      left: false,
      text: "",
      tab: "",
      header_tabs: [
        {
          label: "Table",
          value: "TABLE",
          to: "TABLE",
        },
        {
          label: "Cards",
          value: "CARDS",
          to: "MY_CARDS",
        },
        {
          label: "Settings",
          value: "SETTINGS",
          to: "SETTINGS",
        },
      ],
      searchKeyword: "",
      optionsTemp: [],
      options: [],
    };
  },
  computed: {
    isMobileScreen() {
      return this.$q.screen.lt.sm;
    },
  },
  mounted() {},
  methods: {
    productsSearchBtnClicked() {
      if (this.searchKeyword) {
        this.$router.push({
          name: "MY_CARDS",
          query: {
            searchString: this.searchKeyword,
          },
        });
      }
    },
    clearSearchKey() {
      this.searchKeyword = "";
      this.$router.push({
        name: this.$route.name,
      });
    },

    filterFn(val, update) {
      update(() => {
        if (val === "") {
          this.options.value = [...this.optionsTemp];
        } else {
          const needle = val.toLowerCase();
          this.options.value = this.optionsTemp.filter(
            (v) => v.toLowerCase().indexOf(needle) > -1
          );
        }
      });
    },

    setSearchString(val) {
      this.searchKeyword = val;
    },

    convertCardsDataIntoOptions(data) {
      let options = [];
      data.forEach((item, index) => {
        for (let [key, value] of Object.entries(item)) {
          options.push(value);
        }
      });
      this.optionsTemp = [...new Set(options)];
      this.options = [...this.optionsTemp];
      // const res = data.filter((obj) =>
      //   Object.values(obj).some((val) =>
      //     val.toLowerCase().includes(this.searchString.toLowerCase())
      //   )
      // );
    },
  },

  created() {
    let data = [...CARDS_DATA];
    this.convertCardsDataIntoOptions(data);
  },
};
