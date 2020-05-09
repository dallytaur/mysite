<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Nadia Mayer
          </h1>
          <h2 class="subtitle">
            Maker of things
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
                <h2 class="title">About Me</h2>
                Hello I am Nadia I am from South Australia, Adelaide I am spotty
                taur that is interested in constructing things, 3D printing, 3D
                modelling, electronics & technology. I also play dungeons and
                dragons but I never have a have to chance and enjoy the
                wonderful world of furries and fursuiting.
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="card-content">
                <h2 class="title">Commissions</h2>
                <p>
                  I make a wide variety of things mostly 3D printed and painting
                  related you can see them in my previous project gallery which
                  is still to be made right now you can message me of things
                  that interest you
                </p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="card-content">
                <h2 class="title">Roleplay</h2>
                <p>
                  I do personally enjoy many types of roleplay feel free to send
                  me a message if you're keen I am pretty flexible and I will
                  happily send you my reference information if interested.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <div class="card">
              <div class="card-content">
                <h2 class="title">Contacts</h2>
                <p><a href="https://t.me/alicetaur">Telegram alicetaur</a></p>
                <p>
                  <a href="https://www.instagram.com/dallytaur/"
                    >Instagram dallytaur</a
                  >
                </p>
                <p>
                  <a href="https://twitter.com/alicetaur"> Twitter alicetaur</a>
                </p>
                <p>Discord Nadia Mayer#6480</p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="card-content">
                <h2 class="title">Project Logs</h2>
                <p>
                  <a href="https://nadiamayer.me/projects/">
                    You can find a listing of my projects here.</a
                  >
                </p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="card-content">
                <img src="/img/zerogdog.png" />
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
      showBSVQRCode: false,
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

      await new Promise((resolve) =>
        setTimeout(resolve, this.isIOS ? 3000 : 200)
      );
      this.showBSVQRCode = !this.showBSVQRCode;
    },
  },
});
</script>
