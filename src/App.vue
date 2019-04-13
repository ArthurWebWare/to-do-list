<template>
  <div id="app">
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">page-header</span><span class="nt">&gt;</span>
    <span class="nt">&lt;h1&gt;</span>ToDo List<span class="nt">&lt;/h1&gt;</span>
    <span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"lead"</span><span class="nt">&gt;</span>An expample of business sheet <span class="nt">&lt;/p&gt;</span>
    <span class="nt">&lt;/div&gt;</span>

    <span class="nt">&lt;router-view/&gt;</span>
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
