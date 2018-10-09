<template>
  <v-container fluid grid-list-lg mt-5 class="container">
    <v-btn color="info" dark large class="button-v" @click="shuffle">Shuffle</v-btn>
    <v-btn color="info" dark large class="button-v" @click="month('October')">October</v-btn>
    <v-btn color="info" dark large class="button-v" @click="month('November')">November</v-btn>
    <v-btn color="info" dark large class="button-v" @click="month('December')">December</v-btn>
    <v-btn color="info" dark large class="button-v" @click="month('All')">All</v-btn>
    <v-divider class="divider"></v-divider>
    <v-pagination v-model="page" :length="length" circle></v-pagination>
    <transition-group name="cards" tag="v-layout" class="manual-v-layout">
      <v-flex v-for="d in filtered" :key="d.isbn" xs12 sm6 md4 lg4 mb-3>
        <v-card class="elevation-3" height="350px" width="95%" pr-0 id="cardss">
          <v-layout row>
            <v-flex xs7>
              <v-card-title primary-title class="card-title">
                <div>
                  <div class="title">{{d.title}}</div>
                  <div>{{d.author}}</div>
                  <div>{{d.date}}</div>
                </div>
              </v-card-title>
            </v-flex>
            <v-flex xs5>
              <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png" height="125px" contain></v-img>
            </v-flex>
          </v-layout>
          <v-layout align-end row>
            <v-flex xs12>
              <v-chip v-for="(k,i) in d.genres[0].split(',')" :key="i" label="" disabled>{{k}}</v-chip>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </transition-group>
  </v-container>
</template>

<script>
import shuffle from 'lodash.shuffle'
import axios from 'axios'
import books from './result.json'

export default {
  name: 'HelloWorld',
  data(){
    return {
      books: [],
      m: '',
      page:1,
      length: 4,
      perPage : 12,
      total: "",
      duration: "",
      monthsAvaiable : [],
      genres: []
    }
  },

  created() {
    this.books = books.booksData
    this.monthsAvaiable = new Set(this.books.map(b => b.month))
    let allGenres = this.books.map(b => b.genres[0])
    let twoDimGenres = allGenres.map(s => s.split(","))
    let duplicatedGenres = [].concat(...twoDimGenres);
    this.genres = new Set(duplicatedGenres)
  },
   methods: {
    shuffle() {
      this.books = shuffle(this.books)
    },
    month(m) {
      this.m = m
    }
  },
  computed: {
    filtered() {
      let mo = this.m
      if (mo === 'October') {
        let n =  this.books.filter(m => m.month === mo)
        this.total = n
        this.length = Math.floor(n.length / this.perPage)
        let start = this.page * this.perPage;
        let end = start + this.perPage;
        return n.slice(start, end)
      }
      if (mo === 'November') {
         let n =  this.books.filter(m => m.month === mo)
        this.total = n
        this.length = Math.floor(n.length / this.perPage)
        let start = this.page * this.perPage;
        let end = start + this.perPage;
        return n.slice(start, end)
      }
      if (mo === 'December') {
         let n =  this.books.filter(m => m.month === mo)
          this.total = n
          this.length = Math.floor(n.length / this.perPage)
          return n
      } else {
        return this.books
      }
    },
    pageCount() {
      let l = this.books.length,
          s = this.size;
      return Math.floor(l/s);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin-top: 60px !important;
}

#cardss {
  display: flex;
  flex-direction: column;
  padding: 15px;
}
.cards-move {
  transition: transform 1s;
}

.cards-enter-active {
  transition: opacity, transform 500ms;
}
.cards-leave-active {
  transition: opacity, transform 500ms;
}
.cards-enter-to,
.cards-leave {
  opacity: 1;
  transition: all 1.5s;
  /* transform: translateY(10px); */
}
.cards-enter, .cards-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transition: all 0.5s;
  transform: translateY(10px);
}

.card-title {
  padding-top: 0;
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
