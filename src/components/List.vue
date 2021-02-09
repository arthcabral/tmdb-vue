<template>
  <div id="app">
    <div>
      <input type="text"
        v-model="list.titulo"
        @keyup.enter="addMovie">
      <button  @click="addMovie">
        Add Movie
      </button>
      <button @click= "teste"> Teste </button>
    </div>
    <ul class="movieList">
      <li v-for="movie in movies" 
          :key="movie.id">
        {{ movie.name }} -
        <button @click="deleteMovie(movie)">
          Remove
        </button>
      </li>
    </ul>
  </div>
</template>

<script>

import firebase from 'firebase'

export default {
    name: 'list',
    data() {
        return{
           list: {
            titulo: '',
            timestamp: '',
           }
        }
    },
    firestore(){
        return {
            movies: db.collection('movies'),
        }
    }, 
    
    methods: {
      addMovie: function() {
        firebase
        .firestore()
        .collection("movies")
        .doc(firebase.auth().currentUser.uid)
        .collection("list").add(
          {
            titulo: this.newMovie,
            timestamp: new Date()
          }
        );
       
      },
       
      teste: function(){
        debugger
          console.log(this.$firestore)
          console.log(this.firestore)
      },
      deleteMovie: function(movie) {
        this.$firestore.movies.doc(movie['.key']).delete();
      }
    }
}

</script>
<style scoped>
 .movieList {
    list-style: none;
  }
</style>