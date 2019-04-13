<template>
  <div class="navbar">
    <div class="btn-group" role="group" aria-label="Menu">
      <router-link to="/board">Board</router-link>
      <router-link to="/backlog">Backlog</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    buttonClass (path) {
      return {
        btn: true,
        'btn-primary': this.$route.path === path,
        'btn-secondary': this.$route.path !== path
      }
    }
  }
}
</script>

<style>
  .navbar {
    margin-bottom: 16px;
  }
</style>
