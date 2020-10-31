<template>
  <section class="intro">
    <vue-particles
      class="absolut top-0 w-full h-screen"
      color="#dedede"
      :particle-opacity="0"
      :particles-number="100"
      :particle-size="0"
      lines-color="#dedede"
      :lines-width="1"
      :line-linked="true"
      :line-opacity="0.6"
      :lines-distance="120"
      :move-speed="10"
      :hover-effect="true"
      hover-mode="repulse"
      :click-effect="false"
    >
    </vue-particles>
    <div
      class="intro-desc self-center flex flex-col justify-center align-center"
    >
      <Logo />
      <p class="intro-desc-title text-white self-center">
        Lundregan // Front-End Developer
      </p>
      <p class="intro-desc-subtitle text-white text-lg self-center">
        <span class="text-yellow-400 font-bold"
          >A Next Generation Developer</span
        >
      </p>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="sass">
.intro
  height: 100vh
  margin-top: -30vh

.intro-desc
  margin-top: -60vh

.intro-desc-title
  font-size: 3vw

.intro-desc-subtitle
  font-size: 1.25vw
</style>
