  const Offer = {
    data() {
      return {
        "books": [],
        "person": undefined,
        bookForm: {},
        selectedBook: null,
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
      postBook(evt) {
          console.log ("Test:", this.selectedBook);
        if (this.selectedBook) {
          this.postEditBook(evt);
        } else {
          this.postNewBook(evt);
        }
      },
      postEditBook(evt) {
        this.bookForm.id = this.selectedBook.id;
        
        console.log("Editing!", this.bookForm);

        fetch('api/book/update.php', {
            method:'POST',
            body: JSON.stringify(this.bookForm),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.books = json;
            
            // reset the form
            this.handleResetEdit();
          });
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
      },
      postDeleteBook(b) {  
        if ( !confirm("Are you sure you want to delete this book?") ) {
            return;
        }  
        
        console.log("Delete!", b);

        fetch('api/book/delete.php', {
            method:'POST',
            body: JSON.stringify(b),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.books = json;
            
            // reset the form
            this.handleResetEdit();
          });
      },
      handleEditBook(book) {
        this.selectedBook = book;
        this.bookForm = Object.assign({}, this.selectedBook);
      },
      handleResetEdit() {
        this.selectedBook = null;
        this.bookForm = {};
      }
    },
    created() {
      this.fetchUserData();
      this.fetchBookData();
    }
  }

  Vue.createApp(Offer).mount('#offerApp');