<template>
  <div
    class="social-side-bar h-32 mt-64"
    data-augmented-ui="tr-2-clip-x br-2-clip-x"
  >
    <div
      class="social-links flex flex-col my-4 py-16 align-center w-full h-full items-center justify-center"
    >
      <a
        class="self-center hover:text-purple-500 grow"
        target="_blank"
        href="https://github.com/lundregan"
      >
        <fa class="fa-2x" :icon="['fab', 'github']" />
      </a>
      <a
        class="self-center mt-4 hover:text-blue-500 grow"
        target="_blank"
        href="https://twitter.com/lundregan1"
      >
        <fa class="fa-2x" :icon="['fab', 'twitter']" />
      </a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass">
.social-side-bar
  width: 3.5rem
  --aug-border-all: 1px
  background: #fcee0a
  position: sticky
  top: 48px
  z-index: 1

.grow
  transition: all .2s ease-in-out

.grow:hover
  transform: scale(1.25)
</style>
