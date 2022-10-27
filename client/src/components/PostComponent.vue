<template>
  <div class="container">
    <div v-for="post in Posts" :key="post.id">
      <div class="card bg-light mb-3 shadow-lg">
        <div class="card-body">
          <h5 class="card-title" style="margin-bottom:15px">{{ post.username }}</h5>
          <img class="card-img-top" :src="`${ServerUrl}/${post.image}`" style="max-width: 100% ; height: 50%;">
          <h5 class="card-text" style="margin-top: 20px;">{{post.text}}</h5>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import ServerUrl from "../main";

export default {
  name: "PostComponent",
  data() {
    return {
      ServerUrl,
      Posts: {},
      Comments: {},
      User: { username: "", title: "", description: "" },
      Comment: { username: "", comment: "", post_id: " " },
    };
  },
  mounted() {
    axios.get(`${ServerUrl}/api/posts`).then((response) => {
      this.Posts = response.data;
    });
    axios.get(`${ServerUrl}/api/comments`).then((response) => {
      this.Comments = response.data;
    });
  },
  methods: {
    gotoPost(id) {
      this.$router.push(`/post/${id}`)
    },
    addPost() {
      let newPost = {
        username: this.User.username,
        title: this.User.title,
        desc: this.User.description,
      };
      axios
        .post(`${ServerUrl}/api/posts`, newPost)
        .then(window.location.reload());
    },
    delatePost(id) {
      console.log(id);
      axios
        .delete(`${ServerUrl}/api/posts/${id}`)
        .then(window.location.reload());
    },
    addComment(id) {
      let newComment = {
        post_id: id,
        username: this.Comment.username,
        comment: this.Comment.comment,
      };
      axios
        .post(`${ServerUrl}/api/comments/`, newComment)
        .then(window.location.reload());
    },
    delateComment(id) {
      console.log(id);
      axios
        .delete(`${ServerUrl}/api/comments/${id}`)
        .then(window.location.reload());
    },
  },
};
</script>

<style scoped>
.btn {
  margin: 5px;
}
.card {
  margin-bottom: 30px;
}

.container {
  margin-top:30px;
}
</style>
