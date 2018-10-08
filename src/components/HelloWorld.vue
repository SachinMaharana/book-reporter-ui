<template>
  <v-container fluid grid-list-lg mt-5 class="container">
    <v-btn color="error" dark large class="button-v" @click="shuffle">Shuffle</v-btn>
    <v-divider class="divider"></v-divider>
    <v-layout row wrap="">
      <v-flex v-for="d in books" :key="d.isbn" xs12 sm6 md4 lg4 mb-3>
        <v-card flat tile class="elevation-3" height="350px">
          <v-layout row>
            <v-flex xs7>
              <v-card-title primary-title>
                <div>
                  <div class="headline">{{d.title}}</div>
                  <div>{{d.author}}</div>
                  <div>{{d.date}}</div>
                </div>
              </v-card-title>
            </v-flex>
            <v-flex xs5>
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                height="125px"
                contain
              ></v-img>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import shuffle from 'lodash.shuffle'
import books from './data.json'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data(){
    return {
      books: books
    }
  },
   methods: {
    shuffle() {
      this.books = shuffle(this.books)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin-top: 60px !important;
}

.button-v {
  margin-left: 0;
  margin-bottom: 20px;
}

.divider {
  margin-bottom: 20px;
}
</style>
