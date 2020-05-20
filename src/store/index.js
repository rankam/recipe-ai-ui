import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    // ALL COMMON INGREDIENTS
    allCommonIngredientsURL: 'http://localhost:8000/api/v1/commoningredient/',        
    allCommonIngredientsSearchURL: 'http://localhost:8000/api/v1/search-common-ingredients/',        
    allCommonIngredients: {
      results: [],
      count: null,
      previous: null,
      next: null
    },

    // USER AVAILABLE RECIPES
    userAvailableRecipesURL: 'http://localhost:8000/api/v1/available-recipes/',
    userAvailableRecipes: {
      results: [],
      count: null,
      previous: null,
      next: null
    },    

    // USER COMMON INGREDIENTS

    // list all user common ingredients 
    userCommonIngredientsURL: 'http://localhost:8000/api/v1/usercommoningredients/',
    userCommonIngredientsSearchURL: 'http://localhost:8000/api/v1/search-user-common-ingredients/',        
    
    // get/put/delete by :id
    userCommonIngredientURL: 'http://localhost:8000/api/v1/usercommoningredient/',

    userCommonIngredients: {
      results: [],
      count: null,
      previous: null,
      next: null
    },

    userSelectedRecipeURL: 'http://localhost:8000/api/v1/recipe/',
    // USER SELECTED RECIPE
    userSelectedRecipe: {
      name: '',
      ingredients: []
    },

    // MISSING INGREDIENTS
    allowedMissingIngredients: 1
  },
  mutations: {

    // ALL COMMON INGREDIENTS
    setAllCommonIngredients (state, commonIngredients) {
      state.allCommonIngredients = commonIngredients
    },   

    // USER AVAILABLE RECIPES 
    setUserAvailableRecipes (state, recipes) {
      state.userAvailableRecipes = recipes
    },     

    // USER COMMON INGREDIENTS
    setUserCommonIngredients (state, ingredients) {
      state.userCommonIngredients = ingredients
    },   

    removeUserCommonIngredient (state, userCommonIngredientId) {
      state.userCommonIngredients.results = state.userCommonIngredients.results.filter((ing) => ing.id != userCommonIngredientId)
    },    

    // USER SELECTED RECIPE
    setUserSelectedRecipe (state, recipe) {
      state.userSelectedRecipe = recipe
    },

    setAllowedMissingIngredient (state, num) {
      state.allowedMissingIngredients = num
    },

  },
  actions: {

    // ALL COMMON INGREDIENTS
    searchAndFetchAllCommonIngredients ({commit}, obj) {
      let options =   {
          headers: {'Content-type': 'application/json'},
          params: {searchTerm:obj.searchTerm},
          withCredentials: true
      };  
      obj.vm.$http.get(this.state.allCommonIngredientsSearchURL, options)
        .then(function(rsp) {
          commit('setAllCommonIngredients', rsp.data)
        })        
    },

    fetchAllCommonIngredients ({commit}, vm) {
      let options =   {
          headers: {'Content-type': 'application/json'},
          params: {},
          withCredentials: true
      };  
      vm.$http.get(this.state.allCommonIngredientsURL, options)
        .then(function(rsp) {
          commit('setAllCommonIngredients', rsp.data)
        })        
    },
    fetchNextAllCommonIngredients ({commit}, vm) {
      let options =   {
          headers: {'Content-type': 'application/json'},
          params: {},
          withCredentials: true
      };  

      vm.$http.get(this.state.allCommonIngredients.next, options)
        .then(function(rsp) {
          commit('setAllCommonIngredients', rsp.data)
        })        
    },
    fetchPreviousAllCommonIngredients ({commit}, vm) {
      let options =   {
          headers: {'Content-type': 'application/json'},
          params: {},
          withCredentials: true
      };  
      vm.$http.get(this.state.allCommonIngredients.previous, options)
        .then(function(rsp) {
          commit('setAllCommonIngredients', rsp.data)
        })        
    },      

    // USER AVAILABLE RECIPES
     searchAndFetchUserAvailableRecipes ({commit}, obj) {
      let options =   {
          headers: {'Content-type': 'application/json'},
          params: {
              'missing-ingredients-limit': this.state.allowedMissingIngredients,
              'searchTerm': obj.searchTerm,
          },
          withCredentials: true
      };
      obj.vm.$http.get(this.state.userAvailableRecipesURL, options)
        .then(function(rsp) {
          commit('setUserAvailableRecipes', rsp.data)
        })
    },     
     fetchUserAvailableRecipes ({commit}, vm) {
      let options =   {
          headers: {'Content-type': 'application/json'},
          params: {'missing-ingredients-limit': this.state.allowedMissingIngredients},
          withCredentials: true
      };
     vm.$http.get(this.state.userAvailableRecipesURL, options)
        .then(function(rsp) {
          commit('setUserAvailableRecipes', rsp.data)
        })
    }, 
    fetchNextUserAvailableRecipes ({commit}, vm) {
      let options =   {
          headers: {'Content-type': 'application/json'},
          params: {'missing-ingredients-limit': this.state.allowedMissingIngredients},
          withCredentials: true
      };
     vm.$http.get(this.state.userAvailableRecipes.next, options)
        .then(function(rsp) {
          commit('setUserAvailableRecipes', rsp.data)
        })
    },      
    fetchPreviousUserAvailableRecipes ({commit}, vm) {
      let options =   {
          headers: {'Content-type': 'application/json'},
          params: {'missing-ingredients-limit': this.state.allowedMissingIngredients},
          withCredentials: true
      };
     vm.$http.get(this.state.userAvailableRecipes.previous, options)
        .then(function(rsp) {
          commit('setUserAvailableRecipes', rsp.data)
        })
    },           
    
    // USER COMMON INGREDIENTS    
    fetchUserCommonIngredients ({commit}, obj) {
        let options =   {
            headers: {'Content-type': 'application/json'},
            params: {},
            withCredentials: true
        };  

        obj.vm.$http.get(this.state.userCommonIngredientsURL, options)
          .then(function(rsp) {
            commit('setUserCommonIngredients', rsp.data)
          })        
      },
    fetchNextUserCommonIngredients ({commit}, vm) {
        let options =   {
            headers: {'Content-type': 'application/json'},
            params: {},
            withCredentials: true
        };  

       vm.$http.get(vm.$store.state.userCommonIngredients.next, options)
          .then(function(rsp) {
            commit('setUserCommonIngredients', rsp.data)            
          })     
      },
    fetchPreviousUserCommonIngredients ({commit}, vm) {
        let options =   {
            headers: {'Content-type': 'application/json'},
            params: {},
            withCredentials: true
        };  
       vm.$http.get(vm.$store.state.userCommonIngredients.previous, options)
          .then(function(rsp) {
            commit('setUserCommonIngredients', rsp.data)
          })     
      },
      removeUserCommonIngredient ({commit}, obj) {
        let options =   {
            headers: {'Content-type': 'application/json'},
            params: {},
            withCredentials: true
        };
        obj.vm.$http.delete(`${this.state.userCommonIngredientURL}${obj.userCommonIngredientId}/`, options)
          .then((rsp) => {
            if (rsp.status == 204) {
              commit('removeUserCommonIngredient', obj.userCommonIngredientId)  
            }
          })
      },  
      /* eslint-disable */
      addUserCommonIngredient ({commit}, obj) {
        let options =   {
            headers: {'Content-type': 'application/json'},
            params: {},
            withCredentials: true,
            common_ingredient: obj.commonIngredientId
        };
        obj.vm.$http.post(`${this.state.userCommonIngredientsURL}`, options)
          .then((rsp) => {
            if (rsp.status > 0) {
              this.dispatch('fetchUserCommonIngredients', obj)
            } else {console.log('fuck')}
          })
      },  
      /* eslint-enable */

      searchAndFetchUserCommonIngredients ({commit}, obj) {
        let options =   {
            headers: {'Content-type': 'application/json'},
            params: {searchTerm:obj.searchTerm},
            withCredentials: true
        };  
        obj.vm.$http.get(this.state.userCommonIngredientsSearchURL, options)
          .then(function(rsp) {
            commit('setUserCommonIngredients', rsp.data)
          })        
      },

      // USER SELECTED RECIPE
      fetchUserSelectedRecipe ({commit}, obj) {
        let options =   {
            headers: {'Content-type': 'application/json'},
            params: {},
            withCredentials: true
        };  
        obj.vm.$http.get(`${this.state.userSelectedRecipeURL}${obj.recipeId}`, options)
          .then(function(rsp) {
            commit('setUserSelectedRecipe', rsp.data)
          })        
      }

  },

  getters: {
    search: (state) => (vm, search, searchTarget, path) => {
      return vm._.get(state, path).filter(data => !search || data[searchTarget].toLowerCase().includes(search.toLowerCase()))
    },
    recipe: (state) => (id) => {
      return state.userAvailableRecipes.results.find((recipe) => recipe.id == id)
    },
    recipeCalories: (state) => (id) => {
      return state.userAvailableRecipes.results.find((recipe) => recipe.id == id).calories
    }     
  },
  modules: {
  }
})
