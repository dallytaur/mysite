<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
      <navigation-menu />
      </div>
    </section>
    <Nuxt />
  </div>
</template>

<script>
export default {
  components: {
    'navigation-menu': () => import('~/components/NavigationMenu.vue'),
  },
};
</script>
