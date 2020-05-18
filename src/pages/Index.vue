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

      <div>
        <a href="https://github.com/lundregan" target="_blank" rel='noopener'>
          <button id='view-projects-button'>View My Projects</button>
        </a>
        <a href="https://github.com/lundregan" target="_blank" rel='noopener'>
          <button id='view-projects-button'>View My Github</button>
        </a>
      </div>
    </section>

    <section id='projects-section'>
      <h1>Projects</h1>

      <div id='projects'>
        <div class="project">
          <g-image class='project-image' src='~/assets/images/projects/hexoggle.png'></g-image>
          <div class='project-description'>
            <h3>Hexoggle</h3>

            <p>
              Hexagon based puzzle game where you toggle hexagons to turn the whole board from red to green.
              Built with vue as a learning project.
            </p>

            <div class='project-links'>                
                <button class='project-link-button'>
                  <p>Play on Netlify</p>
                  <img src="../assets/images/logos/netlify-logo.png" alt="" class="project-link-image"> 
                </button>

                <button class='project-link-button'>
                  <p>View Code on Github</p>
                  <img src="../assets/images/logos/github-logo.png" alt="" class="project-link-image"> 
                </button>
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
  text-align: center;
}

#projects {
  display: flex;
  justify-content: space-around;
}

.project {
  width: 50vw;

  display: flex;
}

.project-links {
  display: flex;
}

.project-image {
  width: 50%;
}

.project-link-button {
  width: 50%;

  background: grey;
}

.project-link-image {
  max-width: 50%;
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
