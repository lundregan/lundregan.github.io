<template>
  <Layout>
    <section id='status-section'>
      <div id='status-work'>
        <h1>Status</h1>
        <p v-if='!about.employed'> {{ about.work_status }} </p>
      </div>

      <div id='status-learning'>
        <h1>Current Work</h1>
        <p v-for='item in about.learning_status' :key='item'> {{ item }} </p>
      </div>
    </section>

    <section id='contact-section'>
      <h1> Contact me </h1>
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>Your Name:</label><br />
          <input type="text" name="name" />  
        </p>
        <p>
          <label>Your Email:</label><br />
          <input type="email" name="email" />
        </p>
        <p>
          <label>Message:</label><br />
          <textarea name="message"></textarea>
        </p>
        <p>
          <button id='submitForm' type="submit">Send</button>
        </p>
      </form>
    </section>
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

#status-section, #contact-section {
  margin: 0 auto;

  padding-top: 100px;

  text-align: center;
}

#status-section {
  max-width: 600px;
}

#contact-section {
  max-width: 300px;
}

#status-learning {
  margin-top: 6vh;
}

#submitForm {
  color: black;
}

input, textarea {
  margin: 5px 0 10px 0;

  padding: 5px;
 
  width: 100%;
}

textarea{
  height: 10vh;
}

</style>
