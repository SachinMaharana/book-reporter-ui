<template>
  <v-container fluid grid-list-lg mt-5 class="container">
    <v-btn color="info" dark large class="button-v" @click="shuffle">Shuffle</v-btn>
    <v-btn color="info" dark large class="button-v" @click="cho('October')">October</v-btn>
    <v-btn color="info" dark large class="button-v" @click="cho('All')">All</v-btn>
    <v-btn color="info" dark large class="button-v" @click="cho('November')">November</v-btn>
    <v-btn color="info" dark large class="button-v" @click="cho('December')">December</v-btn>
    <v-divider class="divider"></v-divider>
    <transition-group name="cards" tag="v-layout" class="manual-v-layout">
      <v-flex v-for="d in filtered" :key="d.isbn" xs12 sm6 md4 lg4 mb-3>
        <v-card class="elevation-3" height="350px" id="cardss">
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
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                height="125px"
                contain
              ></v-img>
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
import books from './result.json'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data(){
    return {
      books: books.booksData,
      selected : "All"
    }
  },
   methods: {
    shuffle() {
      this.books = shuffle(this.books)
    },
    cho(d) {
      this.selected = d
      console.log(this.selected);
    }
  },
  computed: {
    filtered() {
      let s = this.selected 
      switch (s) {
        case "All":
          return this.books
        case "October":
          console.log("ok");
          console.log(this.books.filter(m => m.month = s));
          return this.books.filter(m => m.month = s)
        case "November":
          return this.books.filter(m => m.month = s)
        case "December":
          return this.books.filter(m => m.month = s)
        default:
          break;
      }
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
