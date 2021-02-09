<template>
    <div class="home">
      <button @click="sair"> Sair </button>  
      <List/>
      <Search/> 
    </div>
</template>

<script>
import firebase from 'firebase';
import Search from '@/components/Search'
import List from '@/components/List'


export default {
  name: 'home',
  components: {
    Search,
    List
    
  },
  methods: {
    sair: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>
