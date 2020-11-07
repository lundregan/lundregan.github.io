<template>
  <div class="project-container flex flex-col mt-4 text-white m-16">
    <div class="self-center project p-8">
      <div class="flex flex-col">
        <img :src="project.image" alt="" class="self-center" />
      </div>

      <div class="play-code flex justify-center text-xl">
        <a :href="project.playLink" class="project-link" target="_blank"
          >Play</a
        >
        <p class="px-6">|</p>
        <a :href="project.codeLink" class="project-link" target="_blank"
          >Code</a
        >
      </div>
      <div class="flex justify-between">
        <span>
          <p class="text-2xl font-semibold text-yellow-400">
            {{ project.name }}
          </p>
          <p class="text-xl">{{ project.description }}</p>
        </span>
        <p>{{ project.stack }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const project = await $content('projects', params.slug).fetch()

    return { project }
  },
}
</script>

<style lang="sass">
.project
  background: #111111
  position: relative
  z-index: 1

.project-link:hover
  color: yellow

img
  max-width: 500px
</style>
