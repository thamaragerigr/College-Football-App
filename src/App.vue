<template>
  <div id="app">
   <div id="menu">
    <ul class="flex justify-center">
      <li class="">
        <a
          class="text-center block font-black py-5 px-5  hover:border text-white"
          href="#"
        ><router-link to="/">Home</router-link></a>
      </li>
      <li class="">
        <a
          class="text-center block font-black py-5 px-5  hover:border text-white"
          href="#"
        ><router-link to="/favorites">Favorites</router-link></a>
      </li>
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
