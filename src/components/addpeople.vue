<template>
	<div class="add">
		<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
		  <el-form-item label="用户名" prop="age" class="at">
		    <el-input v-model.number="ruleForm2.age" class="input"></el-input>
		  </el-form-item>
		  <el-form-item label="用户姓名" prop="age"class="at">
		    <el-input v-model.number="ruleForm2.age" class="input"></el-input>
		  </el-form-item>
		  <el-form-item label="密码" prop="pass"class="at">
		    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" class="input"></el-input>
		  </el-form-item>
		  <el-form-item label="确认密码" prop="checkPass"class="at">
		    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" class="input"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="submitForm('ruleForm2')"  class="input2">注册</el-button>
		    <el-button @click="resetForm('ruleForm2')" class="input2">重置</el-button>
		  </el-form-item>
		</el-form>
		<div style="width: 400px; margin: auto; margin-top: 20px;">
			<p>
				<el-radio v-model="radio" label="1">所有统计</el-radio>
			</p>
			<p>
				<el-radio v-model="radio" label="1">公安局管理权限</el-radio>
			</p>
			<p>
				<el-radio v-model="radio" label="1">人口和计划生育管理权限</el-radio>
			</p>
			<p>
				<el-radio v-model="radio" label="1">教育管理权限</el-radio>
			</p>
			<p>
				<el-radio v-model="radio" label="1">劳动保障管理权限</el-radio>
			</p>
			<p>
				<el-radio v-model="radio" label="1">劳动保障管理权限</el-radio>
			</p>
			<p>
				<el-radio v-model="radio" label="1">建设管理权限</el-radio>
			</p>
			<p>
				<el-radio v-model="radio" label="1">卫生管理权限</el-radio>
			</p>
			<p>
				<el-radio v-model="radio" label="1">工商管理权限</el-radio>
			</p>
			
		</div>
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
          age: '',
          radio: '1'
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
	.add{
		width: 600px;
		height: 600px;
		margin: auto;
		margin-top: 50px;
		border: 1px solid palevioletred;
	}
	.add .at{
		margin-top: 20px;
	}
	.add .input{
		width: 300px;
	}
	.add .input2{
		width: 100px;
		height: 35px;
		line-height: 35px;
		color: #FFFFFF;
		font-size: 14px;
		text-align: center;
		background-color: #799FD9;
		margin-top: 35px;
		margin-left: 50px;
	}
</style>