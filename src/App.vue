<template>
  <v-app>
    <v-toolbar app color="hsl(210, 50%, 9%)">
      <v-toolbar-title v-text="title" class="white--text"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content class="content">
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

.content {
  background-color: hsl(210, 47%, 19%) !important;
}

button,
li {
  outline: none;
  outline-color: transparent;
}
</style>

