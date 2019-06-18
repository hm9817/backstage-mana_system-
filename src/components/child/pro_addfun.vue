<template>
	<div class="ct_box" style="width: 95%; height: 2000px; margin: auto; margin-top: 20px; border: 1px solid #799FD9;">
		<div class="ct_nav">
			<p>项目功能添加页面</p>
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
			<div style="width: 350px; margin: 20px auto">
			  <el-button type="primary" plain class="but">~ 添加模块 ~</el-button>
			  <el-button type="primary" plain class="but">~ 删除模块 ~</el-button>
			</div>
			
			<el-form :inline="true" :model="formInline" class="demo-form-inline minform">
				<el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
			  <el-form-item label="模块名字" class="a">
			    <el-input v-model="formInline.user"></el-input>
			  </el-form-item>
			  <el-form-item label="所属标识"class="a">
			    <el-input v-model="formInline.user"></el-input>
			  </el-form-item>
			 <el-form-item label="所属项目"class="a">
			    <el-select v-model="formInline.region" placeholder="活动区域">
			      <el-option label="区域一" value="shanghai"></el-option>
			      <el-option label="区域二" value="beijing"></el-option>
			    </el-select>
			  </el-form-item>
			  <el-form-item label="优先级"class="a">
			    <el-select v-model="formInline.region" placeholder="活动区域">
			      <el-option label="区域一" value="shanghai"></el-option>
			      <el-option label="区域二" value="beijing"></el-option>
			    </el-select>
			  </el-form-item>
			  <el-form-item label="模块描述"   class="a">
			    <el-input type="textarea" class="ainput" style="min-height: 100px;"></el-input>
			  </el-form-item>
			   <el-form-item label="需求描述"   class="a">
			    <el-input type="textarea" class="ainput" style="min-height: 100px;"></el-input>
			  </el-form-item>
			   </el-form>
			</el-form>
			
			<el-form :inline="true" :model="formInline" class="demo-form-inline minform">
				<el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
			  <el-form-item label="模块名字" class="a">
			    <el-input v-model="formInline.user"></el-input>
			  </el-form-item>
			  <el-form-item label="所属标识"class="a">
			    <el-input v-model="formInline.user"></el-input>
			  </el-form-item>
			 <el-form-item label="所属项目"class="a">
			    <el-select v-model="formInline.region" placeholder="活动区域">
			      <el-option label="区域一" value="shanghai"></el-option>
			      <el-option label="区域二" value="beijing"></el-option>
			    </el-select>
			  </el-form-item>
			  <el-form-item label="优先级"class="a">
			    <el-select v-model="formInline.region" placeholder="活动区域">
			      <el-option label="区域一" value="shanghai"></el-option>
			      <el-option label="区域二" value="beijing"></el-option>
			    </el-select>
			  </el-form-item>
			  <el-form-item label="模块描述"   class="a">
			    <el-input type="textarea" class="ainput" style="min-height: 100px;"></el-input>
			  </el-form-item>
			   <el-form-item label="需求描述"   class="a">
			    <el-input type="textarea" class="ainput" style="min-height: 100px;"></el-input>
			  </el-form-item>
			   </el-form>
			</el-form>
			
			<el-form :inline="true" :model="formInline" class="demo-form-inline minform">
				<el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
			  <el-form-item label="模块名字" class="a">
			    <el-input v-model="formInline.user"></el-input>
			  </el-form-item>
			  <el-form-item label="所属标识"class="a">
			    <el-input v-model="formInline.user"></el-input>
			  </el-form-item>
			 <el-form-item label="所属项目"class="a">
			    <el-select v-model="formInline.region" placeholder="活动区域">
			      <el-option label="区域一" value="shanghai"></el-option>
			      <el-option label="区域二" value="beijing"></el-option>
			    </el-select>
			  </el-form-item>
			  <el-form-item label="优先级"class="a">
			    <el-select v-model="formInline.region" placeholder="活动区域">
			      <el-option label="区域一" value="shanghai"></el-option>
			      <el-option label="区域二" value="beijing"></el-option>
			    </el-select>
			  </el-form-item>
			  <el-form-item label="模块描述"   class="a">
			    <el-input type="textarea" class="ainput" style="min-height: 100px;"></el-input>
			  </el-form-item>
			   <el-form-item label="需求描述"   class="a">
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
	}
	.minform .c{
		width: 500px;
		
	}
	.minform .a .ainput{
		width: 500px;
		
	}
	.but{
		width: 150px;
		height: 35px;
		line-height: 35px;
	}
</style>