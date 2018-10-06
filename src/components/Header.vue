<template>
  <div class="header">
      <h2 id="header-title">{{header}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String,
  },
  data() {
    return {
        header: ""
    }
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: grid;
  width: 100%;
  height: 90px;
  /* background-image: linear-gradient(to top, #a3bded 0%, #6991c7 100%); */
  background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
  justify-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12);
}

#header-title {
  color: white;
  margin: auto;
}
</style>
