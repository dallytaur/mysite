<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Nadia's shop
          </h1>
          <h2 class="subtitle">
            If you want to to order from me, <a href="https://forms.gle/iCJLNPpgKgta7ijDA">click the google form link here</a> and
            submit the order ref number.
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="tile is-ancestor is-vertical">



          <div class="tile is-parent">
          <!--  <div class="tile is-parent">
              <div class="tile box is-child">
                <img src="/img/shop/1.png" />
                <p>
                  Cat/dog mix, made with TPU, moving jaw only, $75 + $40 TPU
                  fee.
                </p>
                <p>ref #1</p>
              </div>
            </div>-->
            <div class="tile is-parent">
              <div class="tile box is-child">
                <img src="/img/shop/2.png" />
                <p>Dog fursuit base moving jaw $75.</p>
                <p>ref #2</p>
              </div>
            </div>
            <div class="tile is-parent">
              <div class="tile box is-child">
                <img src="/img/shop/3.png" />
                <p>Dog2 fursuit base, moving jaw $75.</p>
                <p>ref #3</p>
              </div>
            </div>
          </div>

          <div class="tile is-parent">
            <div class="tile is-parent">
              <div class="tile box is-child">
                <img src="/img/shop/4.jpg" />
                <p>Opossum fursuit base, moving jaw $75</p>
                <p>
                  Used by tiny1badger
                  <a href="https://www.youtube.com/watch?v=wDnJUBMMOOU"
                    >Youtube video</a
                  >.
                </p>
                <p></p>
                <p>Ref #4</p>
              </div>
            </div>
            <div class="tile is-parent">
              <div class="tile box is-child">
                <img src="/img/shop/5.png" />
                <p>
                  NOT A FURSUIT BASE dragon puppet base with with blinking eyes
                  $150.
                </p>
                <p>ref #5</p>
              </div>
            </div>
            <div class="tile is-parent">
              <div class="tile box is-child">
                <img src="/img/shop/10.png" />
                <p>
                  Skunk moving jaw $75
                </p>
                <p>ref #10</p>
              </div>
            </div>
          </div>

          <div class="tile is-parent">
            <div class="tile is-parent">
              <div class="tile box is-child">
                <img src="/img/shop/7.jpg" />
                <p>
                  Fursuit googles scaled for use with fursuit or cosplay won't
                  fit on your eyes unlesss in suit fit most fursuits $70.
                </p>
                <p>ref #7</p>
              </div>
            </div>
            <!--<div class="tile is-parent">
              <div class="tile box is-child">
                <img src="/img/shop/8.png" />

                <p>Cat fursuit base moving jaw $75.</p>
                <p>ref #8</p>
              </div>
            </div>-->
            <div class="tile is-parent">
              <div class="tile box is-child">
                <img src="/img/shop/9.png" />

                <p>fox fursuit base moving jaw $75.</p>
                <p>ref #9</p>
              </div>
            </div>
          </div>

          <div class="tile is-parent">
            <div class="tile is-parent">
              <div class="tile box is-child">
                <img src="/img/shop/11.JPG" />
                <p>
                Dutch angel dragon/dragon moving jaw $75
                </p>
                <p>ref #11</p>
              </div>
            </div>
            <div class="tile is-parent">
              <div class="tile box is-child">

              </div>
            </div>
            <div class="tile is-parent">
              <div class="tile box is-child">

              </div>
            </div>
          </div>

          <div class="tile is-parent">
            <div class="tile is-parent">
              <div class="tile box is-child">
                <p>
                  If you have an idea for a item feel free to message I can
                  make a wide rage of things.
                  <nuxt-link to="talktome">talk to me here</nuxt-link>.
                </p>
              </div>
            </div>
            <div class="tile is-parent">
              <div class="tile box is-child">
                <p>
                  wanna buy something
                  <a href="https://forms.gle/iCJLNPpgKgta7ijDA">Click Here</a>
                  and make sure you list your ref number
                </p>
              </div>
            </div>

            <div class="tile is-parent">
              <div class="tile box is-child">
                <p>
                  Don't see one you like for $125 I can make you your own design
                  <nuxt-link to="talktome">messgage me here</nuxt-link>.
                </p>
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
    };
  },
  mounted() {
    this.isIOS =
      !!navigator &&
      !!navigator.platform &&
      /iPad|iPhone|iPod/.test(navigator.platform);
  },
  methods: {},
});
</script>
