<template>
  <div class="navbar w-full" data-augmented-ui="br-2-clip-x bl-2-clip-x b-clip">
    <div
      class="text-center flex flex-col text-2xl text-gray- sm:flex-row sm:justify-center md:justify-around lg:px-16 pb-6 sm:pt-2 md:font-semibold"
    >
      <nuxt-link to="/" class="link px-6 grow py-1">Home</nuxt-link>
      <nuxt-link to="/#about" class="link px-6 grow py-1">About</nuxt-link>
      <nuxt-link to="/#contact" class="link px-6 grow py-1">Contact</nuxt-link>
      <nuxt-link to="#" class="link px-6 grow disabled py-1"
        >Portfolio</nuxt-link
      >
      <nuxt-link to="/blog" class="link px-6 grow py-1">Blog</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass">
*, *:before, *:after
    box-sizing: border-box

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
