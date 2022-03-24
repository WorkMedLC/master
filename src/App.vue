<template>
	<div id="app">
		<Header />
		<router-view></router-view>
	</div>
</template>

<script>
import Header from './components/header/Header.vue';

export default {
	name: 'app',
	components: {
		Header,
	},
};
</script>

<style>
#app {
}
</style>
