<template>
  <v-container fluid grid-list-lg mt-5 class="container">
    <v-btn color="error" dark large class="button-v" @click="shuffle">Shuffle</v-btn>
    <v-divider class="divider"></v-divider>
    <transition-group name="cards" tag="v-layout" class="manual-v-layout">
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
    </transition-group>
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

.cards-move {
  transition: transform 1s;
}

.button-v {
  margin-left: 0;
  margin-bottom: 20px;
}

.divider {
  margin-bottom: 20px;
}

.manual-v-layout {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  padding-bottom: 8px !important;
  padding-top: 16px !important;
  padding-left: 10px;
  padding-right: 10px;
  background-color: lightgray;
}
</style>
