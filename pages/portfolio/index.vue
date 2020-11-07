<template>
  <div class="blog flex flex-col">
    <ul class="articles-list w-1/3 self-center text-white">
      <li
        v-for="project of projects"
        :key="project.slug"
        class="article text-center bg-blue-100 m-12 my-16"
        data-augmented-ui="tl-2-clip-x tr-2-clip-x bl-2-clip-x br-2-clip-x border"
      >
        <NuxtLink
          :to="{ name: 'project-slug', params: { slug: project.slug } }"
        >
          <h2 class="text-4xl py-2">{{ project.title }}</h2>
          <img :src="project.image" :alt="project.alt" class="py-4" />
          <div>
            <p class="text-xs pb-6">{{ project.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const projects = await $content('projects', params.slug)
      .only(['title', 'description', 'image', 'slug', 'createdAt'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      projects,
    }
  },

  methods: {},
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
