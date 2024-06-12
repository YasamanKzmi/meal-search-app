<template>
  <div class="flex flex-col items-center max-w-[730px] m-auto mt-6">
    <h2 class="mb-6 text-5xl font-bold">{{ meal.strMeal }}</h2>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" />
    <div class="grid grid-cols-1 mt-3 mb-2 text-lg md:grid-cols-3">
      <div class="mx-12"><strong>Category: </strong>{{ meal.strCategory }}</div>
      <div class="mx-12"><strong>Areas:</strong> {{ meal.strArea }}</div>
      <div class="mx-12"><strong>Tags:</strong> {{ meal.strTags }}</div>
    </div>

    <div class="grid w-full grid-cols-1 p-6 mt-6 md:grid-cols-2">
      <div class="mb-6">
        <h2 class="text-2xl font-bold">Ingredients</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)" :key="el">
            <li v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>

      <div>
        <h2 class="text-2xl font-bold">Measures</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)" :key="el">
            <li v-if="meal[`strMeasure${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axiosClient from "@/axiosClient";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const meal = ref({});

const route = useRoute();

onMounted(async () => {
  //    console.log(route.params.id);
  const response = await axiosClient.get(`lookup.php?i=${route.params.id}`);
  meal.value = response.data.meals[0];
  //    console.log(meal.value);
});
</script>