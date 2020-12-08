<template>
  <div>
    <vue-particles
      class="particles-background absolute top-0 w-full h-screen"
      color="#dedede"
      :particle-opacity="0"
      :particles-number="100"
      :particle-size="0"
      lines-color="#dedede"
      :lines-width="1"
      :line-linked="true"
      :line-opacity="0.6"
      :lines-distance="120"
      :move-speed="8"
      :hover-effect="true"
      hover-mode="repulse"
      :click-effect="false"
    >
    </vue-particles>

    <Navbar />
    <Nuxt class="mb-64" />
  </div>
</template>
<style lang="sass">
html
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
  font-size: 16px
  word-spacing: 1px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-box

*,
*::before,
*::after
  box-sizing: border-box
  margin: 0

.button--green
  display: inline-block
  border-radius: 4px
  border: 1px solid #3b8070
  color: #3b8070
  text-decoration: none
  padding: 10px 30px

.button--green:hover
  color: #fff
  background-color: #3b8070

.button--grey
  display: inline-block
  border-radius: 4px
  border: 1px solid #35495e
  color: #35495e
  text-decoration: none
  padding: 10px 30px
  margin-left: 15px

.button--grey:hover
  color: #fff
  background-color: #35495e

body
  min-height: 100vh
  background: #111111

// Moving particle background
.particles-background
  position: fixed
  top: 0
  z-index: 0
</style>
