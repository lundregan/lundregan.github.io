<template>
  <div class="layout">
    <div class="content-wrapper">
      <header class='navigation-header'>
        <div class='header-brand'>
          <p class='brand-title'>Lundregan // Junior-Developer</p>
        </div>

        <nav class='header-nav'>
          <g-link class='nav__link' to='/'>Home</g-link>
          <g-link class='nav__link' to='/about'>About</g-link>
          <g-link class='nav__link' to='/blogposts'>Blog</g-link>
          <g-link class='nav__link' to='/contact'>Contact</g-link>
        </nav>

        <div class="header-social">
          <a href='https://github.com/lundregan' target='_blank'><font-awesome class='social-icon' :icon='["fab", "github"]' /></a>
          <a href='https://twitter.com/ELundregan' target='_blank'><font-awesome class='social-icon' :icon='["fab", "twitter"]' /></a>
          <a href='https://www.linkedin.com/in/elundregan/' target='_blank'><font-awesome class='social-icon' :icon='["fab", "linkedin"]' /></a>
        </div>
      </header>
      <slot/>
    </div>

    <footer class="test-footer">
      <div class="footer-social">
          <a href='https://github.com/lundregan' target='_blank'><font-awesome class='social-icon' :icon='["fab", "github"]' /></a>
          <a href='https://twitter.com/ELundregan' target='_blank'><font-awesome class='social-icon' :icon='["fab", "twitter"]' /></a>
          <a href='https://www.linkedin.com/in/elundregan/' target='_blank'><font-awesome class='social-icon' :icon='["fab", "linkedin"]' /></a>
      </div>
      <p class='footer-copyright'>
        ©2020, Ethan Lundregan
      </p> 
      <p class='footer-message'>
        Built with <a class="msg-link" href="//gridsome.org">Gridsome</a> & Crafted with 🍕&🍺 by <a class="msg" href="https://github.com/lundregan" target='_blank'>Ethan Lundregan</a>
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
:root {
  --header-background: #292C2E;
  --header-accent: var(--color-title);

  --color-title: #00d9ff;
  --color-test: #07C5EF;
}

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

  padding-top: 50px;
  padding-left: 20px;
  padding-right: 20px;
  
  max-width: 1080px;
  min-height: 100vh;
}

.content-wrapper {
  min-height: 90vh;
}

.social-icon {
  padding: 6px 10px;
  
  border-bottom: 2px solid transparent;

  transition: transform ease-in-out 0.2s;
}
.social-icon:hover {
  transform: scale(1.2);
  border-bottom: 2px solid var(--header-accent);
}

/* __ Header __ */
.navigation-header {
  padding-top: 5px;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-evenly;

  width: 100vw;

  background: var(--header-background);
}

.header-brand {
  margin-left: 15px;

  flex: 1;
}
.brand-title {
  margin: 0;
}

.header-nav {
  flex: 2;

  display: flex;
}
.nav__link {
  padding-bottom: 15px;

  text-align: center;
  text-decoration: none;

  font-size: 0.8rem;

  flex: 1;

  border-bottom: 2px solid transparent;

  transition: all ease-out 1s;

}
.nav__link:hover {
  color: var(--header-accent);
  border-bottom: 2px solid var(--header-accent);
}

.header-social {
  flex: 1;

  display: flex;
  justify-content: center;
}

/* __ FOOTER __ */
.test-footer {
  margin-top: 50px;
  padding-top: 10px;

  border-top: 2px solid grey;

  text-align: center;
}

.footer-copyright {
  margin: 0;
}

.footer-message {
  margin-top: 0;
}
</style>
