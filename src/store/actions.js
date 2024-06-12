import axiosClient from "../axiosClient.js";

export default {
  async searchMeals({ commit }, payload) {
    const response = await axiosClient.get(`search.php?s=${payload}`)
    console.log(response.data.meals);
      commit("setMealsToState", response.data.meals);
   
  },
  async searchMealsByLetter({ commit }, payload) {
    const response = await axiosClient.get(`search.php?f=${payload}`)
    console.log(response.data.meals);
      commit("setMealsByLetter", response.data.meals);
   
  },
  async searchMealsByIngredients({ commit }, payload) {
    const response = await axiosClient.get(`filter.php?i=${payload}`)
    console.log(response.data.meals);
      commit("setMealsByIngredients", response.data.meals);
   
  },
};
