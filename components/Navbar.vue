<template>
  <div class="navigations sticky p-2 top-0 flex flex-col sm:flex-row sm:justify-between bg-gray-900 sm:bg-transparent">
    <div class="social flex justify-center">
      <a href="https://twitter.com/lundregan1" target="_blank">
        <fa
          class="fa-2x text-blue-600 mx-2 hover:text-blue-400 animate__animated animate__fadeInRight"
          :icon="['fab', 'twitter-square']"
        />
      </a>
      <a href="https://github.com/lundregan" target="_blank">
        <fa
          class="fa-2x text-purple-600 mx-2 hover:text-purple-400 animate__animated animate__fadeInRight"
          :icon="['fab', 'github-square']"
        />
      </a>
    </div>
    <nav class="flex justify-around text-gray-500 flex-wrap lg:text-2xl">
      <a href="#home" class="p-4">Home</a>
      <a href="#projects" class="p-4">Projects</a>
      <a href="#about" class="p-4">About</a>
      <a href="#contact" class="p-4">Contact</a>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hamburgerExpanded: true,
    }
  },

  computed: {
    hamburgerIcon() {
      if (this.hamburgerExpanded) {
        return ['fas', 'times']
      } else {
        return ['fas', 'bars']
      }
    },
  },

  methods: {
    openCloseHamburger() {
      this.hamburgerExpanded = !this.hamburgerExpanded
    },
  },
}
</script>

<style lang="sass">
*, *:before, *:after
  box-sizing: border-box

nav, .social-links
  z-index: 2

  a:hover
    @apply text-red-700

.navigations
  z-index: 2
</style>
