<template>
  <Layout>

    <section id='intro-section'>
      <h1 id='intro-name'>Ethan Lundregan</h1>
      <h2 id='intro-position'>Junior Developer</h2>
      
      <p>
        Ethan Lundregan Is My Name<br />
        Programming Is My Game<br />
        Cheesy Lines Arn't Lame<br />
        Computing Is My Dame
      </p>

      <a href="https://github.com/lundregan" target="_blank" rel='noopener'>
        <button id='view-projects-button'>View My Projects on Github</button>
      </a>
    </section>

    <section id='projects-section'>
      <!-- List of my porjects will go here -->
    </section>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Lundregan'
  }
}
</script>

<style>
#intro-section {
  text-align: center;
}

#intro-name {
  margin: 0;

  font-size: 1.8em
}

#intro-position {
  margin-top: 0;

  font-size: 1.2em;
}

#view-projects-button {
  margin-top: 20px;

  padding: 10px;

  background: grey;

  border: none;
  border-radius: 10px;
}
#view-projects-button:hover {
  animation: button-grow 2s;
}

.home-links a {
  margin-right: 1rem;
}

/* Animations  */

@keyframes button-grow {
  0% {transform: scale(1.0)}
  50% {transform: scale(1.3)}
  60% {transform: scale(1.4)}
  100% {transform: scale(1.0)}
}

</style>
