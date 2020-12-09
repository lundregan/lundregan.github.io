<template>
  <nav
    class="w-full px-8 p-4 flex justify-between sticky top-0 text-gray-500 text-2xl font-serif"
  >
    <div class="text-white flex">
      <a href="https://twitter.com/lundregan1" target="_blank">
        <fa
          class="fa-2x text-blue-600 mx-2 hover:text-blue-400"
          :icon="['fab', 'twitter-square']"
        />
      </a>
      <a href="https://github.com/lundregan" target="_blank">
        <fa
          class="fa-2x text-purple-600 mx-2 hover:text-purple-400"
          :icon="['fab', 'github-square']"
        />
      </a>
    </div>
    <div id="navbar" class="py-2 flex justify-between w-1/4">
      <a href="#home" data-menuanchor="home">Home</a>
      <a href="#projects" data-menuanchor="projects">Projects</a>
      <a href="#about" data-menuanchor="about">About</a>
      <a href="#contact" data-menuanchor="contact">Contact</a>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      hamburgerExpanded: false,
    }
  },

  computed: {
    hamburgerMenuIcon() {
      if (this.hamburgerExpanded) {
        return 'times'
      } else {
        return 'hamburger'
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

nav
  z-index: 2

  .active
    @apply text-red-600

.navs
  z-index: 2

.mobile-nav
  background: #fcee0a

.navbar
  --aug-border-all: 1px
  --aug-b: 20px
  background: #fcee0a
  position: sticky
  top: 0
  z-index: 2

.navbar-links
  padding: 0 20%

.link
  color: #111111

.grow
  transition: all .2s ease-in-out

.grow:hover
  transform: scale(1.75)
</style>
