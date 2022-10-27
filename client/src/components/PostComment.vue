<template>
    <div class="container">
        <div class="card">
            <div class="card-header">{{ post.username }}</div>
            <div class="card-body">
                <h5 class="card-title">{{ post.text }}</h5>
                <div ref="commentCollapse" class="collapse navbar-collapse" id="commentToggler">
                    <div class="container">
                        <label for="formGroupExampleInput">Commenta</label>
                        <input class="form-control" type="text" placeholder="scrivi il tuo username"
                            v-model="post.username" />
                        <input class="form-control" type="text" placeholder="scrivi il tuo commento"
                            v-model="post.comment" />
                        <div class="btn btn-dark" @click="addComment(post._id)">
                            Invia
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                {{ post.createdAt }}
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import ServerUrl from "../main";

export default {
    data() {
        return {
            id: this.$route.params.id,
            post: {}
        }
    },
    mounted() {
        axios.get(`${ServerUrl}/api/posts/${this.id}`).then((response) => {
            this.post = response.data;
            console.log(this.id)
            console.log(this.post)
        });
    }
}
</script>
<style scoped>
</style>