<template>
<<<<<<< HEAD
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
=======
  <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="false">
    <div v-for="(item, index) in menuItems">
      <navigator-menu-item :item="item" :index="index">
      </navigator-menu-item>
>>>>>>> f4f48d1e3190439d86a7b6b00ae9eda6e0d5c650
    </div>
  </el-menu>
</template>

<script>
<<<<<<< HEAD
import { Menu, MenuItem, Submenu } from 'element-ui'
=======
import { Menu } from 'element-ui'
import NavigatorMenuItem from '@/components/NavigatorMenuItem'
>>>>>>> f4f48d1e3190439d86a7b6b00ae9eda6e0d5c650

export default {
  components: {
    'el-menu': Menu,
<<<<<<< HEAD
    'el-menu-item': MenuItem,
    'el-sumbenu': Submenu
=======
    'navigator-menu-item': NavigatorMenuItem
>>>>>>> f4f48d1e3190439d86a7b6b00ae9eda6e0d5c650
  },
  data () {
    return {
      menuItems: [
        {
<<<<<<< HEAD
          title: 'Item 1'
=======
          title: 'Item 1',
          items: [
            {
              title: 'Sumitem 1-1'
            },
            {
              title: 'Sumitem 1-2',
              items: [
                {
                  title: 'Sumitem 1-2-1'
                },
                {
                  title: 'Sumitem 1-2-2'
                },
                {
                  title: 'Sumitem 1-2-3'
                }
              ]
            },
            {
              title: 'Sumitem 1-3'
            }
          ]
>>>>>>> f4f48d1e3190439d86a7b6b00ae9eda6e0d5c650
        },
        {
          title: 'Item 2',
          items: [
            {
              title: 'Sumitem 2-1'
<<<<<<< HEAD
=======
            },
            {
              title: 'Sumitem 2-2'
            },
            {
              title: 'Sumitem 2-3'
>>>>>>> f4f48d1e3190439d86a7b6b00ae9eda6e0d5c650
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
