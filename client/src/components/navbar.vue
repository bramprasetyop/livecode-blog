<template>
<div class="ininavbar">

  <h2 id="heades">Go-Blog</h2>
</div></template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    logout() {
      localStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>
<style>

#logout {
  margin-right: 15px;
}

.ininavbar{
  /* border: 1px solid black; */
  width: 100%;
  height: 150px;
  margin-top: -95px;
  background-color: rgb(172, 194, 194)
}

#heades{
  font-family: sans-serif;
}




</style>






