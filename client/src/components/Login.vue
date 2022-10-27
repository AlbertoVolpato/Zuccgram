<template>
  <h1>Login</h1>
  <div class="container">
    <form class="px-4 py-3">
      <div class="form-group">
        <label for="exampleDropdownFormEmail1">username</label>
        <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"
          v-model="User_to_log.username" />
      </div>
      <div class="form-group">
        <label for="exampleDropdownFormPassword1">Password</label>
        <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password"
          v-model="User_to_log.password" />
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="dropdownCheck" />
        <label class="form-check-label" for="dropdownCheck">
          Remember me
        </label>
      </div>
      <button type="submit" class="btn btn-primary" @click="LogUser">Sign in</button>
    </form>
    <div class="dropdown-divider"></div>
    <router-link class="dropdown-item" href="#" to="/register">New around here? Sign up</router-link>
    <h1>{{ User_logged.email }}</h1>
    <a class="dropdown-item" href="#">Forgot password?</a>
  </div>
</template>
<script>
/* eslint-disable */
import ServerUrl from "../main";
import axios from "axios";

//LogInfo = {username:"Alberto",email:"albertovolpato"}

export default {
  name: "Login",
  data() {
    return {
      User_to_log: {
        username: "",
        email: "",
        password: "",
      },
      User_logged: {
        username: "",
        email: "",
      }
    };
  },
  methods: {
    LogUser() {
      let newUser = {
        username: this.User_to_log.username,
        password: this.User_to_log.password,
      };
      axios
        .post(`${ServerUrl}/api/auth/login`, newUser)
        .then((response) => {
          this.User_logged = response.data;
          console.log(response.data);
          console.log(this.User_logged);
          window.location.reload();
        });
    },
  },
};
</script>
<style scoped>
</style>