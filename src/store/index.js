import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    ingredientMeasurementTypes: [
        "teaspoon",
        "tablespoon",
        "fluid ounces",
        "cup",
        "pint",
        "quart",
        "gallon",
        "milliliter",
        "liter",
        "pound",
        "milligram",
        "gram",
        "kilogram",
        "small",
        "large",
        "medium"
    ], 
    

    userNewRecipe: {
      name: 'Add New Recipe',
      ingredients: [],
    },

    search: '',
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
    userAvailableRecipeTableLoading: false,


    userAddIngredientRecipeURL: 'http://localhost:8000/api/v1/recipe/RECIPEID/ingredient/',
    createIngredientURL: 'http://localhost:8000/api/v1/ingredient/',
    classifyIngredientAsCommonIngredientURL: 'http://localhost:8000/api/v1/classify-ingredient-common-ingredient/',

    userNewIngredient: {
      name: '',
      common_ingredient: {
      nutrients: [
                  {
                        name: "Protein",
                        amount: null,
                        unit_type: "G",
                        common_ingredient_id: ""
                  },
                  {
                        name: "Total lipid (fat)",
                        amount: null,
                        unit_type: "G",
                        common_ingredient_id: ""
                  },
                  {
                        name: "Carbohydrate, by difference",
                        amount: null,
                        unit_type: "G",
                        common_ingredient_id: ""
                  },
                  {
                        name: "Potassium, K",
                        amount: null,
                        unit_type: "MG",
                        common_ingredient_id: ""
                  },
                  {
                        name: "Fatty acids, total saturated",
                        amount: null,
                        unit_type: "G",
                        common_ingredient_id: ""
                  },
                  {
                        name: "Fatty acids, total monounsaturated",
                        amount: null,
                        unit_type: "G",
                        common_ingredient_id: ""
                  },
                  {
                        name: "Fatty acids, total polyunsaturated",
                        amount: null,
                        unit_type: "G",
                        common_ingredient_id: ""
                  },
                  {
                        name: "Sugars, total including NLEA",
                        amount: null,
                        unit_type: "G",
                        common_ingredient_id: ""
                  },
                  {
                        name: "Energy",
                        amount: null,
                        unit_type: "KCAL",
                        common_ingredient_id: ""
                  }
        ],
        display_name: ''
      },
      confidence: '',
      units: '',
      unit_type: ''
    },

    // USER COMMON INGREDIENTS

    // list all user common ingredients 
    userCommonIngredientsURL: 'http://localhost:8000/api/v1/usercommoningredients/',
    userCommonIngredientsSearchURL: 'http://localhost:8000/api/v1/search-user-common-ingredients/',

    
    // get/put/delete by :id
    userCommonIngredientURL: 'http://localhost:8000/api/v1/usercommoningredient/',
    addUserCommonIngredientURL: 'http://localhost:8000/api/v1/add-usercommoningredient/',

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

    resetUserNewRecipe (state) {
      state.userNewRecipe = {
        name: '',
        ingredients: []
      }
    },

    resetUserSelectedRecipe (state) {
      state.userSelectedRecipe = {
        name: '',
        ingredients: []
      }
    },   

    resetUserNewIngredient (state) {
      state.userNewIngredient = {
        name: '',
        common_ingredient: {
        nutrients: [
                    {
                          name: "Protein",
                          amount: null,
                          unit_type: "G",
                          common_ingredient_id: ""
                    },
                    {
                          name: "Total lipid (fat)",
                          amount: null,
                          unit_type: "G",
                          common_ingredient_id: ""
                    },
                    {
                          name: "Carbohydrate, by difference",
                          amount: null,
                          unit_type: "G",
                          common_ingredient_id: ""
                    },
                    {
                          name: "Potassium, K",
                          amount: null,
                          unit_type: "MG",
                          common_ingredient_id: ""
                    },
                    {
                          name: "Fatty acids, total saturated",
                          amount: null,
                          unit_type: "G",
                          common_ingredient_id: ""
                    },
                    {
                          name: "Fatty acids, total monounsaturated",
                          amount: null,
                          unit_type: "G",
                          common_ingredient_id: ""
                    },
                    {
                          name: "Fatty acids, total polyunsaturated",
                          amount: null,
                          unit_type: "G",
                          common_ingredient_id: ""
                    },
                    {
                          name: "Sugars, total including NLEA",
                          amount: null,
                          unit_type: "G",
                          common_ingredient_id: ""
                    },
                    {
                          name: "Energy",
                          amount: null,
                          unit_type: "KCAL",
                          common_ingredient_id: ""
                    }
          ],
          display_name: ''
        },
        confidence: '',
        units: '',
        unit_type: ''
      }
    },        

    setUserNewRecipeName (state, name) {
      state.userNewRecipe.name = name;
    },

    setUserNewRecipe (state, recipe) {
      state.userNewRecipe = recipe;
    },    

    // ALL COMMON INGREDIENTS
    setAllCommonIngredients (state, commonIngredients) {
      state.allCommonIngredients = commonIngredients
    },   

    // USER AVAILABLE RECIPES 
    setUserAvailableRecipes (state, recipes) {
      state.userAvailableRecipes = recipes
    },    

    toggleUserAvailableRecipesTableLoading (state, userAvailableRecipeTableLoading) {
      state.userAvailableRecipeTableLoading = !userAvailableRecipeTableLoading
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

    setUserNewIngredient (state, ingredient) {
      state.userNewIngredient = ingredient 
    },

    setUserNewIngredientName (state, name) {
      console.log('asdf')
      state.userNewIngredient.name = name 
    }    


  },
  actions: {

    // ALL COMMON INGREDIENTS
    searchAndFetchAllCommonIngredients ({commit}, obj) {
      let options =   {
          headers: {'Content-type': 'application/json'},
          params: {searchTerm:obj.searchTerm},
          withCredentials: true
      };  
      console.log(obj, 'im here')
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
      console.log(obj)
      commit('toggleUserAvailableRecipesTableLoading', obj.vm.$store.state.userAvailableRecipeTableLoading)
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
          commit('toggleUserAvailableRecipesTableLoading', obj.vm.$store.state.userAvailableRecipeTableLoading)
        })
    },     
     fetchUserAvailableRecipes ({commit}, vm) {
      console.log(vm.$store.state.userAvailableRecipeTableLoading)

      commit('toggleUserAvailableRecipesTableLoading', vm.$store.state.userAvailableRecipeTableLoading)
      let options =   {
          headers: {'Content-type': 'application/json'},
          params: {'missing-ingredients-limit': vm.$store.state.allowedMissingIngredients},
          withCredentials: true
      };
     vm.$http.get(this.state.userAvailableRecipesURL, options)
        .then(function(rsp) {
          commit('setUserAvailableRecipes', rsp.data)
          commit('toggleUserAvailableRecipesTableLoading', vm.$store.state.userAvailableRecipeTableLoading)
        })
    }, 
    fetchNextUserAvailableRecipes ({commit}, vm) {
      commit('toggleUserAvailableRecipesTableLoading', vm.$store.state.userAvailableRecipeTableLoading)
      let options =   {
          headers: {'Content-type': 'application/json'},
          params: {'missing-ingredients-limit': vm.$store.state.allowedMissingIngredients},
          withCredentials: true
      };
     vm.$http.get(this.state.userAvailableRecipes.next, options)
        .then(function(rsp) {
          commit('setUserAvailableRecipes', rsp.data)
          commit('toggleUserAvailableRecipesTableLoading', vm.$store.state.userAvailableRecipeTableLoading)
        })
    },      
    fetchPreviousUserAvailableRecipes ({commit}, vm) {
      commit('toggleUserAvailableRecipesTableLoading', vm.$store.state.userAvailableRecipeTableLoading)
      let options =   {
          headers: {'Content-type': 'application/json'},
          params: {'missing-ingredients-limit': this.state.allowedMissingIngredients},
          withCredentials: true
      };
     vm.$http.get(this.state.userAvailableRecipes.previous, options)
        .then(function(rsp) {
          commit('setUserAvailableRecipes', rsp.data)
          commit('toggleUserAvailableRecipesTableLoading', vm.$store.state.userAvailableRecipeTableLoading)
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
              obj.vm.$notify({
                title: 'Ingredient Removed',
                message: '',
                type: 'success'
              });    
              commit('removeUserCommonIngredient', obj.userCommonIngredientId)  
            }
          }).catch((err) => console.log('error ', err))
      },  
      /* eslint-disable */
      addUserCommonIngredient ({commit}, obj) {
        let options =   {
            headers: {'Content-type': 'application/json'},
            params: {},
            withCredentials: true,
            common_ingredient: obj.commonIngredientId
        }; 
        obj.vm.$http.post(`${this.state.addUserCommonIngredientURL}`, options)
          .then((rsp) => {
            if (rsp.status >= 200 && rsp.status < 300) {
              this.dispatch('fetchUserCommonIngredients', obj)
            } else {
              obj.vm.$notify.error({
                title: 'Error',
                message: 'This is an error message',
              });              
            }
          }).catch((err) =>   {
              obj.vm.$notify.error({
                title: 'Error',
                message: 'You already have this item',
              })
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
      },

      // USER CREATE RECIPE
      userCreateRecipe ({commit}, obj) {
        let options =   {
            headers: {'Content-type': 'application/json'},
            params: {},
            name: obj.name,
            withCredentials: true
        };  
        console.log('create recipe ')
        return obj.vm.$http.post(this.state.userSelectedRecipeURL, options)
          .then(function(rsp) {
            commit('setUserNewRecipe', rsp.data)
            commit('setUserSelectedRecipe', rsp.data)
            return rsp.data
          })        
      },

      // addCommonIngredientRecipe ({commit}, obj) {
      //   let options =   {
      //       headers: {'Content-type': 'application/json'},
      //       params: {},
      //       recipe_id: obj.recipe.id,
      //       ingredient_id: obj.ingredient_id,
      //       withCredentials: true
      //   };  
      //   obj.vm.$http.post(this.state.userAddIngredientRecipeURL.replace('RECIPEID',obj.recipe.id), options)
      //     .then(function(rsp) {
      //       commit('setUserNewRecipe', rsp.data)
      //     })        
      // },
      addIngredientRecipe ({commit}, obj) {
        let options =   {
            headers: {'Content-type': 'application/json'},
            params: {},
            recipe_id: obj.recipe_id,
            ingredient_id: obj.ingredient_id,
            withCredentials: true
        };  
        console.log(obj)
        obj.vm.$http.post(this.state.userAddIngredientRecipeURL.replace('RECIPEID',obj.recipe_id), options)
          .then(function(rsp) {
            console.log('addingredientrecipe rsp', rsp)
            commit('setUserNewRecipe', rsp.data)
            commit('setUserSelectedRecipe', rsp.data)
          })        
      },

      createIngredient ({commit}, obj) {
        let options =   {
            headers: {'Content-type': 'application/json'},
            params: {},
            name: obj.ingredientName,
            units: obj.ingredientUnits,
            unit_type: obj.ingredientUnitType,
            withCredentials: true
        };  
        console.log('add ingredient to ingredient')
        return obj.vm.$http.post(this.state.createIngredientURL, options)
          .then(function(rsp) {
            commit('setUserNewIngredient', rsp.data)
            return rsp.data
          })        
      },      
      classifyIngredient ({commit}, obj) {
        let options =   {
            headers: {'Content-type': 'application/json'},
            params: {},
            name: obj.ingredient_name,
            withCredentials: true
        };  
        return obj.vm.$http.post(this.state.classifyIngredientAsCommonIngredientURL, options)
          .then(function(rsp) {
            if (rsp.data.confidence > .96) {
              console.log(rsp.data)
              commit('setUserNewIngredient', rsp.data)              
              return rsp.data  
            }
          })        
      }
  },

  getters: {
    search: (state) => (vm, search, searchTarget, path) => {
      const x = vm._.get(state, path).filter(data => !search || vm._.get(data, searchTarget).toLowerCase().includes(search.toLowerCase()))
      return x
    },
    recipe: (state) => (id) => {
      return state.userAvailableRecipes.results.find((recipe) => recipe.id == id)
    },
    recipeCalories: (state) => (id) => {
      try {
        return state.userAvailableRecipes.results.find((recipe) => recipe.id == id).calories
      } catch (err) {
        return 
      }
    }     
  },
  modules: {
  }
})
