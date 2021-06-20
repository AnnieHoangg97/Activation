<template>
  <div id="app">
    <header id="masthead" class="site-header" role="banner">
      <router-link to="/" class="header-image">
        <img src="./assets/img/LA-Banner.png" alt="Life Activation Logo" />
      </router-link>
    </header>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style>
@import "./assets/css/style.css";

.app-logo {
  width: 100%;
}
</style>
