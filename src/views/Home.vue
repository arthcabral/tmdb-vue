<template>
  <div class="home">
    <HelloWorld msg="Wake up, Neo"/>
    <button @click="sair"> Sair </button>
  </div>
</template>

<script>
import firebase from 'firebase';

import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'home',
  components: {
    HelloWorld 
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
