const Offer = {
    data() {
      return {
        "person": {},
        "offers": [
                {
                    "id": 1,
                    "name": "Nischal Hande",
                    "offer": 100000,
                    "bonus": 10000,
                    "company": "EY",
                    "offerDate": "2021-10-23"
                },
                {
                    "id": 2,
                    "name": "Archit Sidhwa",
                    "offer": 85000,
                    "bonus": 5000,
                    "company": "PwC",
                    "offerDate": "2021-10-13"
                }
            ]
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
          .then( (parsedjson) => {
            console.log(parsedjson);
            this.person = parsedjson.results[0]
         })
        .catch( err => {
          console.error(err)
        })

        }
      },
      created() {
        this.fetchUserData();
    }
  }
  
Vue.createApp(Offer).mount('#offerApp');
