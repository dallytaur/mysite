<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            proto suit V1
          </h1>
          <h2 class="subtitle">
            First try at foam work WIP started 3/5/2020.
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
                <img src="/img/proto1/1.JPG">
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="card-content">
               <p>3/5/2020 made the hips and chest plate out of eva foam and glue up.</p>
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


        <div class="columns">
          <div class="column">
            <div class="card">
              <div class="card-content">
                <img src="/img/proto1/5.JPG">
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="card-content">
                <img src="/img/proto1/6.JPG">
              </div>

            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="card-content">
                <p>4/5/2020 First coats of paint it a quite rought so i've got to learn and try again for a V2</p>
              </div>

            </div>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <div class="card">
              <div class="card-content">
                <p>Chest plate painted up I also added one of the rings for the hips also had order the eletronics</p>

              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="card-content">
                <img src="/img/proto1/11.JPG">
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="card-content">
                <img src="/img/proto1/14.JPG">
              </div>
            </div>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <div class="card">
              <div class="card-content">
                <p>5/5/2020 Hip ring being printed had print 8 of them</p>

              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="card-content">
                <img src="/img/proto1/10.JPG">
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="card-content">
                <img src="/img/proto1/9.JPG">
              </div>
            </div>
          </div>
        </div>

        <div class="columns">

          <div class="column">
            <div class="card">
              <div class="card-content">
                <img src="/img/proto1/16.JPG">
              </div>
            </div>
          </div>


          <div class="column">
            <div class="card">
              <div class="card-content">
                <p>5/5/2020 photos and some idea making on fur colurs</p>

              </div>
            </div>
          </div>


          <div class="column">
            <div class="card">
              <div class="card-content">
                <img src="/img/proto1/17.JPG">
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="card">
              <div class="card-content">
                <p>6/5/2020 Tail is made and the base is mostly done. I just need to fur it and add a plug.</p>

              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="card-content">
                <img src="/img/proto1/18.JPG">
              </div>
            </div>
          </div>





          <div class="column">
            <div class="card">
              <div class="card-content">
                <img src="/img/proto1/19.JPG">
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