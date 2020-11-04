<template>
  <article class="flex flex-col p-4 text-white">
    <div class="head self-center">
      <p class="post-title font-bold text-4xl text-center">
        {{ article.title }}
      </p>
      <p class="date-author text-center">
        {{ formatDate(article.updatedAt) }} by
        <span class="italic">Ethan Lundregan</span>
      </p>
    </div>

    <img
      :src="article.image"
      :alt="article.alt"
      class="py-4"
      data-augmented-ui="tl-clip-inset tr-clip-inset bl-clip-inset br-clip-inset none"
    />
    <nuxt-content :document="article" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  },

  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style lang="sass">
article
  position: relative
  background: #212121
  margin: 0 30vw

img
  width: 100%
  height: auto

.post-title
  font-family: lulo

.nuxt-content h2
  margin: 40px 0 10px 0
  font-weight: bold
  font-size: 28px

.nuxt-content h3
  margin: 30px 0 10px 0
  font-weight: bold
  font-size: 22px

.nuxt-content p
  margin-bottom: 20px

.nuxt-content blockquote
  padding-left: 20px

.nuxt-content ul
  list-style-type: square
</style>
