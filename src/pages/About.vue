<template>
  <Layout>
    <h1>About</h1>
    <p>
      I am a <strong>junior developer</strong>, who is itching to get into the industry and show off my passion and talent for web development.
    </p>
    <p>
      Currently I am learning more about the world of <strong>Vue</strong>, and having a blast doing so.
    </p>

    <h2>Skills</h2>
    
    <ul>
      <li v-for="skill in about.skills" :key='skill'>{{skill}}</li>      
    </ul>
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
