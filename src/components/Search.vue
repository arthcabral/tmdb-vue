<template>
  <div class="search">
    <h3>Buscar filme: </h3>
    <input type='text' placeholder='Digite o termo' v-model='query' @keyup='getResult(query)'>
        <div v-for='result in results' :key='result.id'>
            <p>{{result.title}}</p>
             <img v-bind:src="`http://image.tmdb.org/t/p/w500/${result.poster_path}`" width='100px'>
        </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'search',

  data () {
    return {
        query:'',
        results: '',
    }
  },

  methods: {
      getResult(query){
         axios.get('https://api.themoviedb.org/3/search/movie?api_key=f637c6f0b94e239705bb6c4b945a9ef9&language=pt-BR&query=' + query)
         .then(response => { this.results = response.data.results })
          console.log(query)
      }
  }
}
</script>
<style scoped>
.search{
  padding: '5px';
  border: 1px solid black;
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 80px;
  
}
</style>