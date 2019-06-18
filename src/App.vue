<template>
  <div id="app">
    <div class="box">
	    	<el-container>
				  <el-header class="head">
				  	<h1>种子软件项目管理系统</h1>
				  	<p>zhong zi ruan jian xiang mu guan li xi tong</p>
				  	<a>© 2009 www.mycodes.net QQ:123456 Email:123456@qq.com</a>
				  </el-header>
				  <el-container>
				    <el-aside class="main_left">
				    	<div class="mine_msg">
				    		<ul>
				    			<li>
				    				<img src="../static/img/h.gif"/>
				    			</li>
				    			<li style="width: 70%;">
				    				<a>您好，king</a>
				    				<p><router-link to="/login">[ 退出 ]</router-link></p>
				    			</li>
				    		</ul>
				    	</div>
				    	<!--左边文档数-->
							<el-row class="tac">
						  <el-col :span="24">
						    <el-menu
						      default-active="2"
						      class="el-menu-vertical-demo"
						      @open="handleOpen"
						      @close="handleClose"
						      background-color="#ffffff"
						      text-color="black"
						      active-text-color="#ffd04b">
						      <el-submenu index="1">
						        <template slot="title">
						          <span>任务管理</span>
						        </template>
						        <el-menu-item-group>
						          <el-menu-item index="1-1"><router-link to="/creattask">创建任务</router-link></el-menu-item>
						          <el-menu-item index="1-2"><router-link to="/taskmsg">任务信息查看</router-link></el-menu-item>
						        </el-menu-item-group>
						      </el-submenu>
						     <el-submenu index="2">
						        <template slot="title">
						          <span>消息管理</span>
						        </template>
						        <el-menu-item-group>
						          <el-menu-item index="1-1"><router-link to="/sendmsg">发送信息</router-link></el-menu-item>
						          <el-menu-item index="1-2"><router-link to="/recivemsg">收件信息查看</router-link></el-menu-item>
						          <el-menu-item index="1-3"><router-link to="/sendmsgsearch">发件信息查看</router-link></el-menu-item>
						          <el-menu-item index="1-4"><router-link to="/msgsearch">消息信息查看</router-link></el-menu-item>
						        </el-menu-item-group>
						      </el-submenu>
						     <el-submenu index="3">
						        <template slot="title">
						          <span>项目系统</span>
						        </template>
						        <el-menu-item-group>
						          <el-menu-item index="1-1"><router-link to="/probasic">项目基本信息查看</router-link></el-menu-item>
						          <el-menu-item index="1-2"><router-link to="/proplan">项目计划信息查看</router-link></el-menu-item>
						          <el-menu-item index="1-3"><router-link to="/proneed">项目需求信息查看</router-link></el-menu-item>
						          <el-menu-item index="1-4"><router-link to="/promodule">项目模块信息查看</router-link></el-menu-item>
						          <el-menu-item index="1-5"><router-link to="/profun">项目功能信息查看</router-link></el-menu-item>
						          <el-menu-item index="1-6"><router-link to="/proupload">项目上传信息查看</router-link></el-menu-item>
						          <el-menu-item index="1-7"><router-link to="/procost">项目成本信息查看</router-link></el-menu-item>
						        </el-menu-item-group>
						      </el-submenu>
						      <el-submenu index="4">
						        <template slot="title">
						          <span>客户系统</span>
						        </template>
						        <el-menu-item-group>
						          <el-menu-item index="1-1"><router-link to="/cusmsg">客户信息查看</router-link></el-menu-item>
						        </el-menu-item-group>
						      </el-submenu>
						      <el-submenu index="5">
						        <template slot="title">
						          <span>人员系统</span>
						        </template>
						        <el-menu-item-group>
						          <el-menu-item index="1-1"><router-link to="/peomsg">人员信息查看</router-link></el-menu-item>
						          <el-menu-item index="1-2"><router-link to="/duty">职务信息查看</router-link></el-menu-item>
						          <el-menu-item index="1-2"><router-link to="/peogoing">员工工作情况查看</router-link></el-menu-item>
						        </el-menu-item-group>
						      </el-submenu>
						      <el-submenu index="6">
						        <template slot="title">
						          <span>考勤系统</span>
						        </template>
						        <el-menu-item-group>
						          <el-menu-item index="1-1"><router-link to="/attendtype">考勤类型查看</router-link></el-menu-item>
						          <el-menu-item index="1-2"><router-link to="/attendmsg">员工考勤信息查看</router-link></el-menu-item>
						        </el-menu-item-group>
						      </el-submenu>
						      <el-submenu index="7">
						        <template slot="title">
						          <span>系统管理</span>
						        </template>
						        <el-menu-item-group>
						          <el-menu-item index="1-1"><router-link to="/addpeople">添加用户</router-link></el-menu-item>
						          <el-menu-item index="1-2">添加角色</el-menu-item>
						        </el-menu-item-group>
						      </el-submenu>
						      <el-submenu index="8">
						        <template slot="title">
						          <span>系统帮助</span>
						        </template>
						        <el-menu-item-group>
						          <el-menu-item index="1-1">用户手册</el-menu-item>
						          <el-menu-item index="1-2">规章制度</el-menu-item>
						        </el-menu-item-group>
						      </el-submenu>
						      <el-submenu index="9">
						        <template slot="title">
						          <span>个人管理</span>
						        </template>
						        <el-menu-item-group>
						          <el-menu-item index="1-1">个人信息查看</el-menu-item>
						          <el-menu-item index="1-2"><router-link to="recovemsg">任务信息查看</router-link></el-menu-item>
						        </el-menu-item-group>
						      </el-submenu>
						    </el-menu>
						  </el-col>
						</el-row>
							
				    	
				    </el-aside>
				    <el-main class="main_right">
				    	 
				    	<router-view/>
				    </el-main>
			  	</el-container>
				</el-container>
    </div>
    
  </div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				
			}
		},
		methods: {
	      handleOpen(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      handleClose(key, keyPath) {
	        console.log(key, keyPath);
	      }
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	a{
		text-decoration: none;
		color: #799FD9;
	}
	.box{
		width: 100%;
	}
	.box .head{
		width: 100%;
		height: 100px;
		/*border: 1px solid red;*/
	}
	.box .head>h1{
		color: #799FD9;
		letter-spacing: 3px;
		text-align: center;
	}
	.box .head>p{
		color: #799FD9;
		font-size: 10px;
		text-align: center;
	}
	.box .head>a{
		color: darkgray;
		font-size: 10px;
		margin-left: 75%;
		display: block;
		margin-top: -4px;
	}
	.box .main_left{
		width: 20%;
		height: 800px;
		border: 1px solid #799FD9;
	}
	.box .main_left>.mine_msg{
		width: 100%;
		height: 75px;
		border: 1px solid #799FD9;
	}
	.box .main_left>.mine_msg>ul{
		width: 90%;
		height: 100%;
		margin: 0 auto;
		list-style: none;
		display: flex;
		justify-content: space-between;
	}
	.box .main_left>.mine_msg>ul>li{
		width: 30%;
		height: 100%;
		/*border: 1px solid #799FD9;*/
	}
	.box .main_left>.mine_msg>ul>li>img{
		width: 80%;
		height: 80%;
		margin: 10px 10px;
	}
	.box .main_left>.mine_msg>ul>li>a{
		color: #799FD9;
		font-size: 15px;
		display: block;
		margin-top: 11px;
	}
	.box .main_left>.mine_msg>ul>li>p{
		color: #799FD9;
		font-size: 16px;
		letter-spacing: 3px;
		line-height: 32px;
	}
	.box .main_right{
		width: 80%;
		height: 800px;
		border: 1px solid #799FD9;
	}
</style>
