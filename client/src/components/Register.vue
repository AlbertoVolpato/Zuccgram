<template>
  <h1>Register</h1>
  <div class="container">
    <div class="form-group">
      <label for="exampleDropdownFormEmail1">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleDropdownFormEmail1"
        placeholder="email@example.com"
        v-model="User.email"
      />
    </div>
    <div class="form-group">
      <label for="exampleDropdownFormEmail1">Username</label>
      <input
        type="username"
        class="form-control"
        id="exampleDropdownFormEmail1"
        placeholder="exemple"
        v-model="User.username"
      />
    </div>
    <div class="form-group">
      <label for="exampleDropdownFormPassword1">Password</label>
      <input
        type="password"
        class="form-control"
        id="exampleDropdownFormPassword1"
        placeholder="Password"
        v-model="User.password"
      />
    </div>
    <button type="submit" class="btn btn-primary" @click="createNewUser">
      Sign up
    </button>
    <div class="dropdown-divider"></div>
    <router-link class="dropdown-item" href="#" to="/login"
      >Already have an Acount? Sign in</router-link
    >
    <a class="dropdown-item" href="#">Forgot password?</a>
  </div>
</template>

<script>
/* eslint-disable */
import ServerUrl from "../main";
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      User: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    createNewUser() {
      let newUser = {
        username: this.User.username,
        email: this.User.email,
        password: this.User.password,
      };
      axios
        .post(`${ServerUrl}/api/auth/register`, newUser)
        .then(
        window.location.reload(),
        );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>