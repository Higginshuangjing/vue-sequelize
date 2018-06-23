<template>
  <div id="app">
    <el-container>
      <router-view></router-view>
    </el-container>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  height: 100%;
}
.el-container {
  background-color: #fff;
  height: 100%;
}
</style>
