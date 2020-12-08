<template>
  <!-- <div class="index">
    <Intro />
    <SocialSideBar />
    <div class="container flex flex-col flex-wrap">
      <About />

      <Contact />
    </div>
  </div> -->
  <div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <Intro class="section active" />
      <Projects class="section" />
      <About class="section" />
      <Contact class="section" />
    </full-page>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      options: {
        menu: '#navbar',
        anchors: ['home', 'projects', 'about', 'contact'],
        loopBottom: true,
        scrollingSpeed: 400,
      },
    }
  },
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
