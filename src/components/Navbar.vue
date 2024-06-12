<template>
  <header
    class="flex items-center justify-between h-20 text-sm bg-gray-200 md:text-lg header"
  >
    <div>
      <router-link :to="{ name: 'home' }" class="p-4">Home</router-link>
    </div>
    <div class="nav">
      <router-link
        :to="{ name: 'ByName' }"
        class="px-2 py-3 md:p-7 hover:bg-slate-400"
        >Search by name</router-link
      >
      <router-link
        :to="{ name: 'ByLetter' }"
        class="px-2 py-3 hover:bg-slate-400 md:p-7"
        >Search by letter</router-link
      >
      <router-link
        :to="{ name: 'Ingredients' }"
        class="px-2 py-3 hover:bg-slate-400 md:p-7"
        >Serach by ingredients</router-link
      >
    </div>

  </header>
</template>

<style scoped>
@media screen and (max-width: 500px) {
  .header{
    display: flex;
    flex-direction: column;
    margin: 3px;
    height: 200px;
    padding: 8px;
  }
  .nav{
    display: flex;
    flex-direction: column;
    text-align: center;
  }
}
</style>



