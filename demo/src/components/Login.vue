
<template>
  <div>
    <el-row class="content">
      <el-col :xs="24" :sm="{span: 6,offset: 9}">
        <span class="title">
        欢迎登录 
        </span>
        <el-row>
          <el-input 
            v-model="account" 
            placeholder="账号"
            type="text">
          </el-input>
          <el-input 
            v-model="password" 
            placeholder="密码"
            type="password">
          </el-input>
          <el-button type="primary" @click="loginToDo">登录</el-button>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      account: '',
      password: ''
    };
  },
  methods:{
    loginToDo(){
      this.$router.push('/todolist')
    }
  }
};
</script>

