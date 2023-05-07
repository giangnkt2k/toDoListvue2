<template>
    <div class="CardAdd--card">
        <div class="CardAdd--card__content">
            <div class="CardAdd--cardContent__title py-10px">Task</div>
            <div class="py-10px">
                <el-input placeholder="Please input" v-model="taskInput" @keyup.enter.native="addTask()"></el-input>
            </div>
            <div class="py-10px">
                <el-button type="success" icon="el-icon-plus" circle @click="addTask" :disabled="(taskInput === '') ? true : false"></el-button>
            </div>
        </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      taskInput: ''
    }
  },
  methods: {
    addTask () {
      this.$store.dispatch('setNewTask', this.taskInput)
      this.taskInput = ''
    }
  }
}
</script>

<style scoped>

.CardAdd--card {

    margin: auto;
    text-align: center;
    box-sizing: border-box;
    width: fit-content;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%);
    box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25), 0px 4px 40px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
}

.CardAdd--card__content {

    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 3rem;
}

.CardAdd--cardContent__title {
    font-family: 'Times New Roman';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 34px;

    color: #FFFFFF;
}

.py-10px {
    padding: 0 10px;
}

</style>
