<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <img :src="fullImageUrl" alt="">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img :src="profileImageUrl" alt="">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">{{ title }}</p>
                    <p class="subtitle is-6">{{ subtitle }}</p>
                </div>
            </div>

            <div class="content">
                {{ content }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        subtitle: String,
        content: String,
        fullImageUrl: String,
        profileImageUrl: String,
    }
}
</script>