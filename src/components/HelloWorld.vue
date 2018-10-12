<template>
  <v-container fluid grid-list-lg mt-5 class="container">
    <!-- <v-btn color="info" dark large class="button-v" @click="shuffle">Grid</v-btn> -->
    <v-layout row mb-4>
      <v-flex xs-6 class="selectflex">
        <v-select :items="monthsAvaiable" v-model="initialMonth" color="success" label="Months" v-on:change="month" persistent-hint hint="Filter By Month" background-color="white" outline flat id="select"></v-select>

        <v-select :items="genres" v-model="genreSelected" color="success" label="Genres" v-on:change="genreFunc" persistent-hint hint="Filter By Genre" background-color="white" outline flat id="select" multiple chips clearable deletable-chips></v-select>
      </v-flex>
      <v-flex xs-6 class="view">
        <v-btn color="rgb(11, 23, 34)" flat icon class="button-v" @click="change('grid')" :class="this.gridSelected ? 'btnBack' : ''">
          <v-icon medium>view_module</v-icon>
        </v-btn>
        <v-btn color="rgb(11, 23, 34)" flat icon class="button-v" @click="change('list')" :class="!this.gridSelected ? 'btnBack' : ''">
          <v-icon medium>view_list</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-divider class="divider"></v-divider>
    <div class="text-xs-center mb-4">
      <v-pagination v-model="page" :total-visible="12" :length="length" color="success" mb-4 circle></v-pagination>
    </div>
    <transition-group name="cards" tag="v-layout" :class="layout === 'list' ? 'manual-v-layout' :  'manual-v-layout-grid'">
      <v-flex v-if="layout === 'list'" v-for="d in filtered" :key="d.isbn" xs12 sm12 lg12 md12 mb-0>
        <v-list>
          <v-list-tile light three-line>
            <v-list-tile-content>
              <v-list-tile-title>{{ d.title }} {{d.author}}</v-list-tile-title>
              <v-list-tile-sub-title>{{ d.date }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-content id="genre-content">
              <v-chip v-for="(k,i) in d.genres" :key="i" label="" disabled>{{k}}</v-chip>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>
      <v-flex v-if="layout === 'grid'" v-for="d in filtered" :key="d.isbn" xs12 sm6 md4 lg4 mb-3>
        <v-card class="elevation-3" height="350px" width="95%" pr-0 id="cardss">
          <v-layout row>
            <v-flex xs7>
              <v-card-title primary-title class="card-title white--text">
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
              <v-chip v-for="(k,i) in d.genres" :key="i" label="" disabled>{{k}}</v-chip>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </transition-group>
    <v-btn absolute fab right bottom class="fab-floating" @click="$vuetify.goTo('#select')">
      <v-icon>arrow_upward</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import shuffle from "lodash.shuffle";
import books from "./result.json";

export default {
  name: "HelloWorld",
  data() {
    return {
      books: [],
      monthSelected: "",
      page: 1,
      length: 4,
      perPage: 12,
      total: "",
      duration: "",
      monthsAvaiable: [],
      genres: [],
      initialMonth: "",
      show: false,
      layout: "list",
      gridSelected: false,
      initialGenre: "",
      genreSelected: []
    };
  },

  created() {},
  mounted() {
    this.books = books.booksData.map(b => {
      b.genres = b.genres[0].split(",").map(c => c.trim());
      return b;
    });
    this.monthsAvaiable = [...new Set(this.books.map(b => b.month))];
    let allGenres = this.books.map(b => b.genres);
    let duplicatedGenres = [].concat(...allGenres);
    this.genres = [...new Set(duplicatedGenres)].sort(function(a, b) {
      if (a < b) return -1;
      else if (a > b) return 1;
      return 0;
    });
    this.initialMonth = this.monthsAvaiable[0];
  },
  methods: {
    shuffle() {
      this.books = shuffle(this.books);
    },
    change(t) {
      this.layout = t;
      this.gridSelected = !this.gridSelected;
    },
    setPaginationlength(n) {
      this.length = Math.floor(n / this.perPage) + 1;
    },
    month(monthSelected) {
      this.monthSelected = monthSelected;
      this.genreSelected = [];
      this.page = 1;
    },
    genreFunc(g) {
      this.genreSelected = g;
      this.page = 1;
    }
  },
  computed: {
    filtered() {
      let monthSelected = this.monthSelected;
      let selectedMonthBooks = this.books.filter(
        m => m.month === monthSelected
      );
      // console.log(selectedMonthBooks);
      if (this.genreSelected.length !== 0) {
        selectedMonthBooks = selectedMonthBooks.filter(b => {
          let bg = b.genres;
          return bg.some(v => this.genreSelected.includes(v));
        });
      }
      this.setPaginationlength(selectedMonthBooks.length);
      let start = (this.page - 1) * this.perPage;
      let end = start + this.perPage;
      return selectedMonthBooks.slice(start, end);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url("https://rsms.me/inter/inter-ui.css");
.container {
  margin-top: 60px !important;
}

#cardss {
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.12);
}
.cards-move {
  transition: transform 1s;
}

.btnBack {
  background-color: hsl(210, 49%, 15%);
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

.v-pagination li button {
  outline: none;
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
  flex-direction: column;
  padding-bottom: 8px !important;
  padding-top: 16px !important;
  padding-left: 10px;
  padding-right: 10px;
  background-color: hsl(210, 49%, 15%);
}

.manual-v-layout-grid {
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
  padding-left: 30px;
  padding-right: 30px;
  background-color: hsl(210, 49%, 15%);
}

button.v-pagination__item {
  outline: none;
  outline-color: transparent;
}
.fab-floating {
  bottom: 36px !important;
  right: 26px !important;
  background-color: hsl(42, 100%, 36%) !important;
  color: black;
}
.selectflex {
  width: 50%;
}
.theme--light.v-select .v-select__selections {
  color: rgba(255, 255, 255, 0.7);
  font-weight: bold;
}

.theme--light.v-label {
  color: white;
  font-weight: bold;
}

#app > div.v-menu__content > div > div {
  background-color: hsl(210, 47%, 19%) !important;
}

#app
  > div.v-menu__content.menuable__content__active
  > div
  > div
  > div
  a
  > div
  > div {
  color: white;
  font-weight: bold;
}

.theme--light.v-messages {
  color: rgba(255, 255, 255, 0.7);
  font-weight: bold;
}

.v-chip .v-chip__content {
  height: 26px;
}
.theme--light.v-chip--disabled {
  color: black;
}

#genre-content {
  flex-direction: row;
  justify-content: flex-end;
}

.view {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
</style>
