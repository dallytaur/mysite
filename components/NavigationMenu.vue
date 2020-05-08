<template>
  <b-navbar type="is-primary" spaced>
    <template slot="brand">
      <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">
        <span class="title is-3">🐕‍🦺🔧Nadia Mayer</span>
      </b-navbar-item>
    </template>
    <template slot="start"></template>

    <template slot="end">
      <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">Home</b-navbar-item>
      <b-navbar-item tag="nuxt-link" :to="{ name: 'buyinfo' }">Commissioning</b-navbar-item>
      <!--<b-navbar-item tag="nuxt-link" :to="{ name: 'gallery' }">Gallery</b-navbar-item>-->
      <b-navbar-item tag="nuxt-link" :to="{ name: 'faq' }">FAQ</b-navbar-item>
      <b-navbar-item tag="nuxt-link" :to="{ name: 'talktome' }">Contact Me</b-navbar-item>      
      <b-navbar-item tag="nuxt-link" :to="{ path: '/projects' }">Projects</b-navbar-item>
      <b-navbar-item tag="nuxt-link" :to="{ path: '/shop' }">Shop</b-navbar-item>
      <!--<b-navbar-item tag="nuxt-link" :to="{ name: 'gfc' }">Group furry commission project</b-navbar-item>-->
    </template>
  </b-navbar>
</template