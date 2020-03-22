<template>
  <div class="container">
    <center>
      <!-- <img src="~/assets/art/5h4d0wn3rd - stickers/09-shrug.png" alt=""/> -->
      <h1 v-if="error.statusCode === 404" class="title is-1">Page not found</h1>
      <h1 v-else class="title is-1">An error occurred</h1>
      <nuxt-link to="/">Return to Home page</nuxt-link>
    </center>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>