<template>
	<div class="ct_box" style="width: 95%; height: 650px; margin: auto; margin-top: 20px; border: 1px solid #799FD9;">
		<div class="ct_nav">
			<p>添加需求</p>
		</div>
		<div class="ct_mine">
			<button>保存</button>
			<button>返回</button>
			<div style="width: 200px; margin: 0 auto;">
				<el-form :inline="true" :model="formInline" class="demo-form-inline form">
					<el-form-item>
					    	<el-select v-model="formInline.region" placeholder="XX项目">
					        <el-option label="低级" value="shanghai"></el-option>
					        <el-option label="中级" value="beijing"></el-option>
					        <el-option label="高级" value="beijing"></el-option>
				        </el-select>
				  	</el-form-item>
			  	</el-form>
			</div>
			
			<el-form :inline="false" :model="formInline" class="demo-form-inline minform">
				<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
			  <el-form-item label="需求标题" class="a">
			    <el-input v-model="formInline.user"></el-input>
			  </el-form-item>
			  
			  <el-form-item label="活动形式"   class="a">
			    <el-input type="textarea" class="ainput" style="min-height: 100px;"></el-input>
			  </el-form-item>
			   </el-form>
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
        },
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      }
    },
    methods: {
       
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
		height: 700px;
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
	.minform{
		width: 950px;
		height: 500px;
		margin: auto;
		border: 1px solid #799FD9;
		margin-top: 20px;
	}
	.minform .a{
		margin-top: 20px;
		width: 300px;
	}
	.minform .b{
		margin-left: -16px;
		
	}
	.minform .a .ainput{
		width: 500px;
		
	}
</style>