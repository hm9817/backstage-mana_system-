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
		  	<router-link to="/proneed/proaddneed">添加需求信息</router-link>
		  </el-button>
		</div>
		<div class="recive">
			<p>需求列表</p>
		</div>
		<el-table
		    :data="tableData"
		    border
		    style="width: 90%; margin: auto; border: 1px solid #799FD9;">
		    <el-table-column
		      type="selection"
		      width="210"> 
		    </el-table-column>
		    <el-table-column
		      fixed
		      prop="date1"
		      label="创建时间"
		      width="230">
		    </el-table-column>
		    <el-table-column
		      prop="name1"
		      label="需求"
		      width="350">
		    </el-table-column>
		    <el-table-column
		      fixed
		      prop="date2"
		      label="更新时间"
		      width="230">
		    </el-table-column>
		    <el-table-column
		      fixed="right"
		      label="操作"
		      width="320"
		      class="caozuo">
		      <template slot-scope="scope">
		        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
		        <el-button type="text" size="small">编辑</el-button>
		         <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text"size="small">
        		 	 移除
       			 </el-button>
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
      deleteRow(index, rows) {
        rows.splice(index, 1);
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
          date1: '2017-11-11',
          name1: '需求主题--',
          date2: '2018-11-11'
        }, {
          date1: '2017-11-11',
          name1: '需求主题--',
          date2: '2018-11-11'
        }, {
          date1: '2017-11-11',
          name1: '需求主题--',
          date2: '2018-11-11'
        }, {
          date1: '2017-11-11',
          name1: '需求主题--',
          date2: '2018-11-11'
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