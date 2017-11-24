<template>
  <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="120px" class="loginForm">
  <el-form-item label="Login" prop="login">
    <el-input type="text" v-model="loginForm.login" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="Confirm" prop="pass">
    <el-input type="password" v-model="loginForm.pass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('loginForm')">Войти</el-button>
    <el-button @click="resetForm('loginForm')">Отмена</el-button>
  </el-form-item>
</el-form>
</template>

<script>
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'))
        } else {
          if (this.loginForm.checkPass !== '') {
            this.$refs.loginForm.validateField('checkPass')
          }
          callback()
        }
      }
      return {
        loginForm: {
          login: '',
          pass: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
