<template>
  <div class="about flex flex-col">
    <p class="title">About</p>

    <div class="flex flex-col w-1/2 self-center text-left mt-16">
      <p class="self-center">
        <span class="self-desc text-white">
          I am a Front-End Developer from the UK, Looking for the next
          opportunity to improve my skills and build something great!
        </span>
      </p>
    </div>

    <section class="skills-section text-white">
      <div class="skills-title">
        <p class="title flex text-center">Skills</p>
      </div>

      <div class="skills-skills flex justify-center md:h48 flex-wrap">
        <div
          v-for="skill in skills"
          :key="skill.id"
          class="skill flex flex-col pb-4 mx-6 mt-4 bg-gray-100"
          :class="`text-${skill.color}-600 bg-${skill.color}-200`"
          data-augmented-ui="all-hexangle-up border"
        >
          <fa
            class="value-icon text-6xl text-center h-32 self-center"
            :icon="['fab', skill.icon]"
          />
          <p class="lg:text-3xl md:text-xl px-4 self-center">
            {{ skill.name }}
          </p>
        </div>
      </div>
    </section>

    <section class="values-section pt-32 text-white text-center">
      <div class="values-title self-center text-center">
        <p class="text-6xl text-bold flextext-white">Values</p>
      </div>
      <div class="values-values flex justify-center md:h48 flex-wrap">
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
          <p class="lg:text-3xl md:text-xl px-4 self-center">
            {{ value.title }}
          </p>
          <p class="text-base px-8 pt-6 self-center">
            {{ value.description }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          name: 'HTML & CSS',
          icon: 'html5',
          color: 'orange',
        },
        {
          name: 'SASS',
          icon: 'sass',
          color: 'blue',
        },
        {
          name: 'JS & TS',
          icon: 'js',
          color: 'yellow',
        },
        {
          name: 'Version Control',
          icon: 'git-alt',
          color: 'purple',
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
            'No one likes a slow website, espacially your users. Fast loading times are essential for a good and lasting impression',
        },
        {
          title: 'Responsive & Accessible',
          icon: 'mobile-alt',
          description:
            'Your design should shine, no matter what medium is used to engage it.',
        },
        {
          title: 'UX / UI',
          icon: 'pencil-ruler',
          description:
            'Easy to navigate and intuiitve to use should be a priority',
        },
      ],
    }
  },
}
</script>

<style lang="sass">
.value
  margin: 20px

.skill
  --aug-all-width: 240px

.grow
  transition: all .2s ease-in-out

.grow:hover
  transform: scale(1.25)
</style>
