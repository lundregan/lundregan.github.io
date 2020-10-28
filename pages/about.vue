<template>
  <div class="about flex flex-col">
    <h1 class="title text-center">About</h1>

    <section class="skills-section">
      <div class="skills-title">
        <p class="title flex text-center">Skills</p>
      </div>

      <div class="skills-skills flex justify-center md:h48 flex-wrap">
        <div
          v-for="skill in skills"
          :key="skill.id"
          class="skill flex flex-col pb-4"
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

    <section class="values-section">
      <div class="values-title">
        <p class="title flex text-center">Values</p>
      </div>
      <div class="values-values flex justify-center md:h48 flex-wrap">
        <div
          v-for="value in values"
          :key="value.id"
          class="value flex flex-col pb-4 lg:w-1/4 md:w-1/3 sm:screen"
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
        },
        {
          name: 'SASS',
          icon: 'sass',
        },
        {
          name: 'Javascript & Typescript',
          icon: 'js',
        },
        {
          name: 'Version Control',
          icon: 'git-alt',
        },
        {
          name: 'Vue',
          icon: 'vuejs',
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
  margin: 20px
  width: 400px
</style>
