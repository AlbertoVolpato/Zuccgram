<template>
  <h1>Profile</h1>
  <div class="container" v-if="User.username !== null">
    <router-link type="button" class="btn btn-success" to="/login">
      Login
    </router-link>
    <router-link type="button" class="btn btn-success" to="/register">
      Register
    </router-link>
  </div>

  <div class="card" v-if="User.username === null">
    <div class="card-header">{{ User.username }}</div>
    <div class="card-body">
      <h5 class="card-title">{{ User.email }}</h5>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import LogInfo from "../LogInfo"
export default {
  name: "Profile",
  data() {
    return {
      User: {
        username: LogInfo.username,
        email: LogInfo.email
      },
    };
  },
  methods: {
    createNewUser() {
      username: this.User.username;
      email: this.User.email;
      password: this.User.password;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>