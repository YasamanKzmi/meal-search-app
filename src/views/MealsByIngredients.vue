<template>
  <div class="grid grid-cols-1 gap-6 p-3 md:grid-cols-3">
    <meal-item
      v-for="meal in meals"
      :key="meal.idMeal"
      :meal="meal"
    ></meal-item>
  </div>

  <div v-if="!meals.length" class="flex justify-center text-xl text-gray-500">
    <p>There are no meals</p>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import store from "@/store";
import MealItem from "@/components/MealItem.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const meals = computed(() => store.state.mealsByIngredients);

onMounted(() => {
  store.dispatch("searchMealsByIngredients", route.params.ingredients);
});
</script>