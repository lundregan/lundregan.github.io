<template>
  <div class="flex justify-center items-center h-screen">
    <div class="flex flex-col justify-around">
      <section class="text-white text-center">
        <div class="values-values flex justify-center flex-wrap">
          <div
            v-for="value in values"
            :key="value.id"
            class="value flex flex-col pb-4 lg:w-1/4 md:w-1/3 sm:screen grow"
          >
            <div class="value-header"></div>
            <fa
              class="value-icon text-6xl h-32 self-center"
              :icon="['fas', value.icon]"
            />
            <p class="lg:text-3xl md:text-xl px-4 self-center text-red-600">
              {{ value.title }}
            </p>
            <p class="text-base px-8 pt-6 self-center">
              {{ value.description }}
            </p>
          </div>
        </div>
      </section>

      <section class="skills-section text-white mt-6 lg:mt-12">
        <div class="skills-skills flex justify-center md:h48 flex-wrap">
          <div
            v-for="skill in skills"
            :key="skill.id"
            class="skill flex flex-col pb-4 mx-6 mt-4 bg-transparent grow w-32 h-32 shadow-xl"
            :class="`text-${skill.color}-600`"
          >
            <fa
              class="value-icon text-6xl text-center h-32 self-center"
              :icon="['fab', skill.icon]"
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
          color: 'orange',
        },
        {
          name: 'CSS',
          icon: 'css3',
          color: 'blue',
        },
        {
          name: 'SASS',
          icon: 'sass',
          color: 'purple',
        },
        {
          name: 'JS & TS',
          icon: 'js',
          color: 'yellow',
        },
        {
          name: 'Git / VC',
          icon: 'git-alt',
          color: 'pink',
        },
        {
          name: 'Vue',
          icon: 'vuejs',
          color: 'green',
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

.value:hover
  .value-icon
    color: #fcee0a

.skill
  background: #111111

.grow
  transition: all .2s ease-in-out

.grow:hover
  transform: scale(1.25)

.self-desc
  background: #fcee0a
</style>
