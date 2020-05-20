import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import UserAvailableRecipes from '../views/UserAvailableRecipes.vue'
import Recipe from '../views/Recipe.vue'
import UserListIngredients from '../views/UserListIngredients.vue'
import Nutrition from '../views/Nutrition.vue'
import MealPlanner from '../views/MealPlanner.vue'
import CommonIngredientsList from '../views/CommonIngredientsList.vue'
import CommonIngredientsUserCommonIngredientsListView from '../views/CommonIngredientsUserCommonIngredientsListView.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'CommonIngredientsUserCommonIngredientsListView',
    component: CommonIngredientsUserCommonIngredientsListView
  },  
  {
    path: '/recipes',
    name: 'UserAvailableRecipes',
    component: UserAvailableRecipes
  }, 
  {
    path: '/ingredients',
    name: 'UserListIngredients',
    component: UserListIngredients  
  }, 
  {
    path: '/nutrition',
    name: 'Nutrition',
    component: Nutrition
  }, 
  {
    path: '/meal-planner',
    name: 'MealPlanner',
    component: MealPlanner
  },  
  {
    path: '/recipe/:id',
    name: 'Recipe',
    component: Recipe
  }, 
  {
    path: '/common-ingredients',
    name: 'CommonIngredientsList',
    component: CommonIngredientsList
  },           

]

const router = new VueRouter({
  routes
})

export default router
