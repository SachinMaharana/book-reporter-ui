<template>
  <div id="app">
    <Header>Hello</Header>
    <drop-down></drop-down>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import DropDown from './components/DropDown.vue'



export default {
  name: 'app',
  components: {
    HelloWorld,
    Header,
    DropDown
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

body {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  /* background-color: honeydew; */
  /* background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%); */
  background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
}
</style>
