<template>
  <div class="home">
    <h1>This is an home page</h1>
    <button @click="fetchAvailableRecipes">Click me</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: function() {
    return {
      cookie: "",
      recipes: [],
      authURL: "http://localhost:8000/api-auth/login/?next=/api/v1/",
    };
  },
  mounted: function() {
    this.$http.defaults.xsrfCookieName = "csrftoken";
    this.$http.defaults.xsrfHeaderName = "X-CSRFToken";
    // this.login()
  },
  methods: {
    fetchAvailableRecipes: function() {
      let options = {
        headers: { "Content-type": "text/plain" },
        params: {},
        withCredentials: true,
      };
      this.$http
        .get("http://localhost:8000/api/v1/available-recipes/", options)
        .then((rsp) => {
          console.log(rsp);
        });
    },
    login: function() {
      // let vm = this
      this.$http
        .get(
          "http://localhost:8000/api/v1/available-recipes/",
          // this.$http.get('http://localhost:8000/api-auth/login/',
          { headers: { "Content-type": "text/plain" } },
          {
            params: { withCredentials: true },
          },
          { withCredentials: true },
          { credentials: "include" }
        )
        .then((rsp) => {
          console.log(rsp);
        });
    },
  },
};
</script>
