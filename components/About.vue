<template>
  <div class="flex justify-center items-center h-screen">
    <div class="flex flex-col justify-around">
      <section class="text-white text-center">
        <div class="values-values flex justify-center flex-wrap">
          <div
            v-for="value in values"
            :key="value.id"
            class="value flex flex-col md:py-2 lg:w-1/4 md:w-1/3 sm:screen grow"
          >
            <div class="value-header"></div>
            <fa
              class="value-icon text-2xl md:text-6xl h-16 md:h-32 self-center"
              :icon="['fas', value.icon]"
            />
            <p class="lg:text-3xl md:text-xl px-4 self-center text-red-600">
              {{ value.title }}
            </p>
            <p class="text-xs md:text-base px-8 pt-6 self-center">
              {{ value.description }}
            </p>
          </div>
        </div>
      </section>

      <section class="skills-section text-white sm:mt-6 lg:mt-12">
        <div class="skills-skills flex justify-center md:h48 flex-wrap">
          <div
            v-for="skill in skills"
            :key="skill.id"
            class="skill flex flex-col p-2 grow"
          >
            <fa
              class="value-icon text-4xl md:text-6xl text-center h-32 self-center"
              :icon="['fab', skill.icon]"
              :class="skill.color"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          name: 'HTML',
          icon: 'html5',
          color: 'text-red-600',
        },
        {
          name: 'CSS',
          icon: 'css3',
          color: 'text-blue-600',
        },
        {
          name: 'SASS',
          icon: 'sass',
          color: 'text-purple-600',
        },
        {
          name: 'JS & TS',
          icon: 'js',
          color: 'text-yellow-600',
        },
        {
          name: 'Git / VC',
          icon: 'git-alt',
          color: 'text-pink-600',
        },
        {
          name: 'Vue',
          icon: 'vuejs',
          color: 'text-green-600',
        },
      ],
      values: [
        {
          title: 'Fast',
          icon: 'fighter-jet',
          description:
            'No one likes a slow website especially your users. Fast loading times are essential for a great and lasting impression!',
        },
        {
          title: 'Responsive & Accessible',
          icon: 'mobile-alt',
          description:
            'Your design should shine, no matter what medium is used to engage it.',
        },
        {
          title: 'Strong UX / UI',
          icon: 'pencil-ruler',
          description:
            'Easy to navigate, and being intuitive to use should be a Priority!',
        },
      ],
    }
  },
}
</script>

<style lang="sass">
.about
  display: contents

.value
  margin: 20px
  z-index: 1

.grow
  transition: all .2s ease-in-out

.grow:hover
  transform: scale(1.25)

.self-desc
  background: #fcee0a
</style>
