<template>
  <div id="individual-view" class="flex justify-center mt-32">
    <div class="max-w-sm w-1/2 lg:max-w-full lg:flex justify-center">
      <div
        class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b rounded-lg p-4 flex flex-col justify-between leading-normal"
      >
        <div class="mb-8 justify-center">
         <img
            class="h-32 w-32 mx-auto"
            src="../assets/not-found.png"
          />
          <div class="text-gray-900 font-bold text-xl mb-2 mt-4">{{ singleTeam }}</div>
          <p class="text-gray-700 text-base">
          Mascot: { team.mascot } <br>
          Abbreviation: { team.mascot } <br>
          Alternative Names: { team.alt_name } <br>
          Conference: { team.conference } <br>
          Division: { team.division } <br>
          </p>
        </div>
        <div class="flex items-center justify-center -mt-8">
         <div class="text-sm ">
            <p class="text-gray-900 leading-none mr-2">Colors</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['id'],
  data () {
    return {
      singleTeam: ''
    }
  },
  mounted () {
    axios
      .get('https://api.collegefootballdata.com/teams')
      .then(response => {
        this.singleTeam = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style>
</style>
