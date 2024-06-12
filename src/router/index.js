import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import MealList from '@/views/MealList.vue'
import MealsByName from '@/views/MealsByName.vue'
import MealsByLetter from '@/views/MealsByLetter.vue'
import MealsByIngredients from '@/views/MealsByIngredients.vue'
import MealDetails from '@/views/MealDetails.vue'
import Ingredients from '@/views/Ingredients.vue'

const routes = [{
    path:'/',
    name:'home',
    component: Home
},
{
    path:'/letter/:letter',
    name:'byLetter',
    component: MealsByLetter
},
{
    path: '/by-name/:name?',
    name: 'ByName',
    component: MealsByName
},
{
    path: '/by-letter/:letter?',
    name: 'ByLetter',
    component: MealsByLetter
},
{
    path: '/by-ingredients/:ingredients?',
    name: 'ByIngredients',
    component: MealsByIngredients
},
{
    path: '/ingredients/:ingredients?',
    name: 'Ingredients',
    component: Ingredients
},
{
    path: '/meal-details/:id?',
    name: 'mealDetails',
    component: MealDetails
}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;