import { Dark } from "quasar";

export default {
  name: "settings-page",
  components: {},
  props: [],
  data() {
    return {
      isDarkMode: false,
    };
  },
  computed: {},
  mounted() {},
  methods: {
    changeTheme() {
      Dark.set(this.isDarkMode);
    },
  },
};
