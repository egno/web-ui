<template>
  <el-header
  height="3em"
  >
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="grid-content left">
          <el-button size="mini"
          type="text"
          :icon="navigatorIcon"
          @click='toggleNavigator'>
          Меню
          </el-button>
        </div>
      </el-col>
      <el-col :span="12">
        {{ appTitle }}
      </el-col>
      <el-col :span="8">
        <div class="grid-content right">
          <user-info-button>
          </user-info-button>
        </div>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
import { Button, Col, Header, Row } from 'element-ui'
import { mapActions, mapGetters } from 'vuex'
import UserInfoButton from '@/components/UserInfoButton'

export default {
  components: {
    'el-button': Button,
    'el-col': Col,
    'el-row': Row,
    'el-header': Header,
    'UserInfoButton': UserInfoButton
  },
  data () {
    return {
      dialogVisible: false,
      menuItems: [
        {
          title: 'Войти',
          action: 'showLoginBox'
        },
        {
          title: 'Выйти',
          action: 'showLoginBox'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'appTitle',
      'navigatorVisible',
      'userInfo'
    ]),
    navigatorIcon () {
      return (this.navigatorVisible) ? 'el-icon-arrow-left' : 'el-icon-arrow-down'
    }
  },
  methods: {
    ...mapActions(
      [
        'toggleNavigator'
      ]
    )
  }
}
</script>

<style>
.el-header {
  line-height: 3em;
  background-color: #EDF2FC;
  color: #333;
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
