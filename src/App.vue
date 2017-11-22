<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside>
          <navigator></navigator>
        </el-aside>
        <el-main>Main
          <router-view></router-view>
        </el-main>
      </el-container>
      <el-footer>
      Footer
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import {Aside, Container, Footer, Header, Main, Menu} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Navigator from '@/components/Navigator'

export default {
  name: 'app',
  components: {
    'el-aside': Aside,
    'el-container': Container,
    'el-footer': Footer,
    'el-header': Header,
    'el-main': Main,
    'el-menu': Menu,
    'Navigator': Navigator
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app > .el-container {
  height: calc(100vh - 16px);
  /*margin-bottom: 40px;*/
}

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  /*line-height: 2em;*/
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  /*line-height: 200px;*/
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  /*line-height: 160px;*/
}


</style>
