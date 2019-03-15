<template>
  <div id="app">
		<div  class="content">
			<ul class="navigation">
				<li><router-link exact to="/notables">走马灯</router-link></li>
				<li><router-link exact to="/menus/menus1">导航1</router-link></li>
				<li><router-link exact to="/menus/menus2">导航2</router-link></li>
				<li><router-link exact to="/menus/menus3">导航3</router-link></li>
				<li><router-link exact to="/buttons">按钮展示</router-link></li>
				<li><router-link exact to="/score">评分</router-link></li>
				<li><router-link exact to="/trees">树结构</router-link></li>
				<li><router-link exact to="/shuttleBox">穿梭框</router-link></li>
				<li><router-link exact to="/forms">表单展示</router-link></li>
				<li><router-link exact to="/tables/table1">表格一</router-link></li>
				<li><router-link exact :to="{name:'table2',params:{obj:12}}">表格二</router-link></li>
				<li><router-link exact to="/tables/table3">表格三</router-link></li>
				<li><router-link exact to="/tables/table4">表格四</router-link></li>
				<li><router-link exact to="/uploadlist/fileupload">文件上传</router-link></li>
				<li><router-link exact to="/uploadlist/imgupload">图片上传</router-link></li>
			</ul>
    </div><br/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
	//用于自定义指令（局部）
	/* directives:{
		changelicss:{
			inserted:function(el){
				var color = document.getElementsByTagName("a")[0].style.backgroundColor;
			}
		}
	} */
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
*{
	margin: 0px;
	padding: 0px;
}
.active{
	background: linear-gradient(red,yellow);
	border: 1px solid;
	color: #fff;
	border-radius: 5px;
}
a{
	text-decoration: none;
}
.content{
	text-align: center;
	background: #f1f1f1;
	height: 50px;
	line-height: 50px;
	font-size: 24px;
}
ul{
	list-style: none;
}
li{
	float: left;
	margin: 0px 10px;
}
</style>
