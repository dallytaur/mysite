<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title is-1">Journal</h1>
        <div class="content">
          <div class="box">
            <h2 class="subtitle">Most Recent Posts</h2>
            <ul class="post-list">
              <li v-for="post in posts" :key="post.attributes.title">
                <nuxt-link
                  :to="`journal/${post.name}`"
                >{{post.attributes.title}} -- {{ postDate(post) }}</nuxt-link>
              </li>
            </ul>

          </div>
          <div class="box">
            <h2 class="subtitle">Newest Post</h2>

            <div v-if="posts">
              <journal-post :post="firstPost" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import moment from "moment";
export default {
  components: {
    "journal-post": () => import("~/components/JournalPost.vue")
  },

  async asyncData() {
    const postFiles = require.context("~/journal/", true, /\.md$/);
    const posts = postFiles
      .keys()
      .sort((a, b) => (a > b ? -1 : 1))
      .slice(0, 10)
      .map(postFile => {
        const [, name] = postFile.match(/\/(.+)\.md$/);
        const { attributes, html } = postFiles(postFile);
        return {
          key: postFile,
          name,
          attributes,
          html
        };
      });
    return {
      posts
    };
  },
  computed: {
    firstPost() {
      return this.posts[0];
    }
  },
  methods: {
    postDate(post) {
      return moment(post.attributes.date).format("D MMMM YYYY");
    }
  }
};
</script>

<style lang="scss" scoped>
.post-list {
  list-style: disc;
  margin-left: 2em;
}
</style>
