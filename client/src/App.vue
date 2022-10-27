<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="/">
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-loom" width="50" height="50"
        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="#D36305" stroke-linecap="round"
        stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M17.464 6.518a6.001 6.001 0 1 0 -3.023 7.965"></path>
        <path d="M17.482 17.464a6.001 6.001 0 1 0 -7.965 -3.023"></path>
        <path d="M6.54 17.482a6.001 6.001 0 1 0 3.024 -7.965"></path>
        <path d="M6.518 6.54a6.001 6.001 0 1 0 7.965 3.024"></path>
      </svg>
      Zuccgram
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navContent"
      aria-controls="navContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-1">
        <li class="nav-item">
          <a class="nav-link active  btn" href="/" style="background-color: #F8B310;"><strong>Home</strong></a>
        </li>
        <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler"
          aria-expanded="false" aria-label="Toggle navigation">
          <a class="nav-link active  btn" style="background-color: #E0183C;"><strong>Post</strong></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active  btn" href="/profile"
            style="background-color: aquamarine;"><strong>Profilo</strong></a>
        </li>
      </ul>
    </div>
  </nav>
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div ref="menuCollapse" class="collapse navbar-collapse" id="navbarToggler">
    <div class="container" style="margin-top:20px">
      <div class="card">
        <label for="formGroupExampleInput"><strong>Utente</strong></label>
        <input class="form-control" type="text" placeholder="inserisci un nome utente" v-model="User.username" />
        <label for="formGroupExampleInput"><strong>Titolo</strong></label>
        <input class="form-control" type="text" placeholder="inserisci un titolo" v-model="User.text" />
        <div class="mb-3 container">
          <label for="formFile" class="form-label"><strong>Immagine</strong></label>
          <input class="form-control" type="file" accept="image/jpeg" @change=uploadImage>
        </div>
        <div class="btn btn-dark" @click="addPost" style="background-color: #E0183C">Invia</div>
      </div>
    </div>
  </div>
  <router-view></router-view>
  <footer class="bg-dark text-center text-white" style="height: 100px">
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2022 Copyright:
      <a class="text-white">Alberto Volpato </a>
      <a class="text-white">Tommaso Ronchin</a>
    </div>
  </footer>
</template>

<script>
import { Collapse } from "bootstrap";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      User: { username: "", text: "" },
      file: null,
    };
  },
  methods: {
    uploadImage(event) {
      this.file = event.target.files[0];
    },
    addPost() {
      const formData = new FormData();
      formData.append('image', this.file);
      formData.append('username', this.User.username);
      formData.append('text', this.User.text);
      console.log(formData)
      axios
        .post("http://localhost:5000/api/posts", formData)
        .then(window.location.reload());
    },
  },

  mounted() {
    // eslint-disable-next-line no-new
    new Collapse(this.$refs.menuCollapse, { toggle: false });
  },
};
</script>

<style>
#app {
  text-align: center;
}

.btn {
  margin-top: 7px;
  margin-bottom: 2px;
  margin-right: 2px;
  margin-left: 2px;
}

.input {
  margin-left: 5px;
  margin-right: 5px;
}
</style>
