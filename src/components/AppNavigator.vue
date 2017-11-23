<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="false">
    <div v-for="(item, index) in menuItems">
      <navigator-menu-item :item="item" :index="index">
      </navigator-menu-item>
    </div>
  </el-menu>
</template>

<script>
import { Menu } from 'element-ui'
import NavigatorMenuItem from '@/components/NavigatorMenuItem'

export default {
  components: {
    'el-menu': Menu,
    'navigator-menu-item': NavigatorMenuItem
  },
  data () {
    return {
      menuItems: [
        {
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
        },
        {
          title: 'Item 2',
          items: [
            {
              title: 'Sumitem 2-1'
            },
            {
              title: 'Sumitem 2-2'
            },
            {
              title: 'Sumitem 2-3'
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
