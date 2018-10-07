<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap="">
      <v-flex v-for="i in 12" :key="`4${i}`" xs12 sm6 md4 lg4>
        <v-card flat tile class="elevation-3">
          <v-img :src="`https://api.adorable.io/avatars/285/abott@adorable.png`" height="400px"></v-img>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
