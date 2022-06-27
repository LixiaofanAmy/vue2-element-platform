<template>
  <div class="login">
    <el-form
      class="login-form"
      ref="loginForm"
      :model="loginForm"
      :rules="rules"
    >
      <div class="login-title">后台管理系统</div>
      <el-form-item prop="userName" label="用户名">
        <el-input
          v-model="loginForm.userName"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="userPass" label="密码">
        <el-input
          v-model="loginForm.userPass"
          type="password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item class="login-btn-wrap">
        <el-button class="login-btn" type="primary" @click="subminForm"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { login } from '@/apis/login'
export default {
  name: 'LoginPage',
  data() {
    return {
      loginForm: {
        userName: '',
        userPass: '',
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' },
        ],
        userPass: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 8, message: '长度在 6 到 8 个字符', trigger: 'blur' },
        ],
      },
    }
  },
  beforeRouteEnter(to, from, next) {
    localStorage.removeItem('token')
    next()
  },
  methods: {
    subminForm() {
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          this.loginHandler().then(() => {
            this.$router.push({ name: 'views' })
          })
        } else {
          return false
        }
      })
    },
    loginHandler() {
      return login().then((res) => {
        localStorage.setItem('token', res.data.token)
      })
    },
  },
}
</script>
<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgb(44, 62, 80);
}
.login-form {
  width: 300px;
  padding: 70px 60px 70px 60px;
  border-radius: 10px;
  box-shadow: 2px 1px 6px 0px rgba(0, 0, 0, 0.2);
  background-color: #fff;
}
.login-title {
  padding-bottom: 25px;
  font-size: 24px;
  color: #2c3e50;
}
.login-btn-wrap {
  padding-top: 20px;
}
.login-btn {
  width: 100%;
}
</style>
