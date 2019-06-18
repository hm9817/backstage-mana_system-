import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import creattask from '@/components/create_task'
import taskmsg from '@/components/task_msg'
//import addtask from '@/components/child/addtask'
// 信息管理
import sendmsg from '@/components/msg_manager/sendmsg'
import recivemsg from '@/components/msg_manager/recive_msg'
import sendmsgsearch from '@/components/msg_manager/sendmsg_search'
import msgsearch from '@/components/msg_manager/msg_search'
// 项目系统
import probasic from '@/components/project/project_basic'
import proplan from '@/components/project/project_plan'
import proneed from '@/components/project/project_need'
import promodule from '@/components/project/project_module'
import profun from '@/components/project/project_fun'
import proupload from '@/components/project/project_upload'
import procost from '@/components/project/project_cost'

import proadd from '@/components/child/pro_add'
import proaddplan from '@/components/child/pro_addplan'
import proaddneed from '@/components/child/pro_addneed'
import addmodule from '@/components/child/pro_addmodule'
import addfun from '@/components/child/pro_addfun'
import uploadfiles from '@/components/child/pro_uploadfiles'
import addpro from '@/components/child/pro_addpro'

// 客户系统
import cusmsg from '@/components/customer/customer_msg'
// 人员系统
import peomsg from '@/components/people/people_msg'
import duty from '@/components/people/duty_msg'
import peogoing from '@/components/people/people_going'
// 考勤系统
import attendtype from '@/components/attend/attend_type'
import attendmsg from '@/components/attend/attend_msg'

import addpeople from '@/components/addpeople'
import recovemsg from '@/components/recove_msg'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/creattask',
      name: 'creattask',
      component: creattask
    },
    {
      path: '/taskmsg',
      name: 'taskmsg',
      component: taskmsg
    },
    {
      path: '/sendmsg',
      name: 'sendmsg',
      component: sendmsg
    },
    {
      path: '/recivemsg',
      name: 'recivemsg',
      component: recivemsg
    },
    {
      path: '/sendmsgsearch',
      name: 'sendmsgsearch',
      component: sendmsgsearch
    },
    {
      path: '/msgsearch',
      name: 'msgsearch',
      component: msgsearch
    },
    // 项目系统
    {
      path: '/probasic',
      name: 'probasic',
      component: probasic
    },
    {
      path: '/probasic/proadd',
      name: 'proadd',
      component: proadd
    },
    {
      path: '/proplan',
      name: 'proplan',
      component: proplan
    },
    {
      path: '/proplan/proaddplan',
      name: 'proaddplan',
      component: proaddplan
    },
    {
      path: '/proneed',
      name: 'proneed',
      component: proneed
    },
    {
      path: '/proneed/proaddneed',
      name: 'proaddneed',
      component: proaddneed
    },
    {
      path: '/promodule',
      name: 'promodule',
      component: promodule
    },
    {
      path: '/promodule/addmodule',
      name: 'addmodule',
      component: addmodule
    },
    {
      path: '/profun',
      name: 'profun',
      component: profun
    },
    {
      path: '/profun/addfun',
      name: 'addfun',
      component: addfun
    },
    {
      path: '/proupload',
      name: 'proupload',
      component: proupload
    },
    {
      path: '/proupload/uploadfiles',
      name: 'uploadfiles',
      component: uploadfiles
    },
    {
      path: '/procost',
      name: 'procost',
      component: procost
    },
    {
      path: '/procost/addpro',
      name: 'addpro',
      component: addpro
    },
    // 客户系统
    {
      path: '/cusmsg',
      name: 'cusmsg',
      component: cusmsg
    },
    // 人员系统
    {
      path: '/peomsg',
      name: 'peomsg',
      component: peomsg
    },
    {
      path: '/duty',
      name: 'duty',
      component: duty
    },
    {
      path: '/peogoing',
      name: 'peogoing',
      component: peogoing
    },
    // 考勤系统
    {
      path: '/attendtype',
      name: 'attendtype',
      component: attendtype
    },
    {
      path: '/attendmsg',
      name: 'attendmsg',
      component: attendmsg
    },
    {
      path: '/addpeople',
      name: 'addpeople',
      component: addpeople
    },
    {
      path: '/recovemsg',
      name: 'recovemsg',
      component: recovemsg
    }
  ]
})
