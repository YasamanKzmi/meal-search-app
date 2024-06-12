<template>
  <div class="h-full bg-white">
   <navbar></navbar>
    <main><router-view></router-view></main>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>
