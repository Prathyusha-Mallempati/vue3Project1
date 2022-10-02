import { CARDS_DATA } from "../cardsData";

export default {
  name: "my-cards",
  components: {},
  props: [],
  data() {
    return {
      cards: [...CARDS_DATA],
      currentCard: {},
      currentIndex: null,
      isConfirmationPopupOpen: false,
      searchString: "",
    };
  },
  computed: {},
  mounted() {},
  methods: {
    confirmationToDelete(card, index) {
      this.isConfirmationPopupOpen = true;
      this.currentIndex = index;
      this.currentCard = card;
    },
    deleteCard() {
      this.cards.splice(this.currentIndex, 1);
    },
    closePopup() {
      this.currentIndex = null;
      this.currentCard = {};
    },
    findSearchedData() {
      const res = this.cards.filter((obj) =>
        Object.values(obj).some((val) =>
          val.toLowerCase().includes(this.searchString.toLowerCase())
        )
      );
      console.log(res);
      this.cards = [...res];
    },
    searchDataBasedOnQuery() {
      this.cards = [...CARDS_DATA];
      if (this.$route.query.searchString) {
        this.searchString = this.$route.query.searchString;
        this.findSearchedData();
      } else {
        this.searchString = "";
      }
    },
  },
  created() {
    this.cards = [...CARDS_DATA];
    this.searchDataBasedOnQuery();
  },
  watch: {
    $route() {
      this.searchDataBasedOnQuery();
    },
  },
};
