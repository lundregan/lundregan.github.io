<template>
  <Layout>
    <section class="about-section">
      <h1 class='title'>About</h1>
      <p class='description'>
        I am a <strong>Junior Developer</strong>, who is itching to get into the industry and show off my passion and talent for web development.
        <br />
        Currently I am learning more about the world of <strong>Vue</strong>, and having a blast doing so.
      </p>
    </section>

    <section class="skill-section">
      <h1 class='skills-title title'>Skills</h1>
      <div class="skills">
        <div class='skill-box' v-for='section in about.allSkills' :key='section'>
          <h1 class="skill-section-title title">{{section.title}}</h1>

          <ul class="frontend-list">
            <li class='skill' v-for='skill in section.skills' :key='skill'> {{ skill }} </li>
          </ul>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import about from '@/data/about.yml'

export default {
  data(){
    return {
      about
    }
  },
  
  metaInfo: {
    title: 'About us'
  }
}
</script>

<style>

.title, .description, .skill {
  text-align: center;
}

.title {
  color:var(--color-title);
  font-size: 2rem;
}

.skills {
  display: flex;
  justify-content: space-evenly;
}

.skill-box {
  margin: 20px;
  padding: 10px 20px;

  min-width: 15vw;

  border-radius: 10px;

  background: #212121;
}

.skill-section-title {
  border-bottom: 2px #303030 solid;

  font-size: 1.5rem;
}

ul {
  padding: 0;
}

li {
  list-style-type: none;
}

</style>
