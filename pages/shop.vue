<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Nadia's shop
          </h1>
          <h2 class="subtitle">
            If you want to to order form me click the google form link and submit rhe order ref number
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
                <img src="/img/shop/1.png">
                <p>Cat dog mix TPU only moving jaw 75$+$40.</p>
                <p>ref #1</p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="card-content">
                <img src="/img/shop/2.png">
                <p>Dog fursuit base moving jaw 75$.</p>
                <p>ref #2</p>
              </div>

            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="card-content">
                <img src="/img/shop/3.png">
                <p>Dog2 fursuit base moving jaw 75$.</p>
                <p>ref #3</p>
              </div>

            </div>
          </div>
        </div>


        <div class="columns">
          <div class="column">
            <div class="card">
              <div class="card-content">
                <img src="/img/shop/4.png">
                <p>Opossum fursuit base 75$</p>
                <p>Used by tiny1badger<a href="https://www.youtube.com/watch?v=wDnJUBMMOOU">youtube video</a>.</p><p>
                <p>Ref #4</p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="card-content">
                <img src="/img/shop/5.png">
                <p>NOT A BASE dragon puppet base with eye mechanism $150.</p>
                <p>ref #5</p>
              </div>

            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="card-content">
                <p>Don't see one you like for $125 i can make you your own desgin <a href="https://nadiamayer.me/talktome">messgage me here</a>.</p>
              </div>

            </div>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <div class="card">
              <div class="card-content">
                <img src="/img/shop/6.png">
                <p>Fursuit googles scaled for use with fursuit or cosplay wont fit on your eyes unlesss in suit fist most fursuits $70.</p>
                <p>ref #7</p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="card-content">
                <img src="/img/shop/7.png">
                <p>Fursuit googles scaled for use with fursuit or cosplay wont fit on your eyes unlesss in suit fit most fursuits $70 edits are extra.</p>
                <p>ref #7</p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="card-content">
                <p>If you have an idea for a item feel free to message I can makde a wide rage of things <a href="https://nadiamayer.me/talktome">messgage me here</a>.</p>
              </div>
            </div>
          </div>
        </div>

        
      </div>
 <div class="columns">
          <div class="column">
            <div class="card">
              <div class="card-content">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc2c7ZVdvuVNeAdsm8409AZwMMf0RAv7gnztBfKW3qnVmYpzw/viewform?embedded=true" width="640" height="1200" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

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