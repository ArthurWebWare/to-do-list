<template>
  <div id="app">
    <div class="page-header">
      <h1>Todo on Vue</h1>
      <p class="lead">An test project based on VueJS and Vuex</p>
    </div>
    <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  name: 'App',
  components: {
    'nav-bar': NavBar
  }
}
</script>

<style>
  .page-header h1 {
    font-weight: 300;
  }

  .card {
    margin-bottom: 10px;
  }

  .card:last-child {
    margin-bottom: 25px;
  }

  .card-block {
    padding: 15px;
  }
</style>
