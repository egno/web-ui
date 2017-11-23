<template>
  <el-menu>
    <div v-for="item in menuItems">
      <el-submenu index="item.title" v-if="item.items">
        <template slot="title"><span>{{ item.title }}</span></template>
        <el-menu-item v-for="subitem in item.items">
          {{ subitem.title }}
        </el-menu-item>
      </el-submenu>
      <el-menu-item v-else>
        {{ item.title }}
      </el-menu-item>
    </div>
  </el-menu>
</template>

<script>
import { Menu, MenuItem, Submenu } from 'element-ui'

export default {
  components: {
    'el-menu': Menu,
    'el-menu-item': MenuItem,
    'el-sumbenu': Submenu
  },
  data () {
    return {
      menuItems: [
        {
          title: 'Item 1'
        },
        {
          title: 'Item 2',
          items: [
            {
              title: 'Sumitem 2-1'
            }
          ]
        }
      ]
    }
  },
  methods: {

  }
}
</script>
