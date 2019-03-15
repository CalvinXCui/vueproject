<template>
	<div class="table3">
		<el-table :data="userList.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
		style="width: 60%;margin: auto;">
		<el-table-column label="姓名" prop="name">
		</el-table-column>
		<el-table-column label="部门" prop="derpa">
		</el-table-column>
		<el-table-column label="住址" prop="addr">
		</el-table-column>
		<el-table-column align="right">
		  <template slot="header" slot-scope="scope">
			<el-input v-model="search" size="mini" placeholder="输入姓名查询"/>
		  </template>
		  <template slot-scope="scope">
			<router-link  to="/forms">
				<el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">
					<i class="el-icon-document" style="color: #FF00FF"></i>编辑
				</el-button>
			</router-link>
			<el-button size="mini" type="danger" @click="handleDelete(scope.$index, userList)">
				  <i class="el-icon-delete"></i>删除
			</el-button>
		  </template>
		</el-table-column>
	  </el-table>
	</div>
</template>

<script>
	export default {
		data() {
		  return {
			userList:[
			{id:'1',name:'晓晓',age:'21',sex:'女',derpa:"工程组",addr:"西城区",ismat:"否"},
			{id:'2',name:'涛涛',age:'22',sex:'男',derpa:"工程组",addr:"东城区",ismat:"是"},
			{id:'3',name:'明欢',age:'24',sex:'女',derpa:"工程组",addr:"朝阳区",ismat:"否"},
			{id:'4',name:'欢欢',age:'25',sex:'女',derpa:"测试组",addr:"昌平区",ismat:"否"},
			{id:'5',name:'肖刚',age:'23',sex:'男',derpa:"UI组",addr:"海淀区",ismat:"是"}
			],
			search: ''
		  }
		},
		methods: {
		  handleEdit(index, row) {
			console.log(index, row);
		  },
		  handleDelete(index, rows) {
			rows.splice(index, 1);
		  }
		}
	}
</script>

<style>

</style>
