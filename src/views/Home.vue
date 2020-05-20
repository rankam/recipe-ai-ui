<template>
  <div class="home">
    <h1>This is an home page</h1> 
    <button @click="fetchAvailableRecipes">Click me</button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data: function() {
    return {
      cookie: '',
      recipes: [],
      authURL: 'http://localhost:8000/api-auth/login/?next=/api/v1/'
    }
  },
  mounted: function() {
    this.$http.defaults.xsrfCookieName = 'csrftoken'
    this.$http.defaults.xsrfHeaderName = 'X-CSRFToken'
    // this.login()
  },
  methods: {
    fetchAvailableRecipes: function() {
      let options =   {
          headers: {'Content-type': 'text/plain'},
          params: {},
          withCredentials: true
      };
      this.$http.get('http://localhost:8000/api/v1/available-recipes/', options)
        .then((rsp) => {
          console.log(rsp)
        })
    },
    login: function() {
      // let vm = this
      this.$http.get('http://localhost:8000/api/v1/available-recipes/',
      // this.$http.get('http://localhost:8000/api-auth/login/',
        {headers:{'Content-type': 'text/plain'}},
        {
          params: {withCredentials: true}
        } ,
        {withCredentials: true},
        {credentials: 'include'})
        .then((rsp) => {
          // var el = document.createElement( 'html' );
          // el.innerHTML = rsp.data;
          // var inp = el.getElementsByTagName("input");
          // var inpEl = inp[0]
          // var cookie = inpEl.value;
          // this.cookie = cookie
          // this.cookie = 'ggoLITbWHCBQlGfmA6D0GJkSjfZVruWunlPnRZ4dQe7aEkMse6KFYAp96UhH0hnN'

          console.log(rsp)

        })
        // .then(() => {
        //   this.$http.post(
        //       'http://localhost:8000/api-auth/login/',
        //       {
        //         params: {
        //           username: "aaron",
        //           password: "rm7gisnh",
        //           csrfmiddlewaretoken: vm.cookie               
        //         }
        //       },
        //       {
        //           headers: {
        //             'Content-Type': 'application/x-www-form-urlencoded',
        //             "X-CSRFToken": vm.cookie,
        //           }
        //       },
        //       {
        //         auth: {
        //           username: "aaron",
        //           password: "rm7gisnh"
        //         }
        //       },
        //       {withCredentials: true}
        //     ).then((rsp) => {
        //       console.log('post rsp is ', rsp)
        //     }).catch((err) => {
        //       console.log('err is ', err)
        //     })
        // })
    },

    //   client = requests.session()

    //   # Retrieve the CSRF token first
    //   client.get(URL)  # sets cookie
    //   if 'csrftoken' in client.cookies:
    //       # Django 1.6 and up
    //       csrftoken = client.cookies['csrftoken']
    //   else:
    //       # older versions
    //       csrftoken = client.cookies['csrf']
    //   USERNAME = 'aaron'
    //   PASSWORD = 'rm7gisnh'
    //   login_data = dict(username=USERNAME, password=PASSWORD, csrfmiddlewaretoken=csrftoken, next='/')
    //   r = client.post(URL, data=login_data, headers=dict(Referer=URL))
    //   rsp = client.get('http://localhost:8000/api/v1/')
    // },
    // createSession: async function() {
    //   console.log("create session");
    //   const cookie = this.getCookie() // get cookie from request
    //   console.log('cookie is ', cookie)
    //   const authParams = {
    //     username: "aaron",
    //     password: "rm7gisnh"
    //   };
    //   const resp = await this.$http.post('http://localhost:8000/api-auth/login/', authParams, {
    //     headers:
    //       {
    //         "X-CSRFToken":'77ApqefjWpHmyQGc2oRQjdEaJVMhBTnuiC8v4fwk9QgdH5fUWP82TTl1yF2XfnGs',
    //         // "Access-Control-Allow-Headers": "csrfmiddlewaretoken"
    //       }
    //   })
    //   console.log(resp)
    //   // const cookie = resp.headers["set-cookie"][0];
    //   this.$http.defaults.headers.Cookie = cookie;   // attach cookie to axiosInstance for future requests
    // },
    // getCookie: function() {
    //   var name = 'csrftoken';
    //   var cookieValue = null;
    //   if (document.cookie && document.cookie !== '') {
    //       var cookies = document.cookie.split(';');
    //       for (var i = 0; i < cookies.length; i++) {
    //           var cookie = cookies[i].trim();
    //           // Does this cookie string begin with the name we want?
    //           if (cookie.substring(0, name.length + 1) === (name + '=')) {
    //               cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
    //               break;
    //           }
    //       }
    //   }
    //   // this.cookie = cookieValue;
    //   return cookieValue
    // },
  }
}
</script>
    
