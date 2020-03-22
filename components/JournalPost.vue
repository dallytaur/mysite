<template>
  <div v-if="post">
    <div class="post-title">
      <h2 class="title is-2">{{ title }}</h2>
      <p>{{ date }}</p>
    </div>
    <div class="content" v-html="html"></div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    post: {}
  },
  computed: {
    title() {
      return !this.post ? "" : this.post.attributes.title;
    },
    date() {
      return !this.post
        ? ""
        : moment(this.post.attributes.date).format("dddd, MMMM Do YYYY");
    },
    html() {
      return !this.post ? "" : this.post.html;
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  padding-top: 1em;
}
</style>
