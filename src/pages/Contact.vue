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
      <form 
        name="contact" 
        method="POST"
        v-on:submit.prevent="handleSubmit"
        action="/success/"
        data-netlify="true"
        data-netlify-honeypot='bot-sield'
      >

        <input type='hidden' name='form-name' value='Contact' />

        <div class="sender-info">
          <div>
            <label for='name' class='label'>Your Name</label><br />
            <input class='form-input' type="text" name="name" v-model='formData.name'/>
          </div>

          <div>
            <label for='email' class='label'>Your Email</label><br />
            <input class='form-input' type="email" name="email" v-model='formData.email'/>
          </div>
        </div>
        
        <div class="message-wrapper">
          <label for='message' class='label'>Message:</label><br />
          <textarea class='form-input' name="message" v-model='formData.message'></textarea>
        </div>

        <button id='submitForm' type="submit">Send Email</button>
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
      about,
      formData: {}      
    }
  },

  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    },
    
    handleSubmit(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
    .then(() => this.$router.push('/success'))
    .catch(error => alert(error))
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

.form-input {
  color: #000000;
}

</style>
