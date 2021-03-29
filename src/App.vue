<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <vHeader></vHeader>
    <router-view/>
  </div>
</template>

<script>
import vHeader from "./components/header"
export default {
  name: 'App',
  components:{
    vHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  padding: 0;
  margin: 0;
  text-align: left;
}
li{
  list-style: none;
}
</style>
