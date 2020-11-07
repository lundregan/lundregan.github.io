<template>
  <div class="portfolio flex flex-col">
    <p class="text-center text-white text-4xl">Portfolio</p>
    <ul
      class="projects-list self-center text-white flex flex-wrap sm:w-1/2 px-6"
    >
      <li
        v-for="project of projects"
        :key="project.slug"
        class="project text-center sm:w-1/3 lg:w-1/4"
      >
        <NuxtLink
          :to="{ name: 'portfolio-slug', params: { slug: project.slug } }"
        >
          <img :src="project.image" :alt="project.alt" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const projects = await $content('projects', params.slug)
      .only(['name', 'description', 'image', 'slug', 'createdAt'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      projects,
    }
  },

  methods: {},
}
</script>

<style lang="sass" scoped>
.projects-list
  background: #111111

.portfolio
  min-height: 100vh

.project
  position: relative
  z-index: 1
  background: #111111
  --aug-border-bg: yellow
</style>
