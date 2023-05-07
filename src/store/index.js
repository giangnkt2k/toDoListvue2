import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toDoList: ['ko']
  },
  getters: {
    toDoList: state => state.toDoList
  },
  mutations: {
    SET_NEW_TASK: (state, newTask) => {
      state.toDoList.push(newTask)
    },
    DELETE_TASK: (state, index) => {
      const listTask = state.toDoList
      listTask.splice(index, 1)
      state.toDoList = listTask
    }
  },
  actions: {
    setNewTask ({ commit }, newTask) {
      commit('SET_NEW_TASK', newTask)
    },
    deleteTask ({ commit }, index) {
      commit('DELETE_TASK', index)
    }
  },
  modules: {
  }
})
