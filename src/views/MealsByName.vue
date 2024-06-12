<template>
  <div class="flex flex-col items-center">
    <input
      type="text"
      class="w-3/4 m-3 border-2 border-gray-300 rounded"
      placeholder="Search for meals"
      v-model="keyword"
      @input="searchMealsByName"
    />

    <div class="grid grid-cols-1 gap-6 p-3 md:grid-cols-3">
    <meal-item v-for="meal in meals" :key="meal.idMeal" :meal="meal"></meal-item>
    </div>

    <div v-if="!meals.length" class="flex justify-center text-xl text-gray-500">
    <p>There are no meals</p>
  </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import store from "@/store";
import { useRoute } from "vue-router";
import MealItem from "@/components/MealItem.vue";

const meals = computed(() => store.state.meals);

const keyword = ref("");

const route = useRoute();

function searchMealsByName() {
  store.dispatch("searchMeals", keyword.value);
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMealsByName();
  }
});
</script>