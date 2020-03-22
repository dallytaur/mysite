<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title is-1">Journal</h1>
        <div class="content">
          <div class="box">
            <journal-post v-if="post" :post="post" />
            <hr />
            <nuxt-link to="/journal">← Back to Journal</nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  components: {
    "journal-post": () => import("~/components/JournalPost.vue")
  },
  data() {
    return {
      post: {}
    };
  },
  async asyncData({ params }) {
    try {
      const { attributes, html } = await import(`~/journal/${params.slug}.md`);
      return {
        post: {
          key: params.slug,
          name: params.slug,
          attributes,
          html
        }
      };
    } catch (err) {
      console.debug(err);
      return false;
    }
  }
};
</script>
