<template>
  <div
    class="p-6 bg-white shadow-lg round-xl"
  >
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="object-cover w-full transition-transform h-72 rounded-t-xl hover:scale-105"
      />
    </router-link>
    <h2 class="my-8 font-semibold">{{ meal.strMeal }}</h2>
    <p class="mb-9">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto error eos
      odit quam nobis fugit magnam dicta atque modi quae.
    </p>
    <a
      :href="meal.strYoutube"
      class="p-2 text-white transition-colors bg-red-500 rounded cursor-pointer hover:bg-red-700"
      >YouTube</a
    >
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const {meal} = defineProps({
    meal: Object
})
</script>