<template>
  <div class="blog flex flex-col">
    <BlogSearchInput class="search-posts w-1/4 self-center" />

    <ul class="articles-list w-1/3 self-center text-white">
      <li
        v-for="article of articles"
        :key="article.slug"
        class="article text-center bg-blue-100 m-12 my-16"
        data-augmented-ui="tl-2-clip-x tr-2-clip-x bl-2-clip-x br-2-clip-x border"
      >
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <h2 class="text-4xl py-2">{{ article.title }}</h2>
          <p>{{ formatDate(article.createdAt) }}</p>
          <img :src="article.image" :alt="article.alt" class="py-4" />
          <div>
            <p class="text-xs pb-6">{{ article.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'image', 'slug', 'createdAt'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles,
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
.blog
  min-height: 100vh

img
  width: 100%
  height: auto

.article
  position: relative
  z-index: 1
  background: #111111
  --aug-border-bg: yellow

.search-posts
  position: relative
  z-index: 1
</style>
