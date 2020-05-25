<template>
    <div
        class="w-56 h-auto shadow-sm block bg-white rounded-lg m-4 "
        v-for="team in filteredTeams"
        v-bind:key="team.school"
      >
        <div class="px-2 py-2 favorite">
          <button class="hover:text-red-600 text-red-400 px-2 my-3 ml-16 absolute" :class="{ favorite : team.active }">
            <i class="fas fa-heart text-lg"  @click="toggleFavorite(this.team)"></i>
          </button>

          <img
            class="h-32 w-32 mx-auto"
            :src=" team.logos ? team.logos[0] : '../assets/not-found.png'" alt="Team Logo"

          />

          <h4 class="font-bold text-grey-700 text-lg mt-4 leading-none">{{ team.school }}</h4>
          <h4 class="font-bold text-grey-700 text-lg mb-2">{{ team.abbreviation }}</h4>
          <p class="text-gray-700 text-base">Mascot: {{ team.mascot }}</p>
          <div class="flex block justify-center">
          <p class="">Colors:</p>
          <div class="h-4 w-4 rounded-full mt-1 ml-1" v-bind:style="{ backgroundColor: team.color}"></div>
          <div class="h-4 w-4 rounded-full mt-1 ml-1" v-bind:style="{ backgroundColor: team.alt_color}"></div>
          </div>
          <button
            class="bg-gray-300 hover:bg-gray-400 px-2 m-4 rounded"
            @click="singleTeam(team.id, team)"
          >View</button>
        </div>
      </div>
</template>

<script>

export default {

}
</script>

<style>
</style>
