<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      title: 'Coming Soon'
    }
  }
}
</script>

<style>
button.v-pagination__item {
  outline: none;
  outline-color: transparent;
}

button,
li {
  outline: none;
  outline-color: transparent;
}
</style>

