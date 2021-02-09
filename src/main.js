import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from "firebase"


Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyBrn7mmA9x4VmHsPhoW8mHQmH4eWXE_KVc",
  authDomain: "vue-auth-firebase-e1e6b.firebaseapp.com",
  projectId: "vue-auth-firebase-e1e6b",
  storageBucket: "vue-auth-firebase-e1e6b.appspot.com",
  messagingSenderId: "822974405394",
  appId: "1:822974405394:web:d82eea15026f1414a331cb",
  measurementId: "G-J182Z45G9H"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let app = '';
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App),
    }).$mount('#app');
  }
});

