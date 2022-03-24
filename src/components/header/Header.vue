<template>
	<header id="header">
		<div class="logo">
			<el-image src="/assets/images/logo-icon.png" fit="fit"></el-image>
			<h2>WorkMed Inc.</h2>
		</div>
		<Nav />
	</header>
</template>

<script>
import Nav from './Nav.vue';
export default {
	name: 'Header',
	components: {
		Nav,
	},
};
</script>

<style lang="scss">
#header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: 0px 2px 2px rgb(0 0 0 / 20%);
	.logo {
		display: flex;
		align-items: center;
		padding: 0 1rem;
		.el-image {
			max-width: 50px;
		}
		h2 {
			margin: 0;
			padding-left: 0.5rem;
		}
	}
}
</style>
