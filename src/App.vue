<template>
  <div id="app">
    <el-container>
      <app-header>
      </app-header>
      <el-container>
        <el-aside
        :width="navigatorWidth">
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
import { mapActions, mapGetters } from 'vuex'
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
  computed: {
    ...mapGetters([
      'navigatorVisible'
    ]),
    navigatorWidth () {
      return (this.navigatorVisible) ? '18em' : '0'
    }
  },
  methods: {
    ...mapActions([
      'loadRestData'
    ])
  },
  mounted () {
    this.loadRestData('NavMenuItems')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app > .el-container {
  height: calc(100vh - 16px);
  /*margin-bottom: 40px;*/
}

.el-header, .el-footer {
  text-align: center;
  /*line-height: 2em;*/
}

.el-aside {
  color: #333;
  border-right: solid 1px #e6e6e6;
}

.el-main {
  text-align: center;
  /*line-height: 160px;*/
}


</style>
