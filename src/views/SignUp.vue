<template>
  <div class="sing-up">
    <h1>Crie uma nova conta</h1>
    Nome: <input type="text" placeholder="Nome completo" />
    <br />

    Email: <input type="text" placeholder="exemplo@gmail.com" v-model="email" />
    <br />

    Data de nascimento: <input type="text" placeholder="dd/mm/aaaa" />
    <br />

    Senha: <input type="password" placeholder="Senha" v-model="senha" />
    <br />

    <button @click="signUp">Registrar</button>
    <span>
      ou retorne ao
      <router-link to="/login"> login.</router-link>
    </span>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "signUp",
  data() {
    return {
      email: "",
      senha: "",
    };
  },

  methods: {
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.senha)
        .then(
          (user) => {
            this.$router.replace("home");
          },
          (err) => {
            alert("Aconteceu algoo inesperado. " + err.message);
          }
        );
    },
  },
};
</script>