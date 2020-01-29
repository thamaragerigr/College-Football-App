<template>
  <div>
   <h2>welcome to single movie component</h2>
          <div class="text-white mt-20" >{{singleMovie}}</div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      singleTeam: '',
    }
  },  mounted () {
    axios
      .get('https://api.collegefootballdata.com/teams')
      .then(response => {
        this.singleTeam = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    back () {
      this.$router.push('/')
    }
  }
}
</script>
<style>
</style>
