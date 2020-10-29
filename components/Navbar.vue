<template>
  <div
    class="navbar justify-center con"
    data-augmented-ui="border br-2-clip-x bl-2-clip-x t-clip"
    --aug-border-all="1"
  >
    <div class="navbar-links flex justify-center text-center">
      <nuxt-link to="/" class="link p-6 hover:text-blue-500">Home</nuxt-link>
      <nuxt-link to="/about" class="link p-6 hover:text-blue-500"
        >About</nuxt-link
      >
      <nuxt-link to="/portfolio" class="link p-6 hover:text-blue-500"
        >Portfolio</nuxt-link
      >
      <nuxt-link to="/blog" class="link p-6 hover:text-blue-500"
        >Blog</nuxt-link
      >
      <nuxt-link to="/contact" class="link p-6 hover:text-blue-500"
        >Contact</nuxt-link
      >
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
</style>
