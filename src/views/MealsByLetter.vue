<template>
  <div class="flex justify-center p-6 sm:gap-x-2 md:gap-x-4 gap-x-1">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
      >{{ letter }}
    </router-link>
  </div>

  <div class="grid grid-cols-1 gap-6 p-3 md:grid-cols-3">
    <meal-item
      v-for="meal in meals"
      :key="meal.idMeal"
      :meal="meal"
    ></meal-item>
  </div>
</template>


<script setup>
import { onMounted, computed, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import MealItem from "@/components/MealItem.vue";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const store = useStore();
const route = useRoute();

const meals = computed(() => store.state.mealsByLetter);

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>
