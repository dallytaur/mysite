<template>
  <b-navbar type="is-primary" spaced>
    <template slot="brand">
      <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">
        <span class="title is-3">🐕 Nadia Mayer</span>
      </b-navbar-item>
    </template>
    <template slot="start"></template>

    <template slot="end">
      <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">Home</b-navbar-item>
      <b-navbar-item tag="nuxt-link" :to="{ name: 'journal' }">Journal</b-navbar-item>
      <b-navbar-item tag="nuxt-link" :to="{ name: 'gallery' }">Gallery</b-navbar-item>
      <b-navbar-item tag="nuxt-link" :to="{ name: 'faq' }">FAQ</b-navbar-item>
    </template>
  </b-navbar>
</template>
