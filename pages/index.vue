<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Primary title
          </h1>
          <h2 class="subtitle">
            Primary subtitle
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">

          <div class="column">
            <div class="card">
              <div class="card-content">
                <h2 class="title">Thing</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum dolorem modi in. </p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="card-content">
                <h2 class="title">Thing</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum dolorem modi in. </p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="card-content">
                <h2 class="title">Thing</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum dolorem modi in. </p>
              </div>
            </div>
          </div>
          
          <!-- <div class="column">
            <div class="card">
              <div class="card-content">
                <h2 class="title">Thing</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum dolorem modi in. </p>
              </div>
            </div>
          </div> -->

        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      isIOS: false,
      showBSVQRCode: false
    };
  },
  mounted() {
    this.isIOS =
      !!navigator &&
      !!navigator.platform &&
      /iPad|iPhone|iPod/.test(navigator.platform);
  },
  methods: {
    async bitcoinLink() {
      const href =
        (this.$refs.bsvLink as HTMLElement).getAttribute("href") || "";
      if (!href) return;
      window.location.href = href;

      await new Promise(resolve =>
        setTimeout(resolve, this.isIOS ? 3000 : 200)
      );
      this.showBSVQRCode = !this.showBSVQRCode;
    }
  }
});
</script>
