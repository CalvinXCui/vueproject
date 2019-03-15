<template>
  <div class="hello">
		 <el-table :data="userList" border style="width: 60%;margin: auto;">
			<el-table-column type="expand">
				<template slot-scope="props">
					<el-form label-position="left" inline class="demo-table-expand">
						<el-form-item label="员工编号">
							<span>{{ props.row.id }}</span>
						</el-form-item>
						<el-form-item label="员工姓名">
							<span>{{ props.row.name }}</span>
						</el-form-item>
						<el-form-item label="员工性别">
							<span>{{ props.row.sex }}</span>
						</el-form-item>
						<el-form-item label="员工年龄" sortable>
							<span>{{ props.row.age }}</span>
						</el-form-item>
						<el-form-item label="所属部门">
							<span>{{ props.row.derpa }}</span>
						</el-form-item>
						<el-form-item label="住址">
							<span>{{ props.row.addr }}</span>
						</el-form-item>
						<el-form-item label="是否婚配">
							<span>{{ props.row.ismat }}</span>
						</el-form-item>
					</el-form>
				</template>
			</el-table-column>
			<el-table-column
				label="姓名"
				prop="name">
			</el-table-column>
			<el-table-column
				label="所属部门"
				prop="derpa">
			</el-table-column>
			<el-table-column
				label="年龄"
				prop="age">
			</el-table-column>
		</el-table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
     userList:[
     	{id:'1',name:'晓晓',age:'21',sex:'女',derpa:"工程组",addr:"西城区",ismat:"否"},
     	{id:'2',name:'涛涛',age:'22',sex:'男',derpa:"工程组",addr:"东城区",ismat:"是"},
     	{id:'3',name:'明欢',age:'24',sex:'女',derpa:"工程组",addr:"朝阳区",ismat:"否"},
     	{id:'4',name:'欢欢',age:'25',sex:'女',derpa:"测试组",addr:"昌平区",ismat:"否"},
     	{id:'5',name:'肖刚',age:'23',sex:'男',derpa:"UI组",addr:"海淀区",ismat:"是"}
     ]
    }
  }
}
</script>

<!--  scoped作用域 是否只作用于此组件当中 -->
<style scoped>
 .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
