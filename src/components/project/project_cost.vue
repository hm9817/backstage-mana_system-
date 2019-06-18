<template>
	<div>
		<div class="block" style="margin-top: 18px;">
		    <span class="demonstration" style="margin-left: 20px;">查看内容： 按时间</span>
		    <el-date-picker
		      v-model="value4"
		      type="datetimerange"
		      :picker-options="pickerOptions2"
		      range-separator="至"
		      start-placeholder="开始日期"
		      end-placeholder="结束日期"
		      align="right"
		      class="da">
		    </el-date-picker>
		</div>
		<div style="margin: 20px 100px">
		  <el-button type="primary" plain class="but">删除所选任务</el-button>
		  <el-button type="primary" plain class="but">
		  	<router-link to="/procost/addpro">添加项目</router-link>
		  </el-button>
		</div>
		<div class="recive">
			<p>成本消息列表</p>
		</div>
		<el-table
		    :data="tableData"
		    border
		    style="width: 90%; margin: auto; border: 1px solid #799FD9;">
		    <el-table-column
		      type="selection"
		      width="60"> 
		    </el-table-column>
		    
		    <el-table-column
		      prop="name1"
		      label="项目名称"
		      width="140">
		    </el-table-column>
		    <el-table-column
		      prop="name2"
		      label="单位"
		      width="100">
		    </el-table-column>
		    <el-table-column
		      prop="name3"
		      label="项目总金额"
		      width="120">
		    </el-table-column>
		    <el-table-column
		      prop="name4"
		      label="项目负责人"
		      width="110">
		    </el-table-column>
		    <el-table-column
		      fixed
		      prop="date1"
		      label="开始时间"
		      width="130">
		    </el-table-column>
		    <el-table-column
		      fixed
		      prop="date2"
		      label="计划完成时间"
		      width="130">
		    </el-table-column>
		    <el-table-column
		      fixed
		      prop="date2"
		      label="实际完成时间"
		      width="130">
		    </el-table-column>
		    <el-table-column
		      prop="name5"
		      label="项目开发人数"
		      width="90">
		    </el-table-column>
		    <el-table-column
		      prop="name6"
		      label="成本总支出"
		      width="90">
		    </el-table-column>
		    <el-table-column
		      prop="name7"
		      label="任务优先级"
		      width="100">
		    </el-table-column>
		    <el-table-column
		      prop="name8"
		      label="完成状态"
		      width="100">
		    </el-table-column>
		    <el-table-column
		      fixed="right"
		      label="操作"
		      width=" "
		      class="caozuo">
		      <template slot-scope="scope">
		        <el-button type="text" size="small">编辑</el-button>
		      </template>
		    </el-table-column>
		 </el-table>
		 <div class="block page">
		    <el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page="currentPage4"
		      :page-sizes="[1, 2, 3, 4, 5]"
		      :page-size="1"
		      layout="total, sizes, prev, pager, next, jumper"
		      :total="5">
		    </el-pagination>
		  </div>
	</div>
</template>

<script>
	 export default {
    methods: {
      handleClick(row) {
        console.log(row);
      },
      
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },

    data() {
      return {
      	currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        tableData: [{
          name1: '流动人口项目',
          name2: '电信',
          name3: '500万',
          name4: '张三',
          date1: '2017-11-11',
          date2: '2017-11-11',
          date3: '2017-11-11',
          name5: '5',
          name6: '300万',
          name7: '急',
          name8: '已经完成'
        }, {
          name1: '流动人口项目',
          name2: '电信',
          name3: '500万',
          name4: '张三',
          date1: '2017-11-11',
          date2: '2017-11-11',
          date3: '2017-11-11',
          name5: '5',
          name6: '300万',
          name7: '急',
          name8: '已经完成'
        }, {
          name1: '流动人口项目',
          name2: '电信',
          name3: '500万',
          name4: '张三',
          date1: '2017-11-11',
          date2: '2017-11-11',
          date3: '2017-11-11',
          name5: '5',
          name6: '300万',
          name7: '急',
          name8: '已经完成'
        }, {
          name1: '流动人口项目',
          name2: '电信',
          name3: '500万',
          name4: '张三',
          date1: '2017-11-11',
          date2: '2017-11-11',
          date3: '2017-11-11',
          name5: '5',
          name6: '300万',
          name7: '急',
          name8: '已经完成'
         }, {
          name1: '流动人口项目',
          name2: '电信',
          name3: '500万',
          name4: '张三',
          date1: '2017-11-11',
          date2: '2017-11-11',
          date3: '2017-11-11',
          name5: '5',
          name6: '300万',
          name7: '急',
          name8: '已经完成'
         }, {
          name1: '流动人口项目',
          name2: '电信',
          name3: '500万',
          name4: '张三',
          date1: '2017-11-11',
          date2: '2017-11-11',
          date3: '2017-11-11',
          name5: '5',
          name6: '300万',
          name7: '急',
          name8: '已经完成'
        }, {
          name1: '流动人口项目',
          name2: '电信',
          name3: '500万',
          name4: '张三',
          date1: '2017-11-11',
          date2: '2017-11-11',
          date3: '2017-11-11',
          name5: '5',
          name6: '300万',
          name7: '急',
          name8: '已经完成'
        }, {
          name1: '流动人口项目',
          name2: '电信',
          name3: '500万',
          name4: '张三',
          date1: '2017-11-11',
          date2: '2017-11-11',
          date3: '2017-11-11',
          name5: '5',
          name6: '300万',
          name7: '急',
          name8: '已经完成'
        }],
      	pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value3: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value4: ''
      };
    }
  }
</script>

<style scoped="scoped">
	*{
		margin: 0;
		padding: 0;
	}
	a{
		text-decoration: none;
		color: #799FD9;
	}
	.da{
		margin-left: 20px;
	}
	.but{
		width: 150px;
		height: 35px;
		line-height: 35px;
	}
	.page{
		margin-left: 800px;
		margin-top: 30px;
	}
	.caozuo{
		text-align: center;
	}
	.recive{
		width: 90%;
		height: 35px;
		background-color: #799FD9;
		margin: auto;
	}
	.recive>p{
		text-align: center;
		font-size: 14px;
		color: #FFFFFF;
		line-height: 35px;
	}
</style>