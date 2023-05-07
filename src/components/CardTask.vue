<template>
  <div>
    <div class="CardTask--card">
        <div class="CardTask--card__content">
            <div class="py-10px">
                <el-input
                maxlength="30"
                show-word-limit
                placeholder="Please input"
                v-model="input"
                disabled></el-input>

            </div>
            <div class="py-10px">
                <el-button type="danger" icon="el-icon-delete" circle @click="deleteTask(index)"></el-button>

            </div>
        </div>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    input: String,
    index: Number
  },
  methods: {
    deleteTask (index) {
      this.$store.dispatch('deleteTask', index)
    }
  }
}
</script>

<style scoped>
.CardTask--card {

margin: auto;
text-align: center;
box-sizing: border-box;
width: fit-content;
background: linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%);
box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25), 0px 4px 40px rgba(0, 0, 0, 0.25);
border-radius: 40px;
}

.CardTask--card__content {

display: flex;
flex-wrap: nowrap;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
padding: 3rem 5.2rem 3rem 5.2rem;
}

.CardTask--cardContent__title {
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
