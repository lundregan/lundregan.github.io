<template>
  <div class="w-full h-screen flex justify-center items-center p-8">
    <div class="flex flex-wrap justify-center items-center">
      <div
        v-for="project in projects"
        :key="project.id"
        class="m-8 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 relative shadow-md"
        @hover="project.hover == true"
      >
        <a :href="project.link" target="_blank">
          <img class="project-image" :src="project.img" :alt="project.alt" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: 'Desmos Corp',
          img: '/project-images/desmoscorp.jpg',
          link: 'https://lundregan.com',
        },
        {
          name: 'Hexoggle',
          img: '/project-images/hexoggle.png',
          link: 'https://hexoggle.netlify.app/',
        },
      ],
    }
  },
}
</script>

<style lang="sass">
.project-image
  z-index: 2
</style>
