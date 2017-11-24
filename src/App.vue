<template>
  <div id="app">
    <el-container>
      <app-header>
      </app-header>
      <el-container>
        <el-aside>
          <app-navigator></app-navigator>
        </el-aside>
        <el-main>Main
          <router-view></router-view>
        </el-main>
      </el-container>
      <el-footer
      height="1.5em">
      Footer
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import { Aside, Container, Footer, Main } from 'element-ui'
import { mapActions } from 'vuex'
import 'element-ui/lib/theme-chalk/index.css'
import AppHeader from '@/components/AppHeader'
import AppNavigator from '@/components/AppNavigator'

export default {
  name: 'app',
  components: {
    'el-aside': Aside,
    'el-container': Container,
    'el-footer': Footer,
    'el-main': Main,
    'AppNavigator': AppNavigator,
    'AppHeader': AppHeader
  },
  methods: {
    ...mapActions([
      'loadRestData'
    ])
  },
  mounted () {
    this.loadRestData('NavMenuItems')
    this.loadRestData('UserInfo')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  /*line-height: 160px;*/
}


</style>
