<template>
	<div>
		<Hero />
		<main class="home">Home</main>
	</div>
</template>

<script>
import Hero from '../components/home/Hero.vue';
export default {
	name: 'Home',
	components: {Hero},
};
</script>
