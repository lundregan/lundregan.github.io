<template>
  <div
    class="w-full h-screen flex justify-center align-center items-center p-16 pt-64"
  >
    <div class="flex">
      <div v-for="project in projects" :key="project.id" class="m-8 w-1/2">
        <img class="project-image" :src="project.img" :alt="project.alt" />
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
        },
        {
          name: 'Desmos Corp',
          img: '/project-images/hexoggle.png',
        },
      ],
    }
  },
}
</script>

<style lang="sass">
.project-image
  z-index: 1
</style>
