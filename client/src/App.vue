<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="/">
      <img src="../public/pngegg.png" width="50px" height="50px" style="margin-left:20px">
      Zuccgram
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navContent"
      aria-controls="navContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-1">
        <li class="nav-item">
          <a class="nav-link active" href="/">Home</a>
        </li>
        <li class="nav-item btn-primary" data-bs-toggle="collapse" data-bs-target="#navbarToggler"
          aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <a class="nav-link active">New Post</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/profile">Profilo</a>
        </li>
      </ul>
    </div>
  </nav>
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div ref="menuCollapse" class="collapse navbar-collapse" id="navbarToggler">
    <div class="container" style="margin-top:20px">
      <div class="card">
        <label for="formGroupExampleInput">Utente</label>
        <input class="form-control" type="text" placeholder="inserisci un nome utente" v-model="User.username" />
        <label for="formGroupExampleInput">Titolo</label>
        <input class="form-control" type="text" placeholder="inserisci un titolo" v-model="User.text" />
        <div class="mb-3">
          <label for="formFile" class="form-label">Immagine</label>
          <input class="form-control" type="file" accept="image/jpeg" @change=uploadImage>
        </div>
        <div class="btn btn-dark" @click="addPost">Invia</div>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
import { Collapse } from "bootstrap";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      User: { username: "", text: "", image: "" },
      file: null,
    };
  },
  methods: {
    uploadImage(event) {
      this.file = event.target.files[0] ;
      console.log(this.file)
    },
    addPost() {
      console.log(this.file)

    let newPost = {
      username: this.User.username,
      text: this.User.text,
      image: this.file,
    };
    axios
      .post("http://localhost:5000/api/posts", newPost)
    //.then(window.location.reload());
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
</style>
