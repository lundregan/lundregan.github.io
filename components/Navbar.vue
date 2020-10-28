<template>
  <div class="navbar justify-center con">
    <div class="block-t bg-gray-400"></div>
    <div class="navbar-links flex justify-center text-center">
      <nuxt-link to="/" class="link p-6 bg-gray-400">Home</nuxt-link>
      <nuxt-link to="/about" class="link p-6 bg-gray-400">About</nuxt-link>
      <nuxt-link to="/portfolio" class="link p-6 bg-gray-400"
        >Portfolio</nuxt-link
      >
      <nuxt-link to="/blog" class="link p-6 bg-gray-400">Blog</nuxt-link>
      <nuxt-link to="/contact" class="link p-6 bg-gray-400">Contact</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass">
*, *:before, *:after
    box-sizing: border-box

.navbar-links .link
  //background: gray

.navbar-links .link:nth-child(1)
  padding-left: 100px
  clip-path: polygon(0 0, 101% 0, 101% 100%, 50% 100%)

.navbar-links .link:nth-last-child(1)
  padding-right: 100px
  clip-path: polygon(-1% 0, 100% 0, 50% 100%, -1% 100%);
  left: -1px;

.block-t
  height: 8px
  width: 100%
</style>
