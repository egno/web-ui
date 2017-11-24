<template>
  <el-header
  height="2em"
  >
  <el-row :gutter="20">
    <el-col :span="16">
      <div class="grid-content left">
        <span class="main-title">
          {{ appTitle }}
        </span>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content right">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
            v-for="(item, index) in menuItems"
            :key="index"
            >
            {{ item.title }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span v-if="userInfo" class="supplementary">{{ userInfo.name }}</span>
      </div>
    </el-col>
  </el-row>
  </el-header>
</template>

<script>
import { Col, Dropdown, DropdownItem, DropdownMenu, Header, Row } from 'element-ui'
import { mapGetters } from 'vuex'

export default {
  components: {
    'el-col': Col,
    'el-dropdown': Dropdown,
    'el-dropdown-item': DropdownItem,
    'el-dropdown-menu': DropdownMenu,
    'el-row': Row,
    'el-header': Header
  },
  data () {
    return {
      menuItems: [
        {
          title: 'Войти'
        },
        {
          title: 'Выйти'
        },
        {
          title: 'Личная информация'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'appTitle',
      'userInfo'
    ])
  }
}
</script>

<style>
.el-header {
  background-color: #eee;
  color: #333;
  line-height: 2em;
}

.supplementary {
  font-size: 12px;
}

.left {
  text-align: left;
}

.right {
  text-align: right;
}

.main-title {
  text-align: left;
  font-size: 20px;
}
</style>
