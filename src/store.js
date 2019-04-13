import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: {
      todo: []
    },
    nextId: 1
  },
  // addItem takes the current state and an item as a function argument. pass it to state.items.todo via Object so that on the next call it increases the id value by 1
  mutations: {
    addItem (state, item) {
      state.items.todo.push(Object.assign(item, {id: state.nextId}))
      state.nextId += 1
    }
  }
})
