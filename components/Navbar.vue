<template>
  <div
    class="navbar justify-center con"
    data-augmented-ui="br-2-clip-x bl-2-clip-x b-clip"
  >
    <div
      class="navbar-links flex justify-center text-center font-semibold justify-around text-xl"
    >
      <nuxt-link to="/" class="link p-6 grow">Home</nuxt-link>
      <nuxt-link to="/#about" class="link p-6 grow">About</nuxt-link>
      <nuxt-link to="/#contact" class="link p-6 grow">Contact</nuxt-link>
      <nuxt-link to="#" class="link p-6 grow disabled">Portfolio</nuxt-link>
      <nuxt-link to="#" class="link p-6 grow">Blog</nuxt-link>
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

.grow
  transition: all .2s ease-in-out

.grow:hover
  transform: scale(1.75)
</style>
