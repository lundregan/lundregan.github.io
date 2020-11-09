<template>
  <article class="flex flex-col text-white w-full bg-transparent p-4  ">
    <div class="article self-center w-full sm:w-1/2 p-1 sm:p-6">
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

      <p class="text-center mt-16 text-xl">Want to read more?</p>
      <prev-next :prev="prev" :next="next" />
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next,
    }
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
.article
  background: #111111

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
  padding-left: 40px
  list-style-type: square
</style>
