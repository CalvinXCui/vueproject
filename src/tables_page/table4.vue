<template>
	<div class="hello">
        <el-table :data="userList" border style="width: 60%;margin: auto;">
        <el-table-column fixed prop="id"  label="编号" width="150">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="prov" label="省份" width="120">
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="120" sortable>
        </el-table-column>
        <el-table-column prop="derpa" label="部门" width="300">
        </el-table-column>
        <el-table-column prop="sex" label="性别" width="120">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
        	<template slot-scope="scope">
        	<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        	<el-button type="text" size="small">编辑</el-button>
        	</template>
        </el-table-column>
        </el-table>    
	</div>
</template>

<script>
	export default {
		name:'UsersTable',
		data() {
			return {
				userList:[
					{id:'1',name:'晓晓',age:'21',sex:'女',derpa:"工程组",addr:"西城区",ismat:"否",prov:"陕西"},
					{id:'2',name:'涛涛',age:'22',sex:'男',derpa:"工程组",addr:"东城区",ismat:"是",prov:"河北"},
					{id:'3',name:'明欢',age:'24',sex:'女',derpa:"工程组",addr:"朝阳区",ismat:"否",prov:"山东"},
					{id:'4',name:'欢欢',age:'25',sex:'女',derpa:"测试组",addr:"昌平区",ismat:"否",prov:"河北"},
					{id:'5',name:'肖刚',age:'23',sex:'男',derpa:"UI组",addr:"海淀区",ismat:"是",prov:"北京"}
				]
			}
		},
		methods: {
		  handleClick(row) {
			 console.log(row);
		  }
        }
	}
</script>

<style scoped>

</style>
