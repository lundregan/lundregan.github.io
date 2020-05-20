<template>
  <Layout>
    <h1>Status</h1>
    <p v-if='!about.employed'> {{ about.work_status }} </p>

    <p> Current Work</p>
    <ul>
      <li v-for='item in about.learning_status' :key='item'> {{ item }} </li>
    </ul>


    <h1> Contact me </h1>
    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label>Your Name: <input type="text" name="name" /></label>   
      </p>
      <p>
        <label>Your Email: <input type="email" name="email" /></label>
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button id='submitForm' type="submit">Send</button>
      </p>
    </form>
  </Layout>
</template>

<script>
import about from '@/data/about.yml'

export default {
  metaInfo: {
    title: 'About us'
  },

  data () {
    return {
      about
    }
  }
}
</script>


<style>

#submitForm {
  color: black;
}

form input {
}

</style>
