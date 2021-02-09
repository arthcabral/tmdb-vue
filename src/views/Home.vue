<template>
  <div class="home">
    <button @click="sair">Encerrar sessão</button>
    <List />
    <Search />
  </div>
</template>

<script>
import firebase from "firebase";
import Search from "@/components/Search";

export default {
  name: "home",
  components: {
    Search,
  },
  methods: {
    sair: function () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    },
  },
};
</script>
<style scoped>
.home{
    width: 1000px;
    margin:  auto;
}
</style>