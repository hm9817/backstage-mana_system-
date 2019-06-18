<template>
	<div class="ct_box" style="width: 95%; height: 380px; margin: auto; margin-top: 20px; border: 1px solid #799FD9;">
		<div class="ct_nav">
			<p>任务添加界面</p>
		</div>
		<div class="ct_mine">
			<button>保存</button>
			<button>返回</button>
			
			<el-form :inline="true" :model="formInline" class="demo-form-inline">
			  <el-form-item label="审批人" class="left1">
			    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
			  </el-form-item>
			  <el-form-item label="工期" class="left2">
			    <el-input v-model="formInline.user" placeholder="工期"></el-input>
			  </el-form-item>
			 <el-form-item label="计划开始时间" class="left11">
			    <el-input v-model="formInline.user" placeholder="计划开始时间"></el-input>
			  </el-form-item>
			  <el-form-item label="计划结束时间" class="left22">
			    <el-input v-model="formInline.user" placeholder="计划结束时间"></el-input>
			  </el-form-item>
			  <el-form-item label="任务执行人" class="left3">
			    <el-select v-model="formInline.region" placeholder="请选择">
			      <el-option label="暂不" value="shanghai"></el-option>
			      <el-option label="一般" value="beijing"></el-option>
			      <el-option label="需要" value="beijing"></el-option>
			      <el-option label="急" value="beijing"></el-option>
			      <el-option label="很急" value="beijing"></el-option>
			    </el-select>
			  </el-form-item>
			  <el-form-item label="优先级" class="left33">
			    <el-select v-model="formInline.region" placeholder="请选择">
			      <el-option label="暂不" value="shanghai"></el-option>
			      <el-option label="一般" value="beijing"></el-option>
			      <el-option label="需要" value="beijing"></el-option>
			      <el-option label="急" value="beijing"></el-option>
			      <el-option label="很急" value="beijing"></el-option>
			    </el-select>
			  </el-form-item>
			   <el-form-item label="任务说明" class="left">
			    <textarea style="width: 500px;height: 80px;"></textarea>
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
		height: 290px;
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
	.left2{
		margin-left: 240px;
		margin-top: 25px;
	}
	.left11{
		margin-left: 18px;
		margin-top: 15px;
	}
	.left22{
		margin-left: 185px;
		margin-top: 15px;
	}
	.left3{
		margin-left: 32px;
		margin-top: 15px;
	}
	.left33{
		margin-left: 213px;
		margin-top: 15px;
	}
	.left{
		margin-left: 47px;
		margin-top: 15px;
	}
	 
</style>