const Offer = {
  data() {
    return {
      "books": [],
      "person": undefined
    }
  },

  computed: {
    pretty() {
      return dayjs(this.person.dob.date)
        .format('D MMM YYYY');

    }
  },

  methods: {
    fetchUserData() {
      fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then((parsedjson) => {
          console.log(parsedjson);
          this.person = parsedjson.results[0]
        })
        .catch(err => {
          console.error(err)
        })
    },

    fetchBookData() {
      fetch('/api/book/')
        .then(response => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          this.books = responseJson;
        })
        .catch((err) => {
          console.error(err);
        })
    }
  },
  
  created() {
    this.fetchUserData();
    this.fetchBookData();
  }
}

Vue.createApp(Offer).mount('#offerApp');