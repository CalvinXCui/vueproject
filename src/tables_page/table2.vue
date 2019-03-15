<template>
	<div class="table2">
	     <el-table :data="tableData4" style="width: 60%;margin: auto;" max-height="250">
						<el-table-column fixed prop="date" sortable label="日期" width="150">
						</el-table-column>
						<el-table-column prop="name" label="姓名" width="120">
						</el-table-column>
						<el-table-column prop="province" label="省份" width="120">
						</el-table-column>
						<el-table-column prop="city" label="市区" width="120">
						</el-table-column>
						<el-table-column prop="address" label="地址" width="300">
						</el-table-column>
						<el-table-column prop="zip" label="邮编" width="120">
						</el-table-column>
						<el-table-column fixed="right" label="操作" width="120">
						<template slot-scope="scope">
							<el-button @click.native.prevent="deleteRow(scope.$index, tableData4)"
								type="text" size="small">
								移除
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
			tableData4: [{
			  date: '2016-05-03',
			  name: '王小虎',
			  province: '北京',
			  city: '西城区',
			  address: '北京市西城区天宁寺小区10号楼',
			  zip: 210000
			}, {
			  date: '2016-05-02',
			  name: '张天逸',
			  province: '上海',
			  city: '普陀区',
			  address: '上海市普陀区金沙江路 1518 弄',
			  zip: 200333
			}, {
			  date: '2016-05-04',
			  name: '白菲菲',
			  province: '西安',
			  city: '雁塔区',
			  address: '西安市雁塔区北大街38号',
			  zip: 326541
			}, {
			  date: '2016-05-01',
			  name: '贾冰',
			  province: '山东',
			  city: '济南',
			  address: '山东省济南市高新区英才路2号',
			  zip: 231000
			}, {
			  date: '2016-05-08',
			  name: '赵霞',
			  province: '山西',
			  city: '太原',
			  address: '山西省太原市新城区侬㐇路10号',
			  zip: 265331
			}]
		  }
		},
		methods: {
			deleteRow(index, rows) {
				rows.splice(index, 1);
			}
		}
	}
</script>

<style>

</style>
