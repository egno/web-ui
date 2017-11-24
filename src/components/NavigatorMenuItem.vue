<template>
  <el-submenu v-if="item.items" :index="''+index">
    <template slot="title">
      <!-- <i class="el-icon-location"></i> -->
      <span slot="title">{{ item.title }}</span>
    </template>
    <navigator-menu-item v-for="(subitem, subIndex) in item.items"
    :item="subitem"
    :index="index + '-' + subIndex">
  </navigator-menu-item>
  </el-submenu>
  <el-menu-item v-else :index="''+index">
    <span slot="title">{{ item.title }}</span>
  </el-menu-item>
</template>

<script>
import { MenuItem, Submenu } from 'element-ui'
import NavigatorMenuItem from '@/components/NavigatorMenuItem'

export default {
  name: 'navigator-menu-item',
  components: {
    'el-menu-item': MenuItem,
    'el-submenu': Submenu,
    'navigator-menu-item': NavigatorMenuItem
  },
  props: [
    'item',
    'index'
  ],
  methods: {

  }
}
</script>
