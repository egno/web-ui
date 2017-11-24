<template>
  <el-menu v-if="navMenuItems"
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="false"
    >
    <div v-for="(item, index) in navMenuItems"
    :key="''+index"
    >
      <navigator-menu-item :item="item" :index="index">
      </navigator-menu-item>
    </div>
  </el-menu>
</template>

<script>
import { Menu } from 'element-ui'
import { mapGetters } from 'vuex'
import NavigatorMenuItem from '@/components/NavigatorMenuItem'

export default {
  components: {
    'el-menu': Menu,
    'navigator-menu-item': NavigatorMenuItem
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'navMenuItems'
    ])
  },
  methods: {
  }
}
</script>

<style>
.el-menu {
  border-right: none;
}
</style>
