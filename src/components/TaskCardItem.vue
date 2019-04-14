<template>
  <div class="card task-Card-item">
    <div class="card-block">
      <h5 class="card-title">
        <span class="text-muted">#{{item.id}}</span>
        {{item.text}}
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskCardItem',
  props: ['item']
}
</script>

<style>
  .card.task-Card-item {
    background: #627180;
  }
</style>
