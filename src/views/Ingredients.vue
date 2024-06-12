<template>
  <router-link
    v-for="ingredient in ingredients"
    :key="ingredient.idIngredient"
    :to="{
      name: 'ByIngredients',
      params: { ingredients: ingredient.strIngredient },
    }"
  >
    <div
      class="p-6 border-b border-gray-200 shadow-lg max-w-[900px] m-auto mt-3"
    >
      <h2 class="mt-6 mb-6 text-4xl font-semibold cursor-pointer">
        {{ ingredient.strIngredient }}
      </h2>
      <p class="mb-6">{{ ingredient.strDescription }}</p>
    </div>
  </router-link>

  
</template>


<script setup>
import { ref, onMounted } from "vue";
import axiosClient from "@/axiosClient";
const ingredients = ref([]);

onMounted(async () => {
  const response = await axiosClient.get(`list.php?i=list`);
  ingredients.value = response.data.meals;
});
</script>