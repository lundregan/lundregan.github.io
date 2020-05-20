<template>
  <div class="layout">
    <div class="content-wrapper">
      <header class="header">
        <strong>
          <g-link class='brand' to="/">
            <p class='brand-siteName'> {{ $static.metadata.siteName }} </p>
            <p class='brand-positionName'> Junior Developer </p>
          </g-link>
        </strong>
        <nav class="nav">
          <g-link class="nav__link" to="/">Home</g-link>
          <g-link class="nav__link" to="/about/">About</g-link>
          <g-link class="nav__link" to="/blog/">Blog</g-link>
          <g-link class="nav__link" to="/contact/">Contact</g-link>
        </nav>
      </header>
      <slot/>
    </div>

    <footer class="footer">
      <p>
        Built with
        <a class="link" href="//gridsome.org">Gridsome</a>
        & Crafted with 💚 by
        <a class="link" href="https://github.com/lundregan" target='_blank'>Ethan Lundregan</a>
      </p> 
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
* {
  color: #FFFFFF;
}

body {
  margin:0;
  padding:0;

  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  line-height: 1.5;

  background: #121212;
}

.layout {
  margin: 0 auto;

  padding-left: 20px;
  padding-right: 20px;
  
  max-width: 1080px;
  min-height: 100vh;
}
.content-wrapper {
  min-height: 90vh;
}

.header {
  margin-bottom: 20px;

  padding: 0 10px 0 10px;
  
  width: 100%;
  height: 80px;

  display: flex;

  justify-content: space-between;
  align-items: center;

  border-radius: 0 0 10px 10px;

  background-color: #212121;
}

.footer {
  padding-top: 20px;

  height: 100px;

  text-align: center;

  bottom: 0;
}

.brand {
  text-decoration: none;
}

.brand-siteName {
  margin-bottom: 10px;
}

.brand-positionName {
  margin-top: 10px;

  font-size: 70%;

  color: purple;
}

.nav__link {
  margin-left: 20px;

  padding: 10px;

  text-decoration: none;
}

.nav__link:hover {
  color: purple;
}
</style>
