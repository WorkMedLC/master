<template>
	<el-carousel id="hero" :interval="5000" height="500px">
		<el-carousel-item v-for="(item, i) in slides" :key="i">
			<el-image :src="item.img" fit="cover"></el-image>
			<h3>{{ item.text }}</h3>
		</el-carousel-item>
	</el-carousel>
</template>

<script>
export default {
	name: 'Hero',
	data() {
		return {
			slides: [
				{img: '/assets/images/slider/slider1.jpg', text: 'Working Together To Get Employees Back To Work.'},
				{img: '/assets/images/slider/slider2.jpg', text: 'The Working Choice For Occupational Medical Care.'},
				{img: '/assets/images/slider/slider3.jpg', text: 'Work-Related Care That Really Works.'},
			],
		};
	},
};
</script>

<style lang="scss">
#hero {
	h3 {
		margin: 0;
		max-width: 700px;
		color: #fff;
		margin: 0 auto;
		position: relative;
		z-index: 100;
		font-size: 100px;
		font-weight: 300;
		text-shadow: 0 -1px 0 rgb(0 0 0 / 20%);
		position: absolute;
		left: 10%;
		top: 20%;
	}
}
</style>
