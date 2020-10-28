<template>
  <div class="social-side-bar flex flex-col">
    <a class="bg-gray-600" target="_blank" href="https://github.com/lundregan">
      <fa class="fa-2x" :icon="['fab', 'github']" />
    </a>
    <a
      class="bg-gray-600"
      target="_blank"
      href="https://twitter.com/lundregan1"
    >
      <fa class="fa-2x" :icon="['fab', 'twitter']" />
    </a>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass">
.social-side-bar
    max-width: 50px

.social-side-bar a
    padding: 16px
    padding-left: 8px

.social-side-bar a:nth-child(1)
    padding-top: 40px
    clip-path: polygon(0 0, 100% 50%, 100% 100%, 0 100%)

.social-side-bar a:nth-last-child(1)
    padding-bottom: 40px
    clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%)
</style>
