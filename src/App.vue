<template>
  <div id="app" class="body--dashboard">
    <AsideNav />
    <MainNav />
    <router-view />
  </div>
</template>

<script>
import MainNav from './components/MainNav'
import AsideNav from './components/AsideNav'
import Vue from "vue";

window.eventHub = new Vue()

export default {
  name: 'App',

  components: {
    MainNav,
    AsideNav
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .body--dashboard {
    padding-left: 330px;
  }
</style>
