<template>
  <div id="app">
   <div id="menu">
    <ul class="flex justify-center">
      <router-link to="/"><li>
        <a
          class="text-center block font-black py-5 px-5  hover:underline text-white"
          href="#"
        >Home</a>
      </li>
         </router-link>
      <router-link to="/favorites"><li>
        <a
          class="text-center block font-black py-5 px-5   hover:underline text-white"
          href="#"
        >Favorites</a>
      </li></router-link>
    </ul>
  </div>
    <router-view/>
  </div>
</template>

<script>
</script>

<style>
body{
   background-color: #191919;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: 'ABeeZee', sans-serif;
}
#menu{
  background-color: rgba(199, 208, 216, .1);
}

input, button {
  outline:0;
}
</style>
