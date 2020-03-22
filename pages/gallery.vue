<template>
    <div>
        <section class="section">
            <div class="container">    
                <h1 class="title is-1">Gallery</h1>
                <div class="columns">
                    <div class="column is-one-third">
                        <gallery-item
                            title="Example Image"
                            subtitle="It's an image"
                            content="description goes here description goes here description goes here description goes here"
                            full-image-url="https://bulma.io/images/placeholders/1280x960.png"
                            profile-image-url="https://bulma.io/images/placeholders/96x96.png"
                        ></gallery-item>
                    </div>
                    <div class="column is-one-third">
                        <gallery-item
                            title="Example Image"
                            subtitle="It's an image"
                            content="description goes here description goes here description goes here description goes here"
                            full-image-url="https://bulma.io/images/placeholders/1280x960.png"
                            profile-image-url="https://bulma.io/images/placeholders/96x96.png"
                        ></gallery-item>
                    </div>
                    <div class="column is-one-third">
                        <gallery-item
                            title="Example Image"
                            subtitle="It's an image"
                            content="description goes here description goes here description goes here description goes here"
                            full-image-url="https://bulma.io/images/placeholders/1280x960.png"
                            profile-image-url="https://bulma.io/images/placeholders/96x96.png"
                        ></gallery-item>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
      components: {
    "gallery-item": () => import("~/components/GalleryItem.vue")
  },

}
</script>