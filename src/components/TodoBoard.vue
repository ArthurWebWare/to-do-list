<template>
<div class="board">
  <div class="row">
    <div class="col-md">
      <task-card id="todo" title="To-Do" :items="todoItems"></task-card>
    </div>
    <div class="col-md">
      <task-card id="inProgress" title="In progress" :items="inProgressItems"></task-card>
    </div>
    <div class="col-md">
      <task-card id="done" title="Done" :items="doneItems"></task-card>
    </div>
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import TaskCard from './TaskCard'
export default {
  name: 'TodoBoard',
  components: {
    'task-card': TaskCard
  },
  computed: mapState({
    todoItems: s => s.items.todo,
    inProgressItems: s => s.items.inProgress,
    doneItems: s => s.items.done
  })
}
</script>
