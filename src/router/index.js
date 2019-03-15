import Vue from 'vue'
import Router from 'vue-router'
import table1 from '@/tables_page/table1'
import table2 from '@/tables_page/table2'
import table3 from '@/tables_page/table3'
import table4 from '@/tables_page/table4'
import buttons from '@/buttons/buttons'
import forms from '@/forms/forms'
import  imgupload from '@/uploadlist/img-upload'
import fileupload from '@/uploadlist/file-upload'
import shuttleBox from '@/shuttleBox/shuttleBox'
import score from '@/score/score' 
import trees from '@/trees/tree'
import menus1 from '@/menus/navmenu'
import menus2 from '@/menus/menus2'
import menus3 from '@/menus/menus3'
import notables from '@/notables/notables' 

const parent = { template: '<router-view></router-view>' }

Vue.use(Router)

export default new Router({
	linkActiveClass:"active",
  routes: [
		 {
			 path:'/',
			 name:'hello',
			 component:parent,
			 redirect:'/notables' 
		 },
		 {
			 path:'/menus',
			 name:'menus',
			 component:parent,
			 children:[
				 {
					 path:'menus1',
					 name:'menus1',
					 component:menus1
				 },
				 {
					 path:'menus2',
					 name:'menus2',
					 component:menus2
				 },
				 {
					 path:'menus3',
					 name:'menus3',
					 component:menus3
				 }
			 ]
		 },
		 {
			 path:'/notables',
			 name:'notables',
			 component:notables
		 },
     { path: '/tables',
		   name: 'tables',
		   component: parent,
		   children:[
			 {
				 path:'table1',
				 name:'table1',
				 component:table1
			 },
			 {
				 path:'table2/:obj',
				 name:'table2',
				 component:table2
			 },
			 { path: 'table3', 
			 	component: table3 ,
			 	name:'table3'
			 },
			 { path: 'table4',
			 	component: table4 ,
			 	name:'table4'
			 }]
		 },
		{ path: '/buttons',
		  name:'buttons',
		  component: buttons
		  
	  },
		{ path: '/forms',
		  name:'forms',
		  component: forms
		},
		{ path:'/uploadlist',
		  name:'uploadlist',
		  component:parent,
			children: [{
				path:'imgupload',
				name:'imgupload',
				component:imgupload
			},{
				path:'fileupload',
				name:'fileupload',
				component:fileupload
			}]
		},
		{
			path:'/shuttleBox',
			name:'shuttleBox',
			component:shuttleBox
		},
		{
			path:'/score',
			name:'score',
			component:score
		},
		{
			path:'/trees',
			name:'trees',
			component:trees
		}
  ]
})
