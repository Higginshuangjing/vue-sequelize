<template>
  <el-container class="dashboard-index">
    <el-header>
      <p class="title">sequelize的增删改查</p>
    </el-header>
    <el-main>
      <operate></operate>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import operate from '@/components/dashboard/Operate.vue';

@Component({
  components: {
    operate
  }
})
export default class Index extends Vue {
  name: string = 'dashboard'
  mounted () {
    console.log('dashboard', this.name)
  }
}
</script>
<style lang="scss">
.dashboard-index {
  .el-header {
    background-color: #CB85C0;
    .title {
      text-align: center;
      font-size: 20px;
      font-weight: bold;
      color: #fff;
    }
  }
  .el-main {
    width: 100%;
    margin-top: 20px;
  }
  
}
</style>
