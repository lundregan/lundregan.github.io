<template>
  <div>
    <Intro class="section active" id="home" />
    <Projects class="section" id="projects" />
    <About class="section" id="about" />
    <Contact class="section" id="contact" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {}
  },
})
</script>

<style lang="sass">
.container
  margin: 0 auto
  min-height: 80vh
  display: flex
  justify-content: center
  align-items: center
  text-align: center

.section
  min-height: 100vh
</style>
