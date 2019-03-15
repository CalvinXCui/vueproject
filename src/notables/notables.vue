<template>
	<div class="notables">
		<div class="notables1">
			<template>
			  <el-carousel :interval="5000" arrow="always" height="400px">
				<el-carousel-item v-for="(item,index) in imglist" :key="index">
					<img :src="item"  alt="上海鲜花港 - 郁金香" />
				</el-carousel-item>
			  </el-carousel>
			</template>
		</div>
		<div class="notables2">
			<template>
			  <el-carousel :interval="4000" type="card" height="400px">
				<el-carousel-item v-for="(item,index) in imglist" :key="index">
				  <img :src="item"  alt="上海鲜花港 - 郁金香" />
				</el-carousel-item>
			  </el-carousel>
			</template>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				imglist:['./static/img/bg1.jpg',
								 './static/img/bg3.jpg',
								 './static/img/bg4.jpg',
								 './static/img/bg5.jpg',
								 './static/img/bg6.jpg',
								 './static/img/bg7.jpg']
			};
		}
	}
</script>

<style>
img{
	width: 600px;
	height: 400px;
}
.notables1 {
	width: 600px;
	float: left;
}	
.notables2 {
	margin-left: 100px;
	width: 690px;
	float: right;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
