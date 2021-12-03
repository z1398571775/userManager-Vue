<template>
  <div class="pageStyle">
    <el-main class="">
      <el-card class="loginForm parent">
        <strong><p class="title">用户管理系统</p></strong>
        <el-form ref="form" :model="form" label-width="65px">
          <el-form-item label="用户名:">
            <el-input placeholder="请输入用户名" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="密码:">
            <el-input placeholder="请输入密码" v-model="form.password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">登录</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-main>
  </div>
</template>

<style scoped>
.pageStyle {
  background-image: url("../assets/imgs/login/login.jpeg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

.parent {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
}

.loginForm {
  width: 20%;
  height: 30%;
  background-color: white;
}

.title {
  text-align: center;
  font-size: larger;
  margin-top: 0;
}
</style>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        password: ""
      }
    };
  },
  methods: {
    //登录
    onSubmit() {
      alert("12312");
      this.$router.push({ path: "/systemManager" });
    }
  },
  //获取验证码
  getcode() {

  },
  //检查验证码是否正确
  checkcode() {

  }
};
</script>
