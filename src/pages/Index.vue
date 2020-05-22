<template>
  <Layout>
    <section id='intro-section'>
      <font-awesome :icon="['fas', 'user-astronaut']" size='6x'/>
      <h1 id='intro-name'>Ethan Lundregan</h1>
      <h2 id='intro-position'>Junior Developer</h2>
      <p id='intro-description'>
        Ethan Lundregan Is My Name<br />
        Programming Is My Game<br />
        Cheesy Lines Aren't Lame<br />
        Computing Is My Dame
      </p>

      <div>
          <a href="https://github.com/lundregan" target="_blank" rel='noopener'>
          <button id='view-projects-button'>View My Github</button>
        </a>
      </div>
    </section>

    <section id='projects-section'>
      <h1 id='projects-section-title'>Projects</h1>

      <div id='projects-list'>
        <div class="project">
          <g-image class='project-image' src='~/assets/images/projects/hexoggle.png'></g-image>
          <div class='project-description'>
            <h3 class='project-title'>Hexoggle</h3>

            <p class='project-description'>
              Hexagon based puzzle game where you toggle hexagons to turn the whole board from red to green.
              Built with Vue as a learning project.
            </p>

            <div class='project-links'>                
              <a class='project-link' href='https://github.com/lundregan/hexoggle' target='_blank'>
                <font-awesome :icon="['fab', 'github']" size='2x'/>
                <p>View Code on Github</p>
              </a>

              <a class='project-link' href='https://hexoggle.netlify.app/' target='_blank'>
                <font-awesome :icon="['fas', 'play']" size='2x'/>
                <p>Play on Netlify</p>
              </a>
            </div>
          </div>
        </div>
      </div>
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
  padding-top: 20vh;
  padding-bottom: 20vh;

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
  margin: 20px 15px 0 15px;

  padding: 10px;

  background: grey;

  border: none;
  border-radius: 10px;
}

#view-projects-button:hover {
  animation: button-grow 2s;
}

#projects-section {
  padding-bottom: 20vh;

  text-align: center;
}

#projects-list {
  display: flex;
  justify-content: space-around;
}

/* Project Style, for each project in projects list */
.project {
  padding: 10px;

  width: 50vw;

  display: flex;

  border-radius: 10px;

  background: #212121;
}

@media screen and (max-width: 1000px) {
  .project {
    flex: auto;
    flex-wrap: wrap;
    justify-content: center;
  }
}

.project-links {
  display: flex;
  justify-content: space-around;
}

.project-link {
  margin: 10px;
  padding: 10px;

  width: 40%;

  border-radius: 10px;
  
  text-decoration: none;

  background: #303030;
}

.project-link p {
  margin-bottom: 0;
}

.project-image {
  max-width: 50%;
}

/* Animations  */
@keyframes button-grow {
  0% {transform: scale(1.0)}
  50% {transform: scale(1.3)}
  60% {transform: scale(1.4)}
  100% {transform: scale(1.0)}
}

</style>
