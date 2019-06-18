<template>
	<div class="ct_box" style="width: 95%; height: 800px; margin: auto; margin-top: 20px; border: 1px solid #799FD9;">
		<div class="ct_nav">
			<p>文件上传</p>
		</div>
		<div class="ct_mine">
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
			<el-upload
			  class="upload-demo uplo"
			  ref="upload"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :on-preview="handlePreview"
			  :on-remove="handleRemove"
			  :file-list="fileList"
			  :auto-upload="false">
			  <el-button slot="trigger" size="small" type="primary" class="but1">选取文件</el-button>
			  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload" class="but1">上传到服务器</el-button>
			  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
			</el-upload>
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
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      }
    },
    methods: {
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
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
	
	.but{
		width: 150px;
		height: 35px;
		line-height: 35px;
		
	}
	.but1{
		margin: 15px 60px;
		width: 150px;
		height: 35px;
		line-height: 35px;
	}
	.uplo{
		width: 500px;
		height: 400px;
		border: 1px solid #799FD9;
		border-radius: 10px 10px;
		margin: auto;
		margin-top: 50px;
	}
</style>