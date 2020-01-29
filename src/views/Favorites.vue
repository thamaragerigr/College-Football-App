<template>
  <div class="favorites">
    <!--Header-->
    <header class="mt-12">
      <h1 class="text-white uppercase text-4xl font-extrabold">Favorite Teams</h1>
      <p class="text-white text-base">Encuentra los datos de tus equipos favoritos de football y compara entre ellos</p>
    </header>
    <!--Header-->
    <FavoritesList/>
  </div>
</template>

<script>
// @ is an alias to /src
import FavoritesList from '@/components/FavoritesList.vue'

export default {
  name: 'Favotires',
  components: {
    FavoritesList
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
