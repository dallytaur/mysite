<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            My projects
          </h1>
          <h2 class="subtitle">
            List of commissions and personal projects
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
                <img src="/img/proto1/13.JPG">
                <p>My second fursuit with body suit I made and my 4th finshed head</p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="card-content">
                <img src="/img/gfc1.png">
                Commissioning project where I lead an artist and 10-60 Commissioniers  I handle all chatter with everyone.
              </div>

            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="card-content">
                <img src="/img/proto1/4.JPG">
              </div>

            </div>
          </div>
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