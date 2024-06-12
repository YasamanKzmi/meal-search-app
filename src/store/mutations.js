export default {
  setMealsToState(state, payload) {
    state.meals = payload;
  },
  setMealsByLetter(state, payload) {
    state.mealsByLetter = payload;
  },
  setMealsByIngredients(state, payload){
    state.mealsByIngredients = payload;
  }
};
