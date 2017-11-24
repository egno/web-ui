<template>
  <div>
    <el-button v-if="!(userInfo)" size="mini"
    type="text"
    @click="dialogLoginVisible = true">
      Войти
    </el-button>
    <el-dropdown v-else
    @command="handleCommand"
    >
      <el-button size="mini" type="text">
        {{ userName }} <i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>

      <el-dropdown-menu
      slot="dropdown"
      >
        <el-dropdown-item
        v-for="(item, index) in menuItems"
        :key="index"
        :command="item.action"
        >
        {{ item.title }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-dialog
    center
    title="Войти в систему"
    :visible.sync="dialogLoginVisible"
    width="30%"
    >
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="logIn(); dialogLoginVisible = false">Войти</el-button>
        <el-button @click="dialogLoginVisible = false">Отменить</el-button>
      </span>
    </el-dialog>

    <el-dialog
    center
    title="Выйти из системы"
    :visible.sync="dialogLogoutVisible"
    width="30%"
    >
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="logOut(); dialogLogoutVisible = false">Выйти</el-button>
        <el-button @click="dialogLogoutVisible = false">Отменить</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import { Button, Dialog, Dropdown, DropdownItem, DropdownMenu } from 'element-ui'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    'el-button': Button,
    'el-dialog': Dialog,
    'el-dropdown': Dropdown,
    'el-dropdown-item': DropdownItem,
    'el-dropdown-menu': DropdownMenu
  },
  data () {
    return {
      dialogLoginVisible: false,
      dialogLogoutVisible: false,
      menuItems: [
        {
          title: 'Выйти',
          action: 'showLoginBox'
        },
        {
          title: 'Личная информация'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ]),
    userName () {
      if (!this.userInfo) return 'Войти'
      return this.userInfo.name
    }
  },
  methods: {
    ...mapActions(
      [
        'logIn',
        'logOut'
      ]
    ),
    handleCommand (command) {
      if (!command) return
      if (command === 'showLoginBox') {
        this.dialogLogoutVisible = true
      }
    }
  }
}
</script>

<style>
</style>
