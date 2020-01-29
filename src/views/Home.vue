<template>
  <div class="home">
    <!--Header-->
    <header class="mt-12">
      <i class="fas fa-football-ball" style="color:white; font-size:150px;transform: rotate(45deg);"></i>
      <h1 class="text-white uppercase text-6xl font-extrabold">College Football</h1>
      <p class="text-white text-base">Find information about your favorite Football teams!</p>
    </header>
    <!--Header-->
    <Teams/>
  </div>
</template>

<script>
// @ is an alias to /src
import Teams from '@/components/Teams.vue'

export default {
  name: 'home',
  components: {
    Teams
  }
}
</script>

<style>
h1{
  font-family: 'Lato', sans-serif;
}
h4 {
  margin-bottom: 5%;
}

</style>
