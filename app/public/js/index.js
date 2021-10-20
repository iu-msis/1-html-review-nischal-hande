const Offer = {
  data() {
    return {
      "books": [],
      "person": undefined,
      bookForm: {}
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
    },
    postNewBook(evt) {
      // console.log("Posting!", this.offerForm);

      fetch('api/book/create.php', {
        method: 'POST',
        body: JSON.stringify(this.bookForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
        .then(response => response.json())
        .then(json => {
          console.log("Returned from post:", json);
          // TODO: test a result was returned!
          this.books = json;

          // reset the form
          this.bookForm = {};

          this.fetchBookData();
        });
    }
  },
  created() {
    this.fetchUserData();
    this.fetchBookData();
  }
}

Vue.createApp(Offer).mount('#offerApp');