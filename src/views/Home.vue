<template>
  <div class="flex flex-col justify-center">
    <div class="p-6">
      <input
        type="text"
        class="w-full border-2 border-gray-300 rounded"
        placeholder="Search for meals"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import axiosClient from '@/axiosClient';

const ingredients = ref([])

onMounted(async()=>{
  const response = await axiosClient.get('/list.php?i=list')
  console.log(response.data);
  ingredients.value = response.data
})
</script>