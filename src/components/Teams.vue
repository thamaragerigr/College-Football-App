<template>
  <div class="hello">
    <div class="justify-center flex wx-30 mt-8">
      <input
        class="bg-gray-200 hover:bg-white hover:border-gray-300 focus:outline-none focus:bg-white focus:shadow-outline focus:border-gray-300 rounded-full py-2 px-4 w-2/5"
        v-model="search"
        type="text"
        placeholder="Search..."
      />
      <button
        class="bg-grey-500 rounded w-auto flex justify-end items-center p-2 hover:text-blue-light"
      ></button>
    </div>

    <div id="equipos" class="flex flex-wrap justify-center mt-10">
      <div
        class="w-56 h-auto shadow-sm block bg-white rounded-lg m-4 "
        v-for="team in filteredTeams"
        v-bind:key="team.school"
      >
        <div class="px-2 py-2 favorite" @click="toggleFavorite" :class="{ active : favorite }">
          <button class="hover:text-red-600 text-red-400 px-2 my-3 ml-16 absolute">
            <i class="fas fa-heart text-lg"></i>
          </button>

          <img
            class="h-32 w-32 mx-auto"
            :src=" team.logos ? team.logos[0] : '../assets/not-found.png'"  @error="imageLoadOnError"

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
            @click="singleTeam(team.id)"
          >View</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Teams',
  data () {
    return {
      teams: [],
      search: '',
      favorite: false
    }
  },
  mounted () {
    axios
      .get(
        'https://api.collegefootballdata.com/teams'
      )
      .then(response => {
        this.teams = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    singleTeam (id) {
      this.$router.push('/team/' + id)
      console.log(this.team)
    },
    async toggleFavorite () {
      this.favorite = !this.favorite

      // make some call to your databse to update the value
    },
    imageLoadOnError () {
      this.team.logos[0] = '../assets/not-found.png'
    }
  },
  computed: {
    filteredTeams: function () {
      return this.teams.filter(team => {
        return team.school.match(this.search)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  margin-bottom: 5%;
}
</style>
