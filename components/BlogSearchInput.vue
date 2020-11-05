<template>
  <div class="blog-search">
    <p class="text-white p-1">Search</p>
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search Articles"
      class="search-input p-2"
    />
    <ul v-if="articles.length" class="mt-2 text-yellow-400">
      <li v-for="article of articles" :key="article.slug" class="my-2">
        <NuxtLink
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          class="search-article"
        >
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      articles: [],
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = []
        return
      }
      this.articles = await this.$content('articles')
        .limit(6)
        .search(searchQuery)
        .fetch()
    },
  },
}
</script>

<style lang="sass">
.blog-search
    margin-top: -10vw

.search-input
    width: 100%
    outline: none

.search-article
    padding: 2px 1rem
</style>
