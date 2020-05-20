<template>
  <div class="layout">
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
        <g-link class="nav__link" to="/contact/">Contact</g-link>
      </nav>
    </header>
    <slot/>
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

.header {
  margin-bottom: 20px;
  
  height: 80px;

  display: flex;

  justify-content: space-between;
  align-items: center;
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
