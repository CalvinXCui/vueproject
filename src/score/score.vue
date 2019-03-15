<template>
	<div class="score">
		<div class="block">
		  <span class="demonstration">默认不区分颜色</span>
		  <el-rate v-model="value" :max=10></el-rate>
		</div>
		<div class="block">
		  <span class="demonstration">区分颜色</span>
		  <el-rate
			v-model="value" :max=10
			:colors="['#99A9BF', '#F7BA2A', '#FF9900']">
		  </el-rate>
		</div>
		<div class="block">
			<span class="demonstration">文字表达</span>
			<el-rate v-model="value" show-text :max=10> 
			</el-rate>
		</div>
		<div class="block">
		<span class="demonstration">只读表达</span>
		    <el-rate v-model="value1" :max=10 disabled show-score text-color="#ff9900" score-template="{value}">
            </el-rate>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value: null,
				value1:3.7
			};
		}
	}
</script>

<style>
.score{
	text-align: center;
}
</style>
