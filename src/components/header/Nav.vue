<template>
	<nav id="nav">
		<el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" :router="true">
			<template v-for="(link, i) in $router.options.routes">
				<el-submenu v-if="link.kids && link.kids.length" v-bind:key="`subnav-${i}`" :index="`subnav-${i}`">
					<template slot="title">
						<router-link :to="link.path" custom v-slot="{href, navigate, isActive}"
							><span :active="isActive" :href="href" @click="navigate">{{ link.name }}</span></router-link
						>
					</template>
					<el-menu-item v-for="(child, j) in link.kids" :index="child.path" :key="`subnav-child-link${j}`">{{
						child.name
					}}</el-menu-item>
				</el-submenu>
				<el-menu-item v-else-if="link.name" v-bind:key="`nav-${i}`" :index="link.path">{{
					link.name
				}}</el-menu-item>
			</template>
		</el-menu>
	</nav>
</template>

<script>
export default {
	name: 'Nav',
};
</script>

<style lang="scss">
#nav {
	ul {
		border-bottom: 0;
	}
	.el-menu-item,
	.el-submenu__title {
		text-decoration: none;
		text-transform: uppercase;
		color: #666666;
		&:hover {
			color: #ff3f00;
		}
	}
	.mainlink {
		.submenu {
			display: none;
		}
	}
}
</style>
