<template>
	<div class="ct_box" style="width: 95%; height: 480px; margin: auto; margin-top: 20px; border: 1px solid #799FD9;">
		<div class="ct_nav">
			<p>新建信息</p>
		</div>
		<div class="ct_mine">
			<button>发送</button>
			<button>返回</button>
			
			<el-form :inline="true" :model="formInline" class="demo-form-inline form">
			  <el-form-item label="消息标题" class="left1">
			    <el-input v-model="formInline.user" placeholder="消息标题"></el-input>
			  </el-form-item>
			  <el-form-item label="接收者" class="left1">
			    <el-input v-model="formInline.user" placeholder="接收者"></el-input>
			  </el-form-item>
			  <el-form-item label="选择" class="left3">
			    <el-select v-model="formInline.region" placeholder="请选择">
			      <el-option label="低级" value="shanghai"></el-option>
			      <el-option label="中级" value="beijing"></el-option>
			      <el-option label="高级" value="beijing"></el-option>
			    </el-select>
			  </el-form-item>
			   
			   <el-form-item label="消息内容" class="left">
			    <textarea style="width: 800px;height: 280px;"></textarea>
			  </el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	
 export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style scoped="scoped">
	*{
		margin: 0;
		padding: 0;
	}
	.ct_box>.ct_nav{
		width: 100%;
		height: 35px;
		background-color: #799FD9;
	}
	.ct_box>.ct_nav>p{
		color: #ffffff;
		font-size: 16px;
		letter-spacing: 3px;
		line-height: 35px;
		text-indent: 10px;
	}
	.ct_box>.ct_mine{
		width: 100%;
		height: 520px;
		/*border: 1px solid darkmagenta;*/
	}
	.ct_box>.ct_mine>button{
		width: 40px;
		height: 25px;
		border: 0;
		background-color: #DDA0DD;
		color: #FFFFFF;
		text-align: center;
		line-height: 25px;
		font-size: 13px;
		margin: 10px 10px 10px 10px;
	}
	.left1{
		margin-left: 60px;
		margin-top: 25px;
	}
	.left3{
		margin-left: 32px;
		margin-top: 24px;
	}
	.left{
		margin-left: 47px;
		margin-top: 15px;
	}
	 
</style>