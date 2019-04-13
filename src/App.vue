<template>
  <div id="app">
    <div class="page-header">
      <h1>Todo on Vue</h1>
      <p class="lead">An test project based on VueJS and Vuex</p>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
