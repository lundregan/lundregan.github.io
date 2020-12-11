<template>
  <div>
    <div class="text-white flex absolute bottom-0 left-0 p-2 social-links">
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
    <nav
      class="flex justify-right absolute w-full top-0 bg-gray-900 text-gray-100 sm:text-gray-600 sm:bg-transparent"
      id="navbar"
    >
      <fa
        class="hamburger m-4"
        :icon="hamburgerIcon"
        @click="openCloseHamburger()"
      />
      <div class="flex self-center font-semibold sm:font-base" v-if="hamburgerExpanded">
        <a href="#home" data-menuanchor="home" class="px-2">Home</a>
        <a href="#projects" data-menuanchor="projects" class="px-2">Projects</a>
        <a href="#about" data-menuanchor="about" class="px-2">About</a>
        <a href="#contact" data-menuanchor="contact" class="px-2">Contact</a>
      </div>
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

.active
  @apply text-red-700
</style>
