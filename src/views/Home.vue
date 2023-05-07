<template>
  <div class="home">
    <div>
      <h1>
        To Do List
      </h1>
    </div>
    <CardAdd></CardAdd>
    <div style="margin-top:10px">

    </div>
    <div v-for="(item, index) in toDoList" :key="index">
      <CardTask  :input="item" :index="index"/>
      <div style="margin-top:10px"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CardAdd from '../components/CardAdd.vue'
import CardTask from '../components/CardTask.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {
    CardAdd,
    CardTask
  },
  computed: {
    ...mapGetters(['toDoList'])
  }

}
</script>

<style scoped>
  .home {
    margin: 50px;
  }
</style>
