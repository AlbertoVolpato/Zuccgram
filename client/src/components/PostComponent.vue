<template>
  <h1 style="margin-top:20px ; margin-bottom:10px">Ultimi Post</h1>
  <div class="container">
    <div v-for="post in Posts" :key="post.id">
      <div class="card">
        <div class="card-header" style="font-weight: bold ; font-size: 20px">{{ post.username }}</div>
        <div class="card-body">
          <h5 class="card-title">{{ post.text }}</h5>
          <div ref="commentCollapse" class="collapse navbar-collapse" id="commentToggler">
            <div class="container">
              <label for="formGroupExampleInput">Commenta</label>
              <input class="form-control" type="text" placeholder="scrivi il tuo username" v-model="Comment.username" />
              <input class="form-control" type="text" placeholder="scrivi il tuo commento" v-model="Comment.comment" />
              <div class="btn btn-dark" @click="addComment(post._id)">
                Invia
              </div>
            </div>
          </div>
          <button type="ciao" class="btn btn-dark" @click="delatePost(post._id)">
            delate
          </button>
          <div v-for="comment in Comments" :key="comment.post_id">
            <div v-if="comment.post_id === post._id">
              <h5 class="card-text">
                {{ comment.username }}: {{ comment.comment }}
              </h5>
            </div>
          </div>
        </div>
        <div class="card-footer">
          {{ post.createdAt }}
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
</style>
