<template>
	<div class="buttons" style="text-align: center;">
		<div>
			<label>颜色选择器</label><br/>
			<el-color-picker v-model="color3" show-alpha></el-color-picker>
			<el-color-picker v-model="color3" show-alpha :predefine="predefineColors"> </el-color-picker>

		</div>
		<div>
			<label>默认按钮</label>
			<el-row>
			  <el-button>默认按钮</el-button>
			  <el-button type="primary">主要按钮</el-button>
			  <el-button type="success">成功按钮</el-button>
			  <el-button type="info">信息按钮</el-button>
			  <el-button type="warning">警告按钮</el-button>
			  <el-button type="danger">危险按钮</el-button>
			</el-row>
		</div>
		</br>
		
		<div>
			<label>朴素按钮</label>
			<el-row>
			  <el-button plain>朴素按钮</el-button>
			  <el-button type="primary" plain>主要按钮</el-button>
			  <el-button type="success" plain>成功按钮</el-button>
			  <el-button type="info" plain>信息按钮</el-button>
			  <el-button type="warning" plain>警告按钮</el-button>
			  <el-button type="danger" plain>危险按钮</el-button>
			</el-row>
		</div>
		</br>
		
		<div>
			<label>圆角按钮</label>
			<el-row>
			  <el-button round>圆角按钮</el-button>
			  <el-button type="primary" round>主要按钮</el-button>
			  <el-button type="success" round>成功按钮</el-button>
			  <el-button type="info" round>信息按钮</el-button>
			  <el-button type="warning" round>警告按钮</el-button>
			  <el-button type="danger" round>危险按钮</el-button>
			</el-row>
		</div>
		</br>
		
		<div>
			<label>图标展示</label>
			<el-row>
			  <el-button icon="el-icon-search" circle></el-button>
			  <el-button type="primary" icon="el-icon-edit" circle></el-button>
			  <el-button type="success" icon="el-icon-check" circle></el-button>
			  <el-button type="info" icon="el-icon-message" circle></el-button>
			  <el-button type="warning" icon="el-icon-star-off" circle></el-button>
			  <el-button type="danger" icon="el-icon-delete" circle></el-button>
			</el-row>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				color3: 'rgba(19, 206, 102, 0.8)',
				predefineColors: [
          '#ff4500',
          '#ff8c00',
          '#ffd700',
          '#90ee90',
          '#00ced1',
          '#1e90ff',
          '#c71585',
          'rgba(255, 69, 0, 0.68)',
          'rgb(255, 120, 0)',
          'hsv(51, 100, 98)',
          'hsva(120, 40, 94, 0.5)',
          'hsl(181, 100%, 37%)',
          'hsla(209, 100%, 56%, 0.73)',
          '#c7158577'
        ]
			};
		},
		methods:{
			sendcolor(){
				console.log(this.color3)
			}
		}
	}
</script>

<style>

</style>
