<template>
	<div class="login_box">
		<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
		  <el-form-item label="用户年龄" prop="pass" class="form">
		    <el-input type="text" v-model="ruleForm2.pass" auto-complete="off"></el-input>
		  </el-form-item>
		  <el-form-item label="密码" prop="checkPass"class="form">
		    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
		  </el-form-item>
		  <el-form-item label="请输入验证码" prop="age"class="form">
		    <el-input v-model.number="ruleForm2.age"></el-input>
		  </el-form-item>
		  <el-form-item class="form">
		    <el-button type="primary" @click="submitForm('ruleForm2')" class="but">确认登陆</el-button>
		    <el-button @click="resetForm('ruleForm2')" class="but">重置</el-button>
		  </el-form-item>
		</el-form>
	</div>
</template>

<script>
	
 export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
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

<style scoped="scoped">
	*{
		margin: 0;
		padding: 0;
	}
	.login_box{
		width: 40%;
		height: 380px; 
		margin: auto;
		margin-top: 20px;
		border: 1px solid #799FD9;
		border-radius: 10px 10px;
	}
	.form{
		margin-top: 20px;
	}
	.but{
		width: 150px;
		height: 35px;
		line-height: 35px;
	}
	.el-input{
		width: 350px;
		height: 35px;
	}
</style>