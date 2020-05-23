<template>
  <Layout>
    <section class="about-section">
      <h1>About</h1>
      <p>
        I am a <strong>Junior Developer</strong>, who is itching to get into the industry and show off my passion and talent for web development.
      </p>
      <p>
        Currently I am learning more about the world of <strong>Vue</strong>, and having a blast doing so.
      </p>
    </section>

    <section class="skill-section">
      <h1>Skills</h1>
      <div class="skills">
        <div class='skill-box' v-for='section in about.allSkills' :key='section'>
          <h1 class="skill-section-title">{{section.title}}</h1>

          <ul class="frontend-list">
            <li v-for='skill in section.skills' :key='skill'> {{ skill }} </li>
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

section h1 {
  text-align: center;
}

.skills {
  display: flex;
  justify-content: space-evenly;
}

.skill-box {
  margin: 20px;
  padding: 10px 20px;

  min-width: 15vw;

  text-align: center;

  border-radius: 10px;

  background: #212121;
}

.skill-section-title {
  border-bottom: 2px #303030 solid;
}

ul {
  padding: 0;
}

li {
  list-style-type: none;
}

</style>
