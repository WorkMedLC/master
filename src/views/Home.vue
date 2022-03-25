<template>
	<div class="home">
		<Hero />

		<article>
			<el-container class="section-1">
				<el-header><h1>Finding Great Care</h1></el-header>
				<el-main>
					<p>
						Finding great occupational medical care isn't difficult. Just look for a staff with experience.
						A doctor who talks with your employees, not at them. A doctor who listens and consistently
						researches the latest, proven methods to provide the most effective care. A practice with the
						latest training and technology. Choosing the right occupational medical care is easy. In fact,
						the right choice is right on your screen.
					</p>

					<p>
						Dr. Benito Gallardo and the staff of WorkMed Occupational Health in Las Cruces offers a variety
						of work medicine services so you can ensure you’re healthy and get back to work as soon as
						possible. We accept patients who are sent to us through workers’ compensation claims, to receive
						physicals that meet OSHA requirements, and those looking to find work in an industry that
						requires pre-employment drug testing and physicals. Our specialist, Dr. Gallardo, and our nurse
						practitioner Wanda Poncik have extensive backgrounds in occupational medicine and can help you
						so you can get back to work ASAP.
					</p></el-main
				>
			</el-container>
			<el-container class="section-2">
				<el-row class="w-100" justify="space-between" align="middle" type="flex">
					<el-col :span="18">
						<h3>The Working Choice For Occupational Medical Care.</h3>
					</el-col>
					<el-col :span="6">
						<el-button type="primary" size="medium" @click="call">Call (575)521-1919</el-button>
					</el-col>
				</el-row>
			</el-container>
			<el-container class="section-3">
				<el-main>
					<el-row :gutter="16" class="w-100">
						<el-col :span="18">
							<el-row :gutter="16">
								<el-col :span="12" v-for="(o, index) in 2" :key="index">
									<el-card :body-style="{padding: '0px'}">
										<img
											src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
											class="image"
										/>
										<div style="padding: 14px">
											<span>Yummy hamburger</span>
											<div class="bottom clearfix">
												<p class="time">Something</p>
												<el-button type="text">Operating</el-button>
											</div>
										</div>
									</el-card>
								</el-col>
							</el-row>
						</el-col>
						<el-col :span="6"> some text </el-col>
					</el-row>
				</el-main>
			</el-container>
		</article>
	</div>
</template>

<script>
import Hero from '../components/home/Hero.vue';
export default {
	name: 'Home',
	components: {Hero},
	methods: {
		call() {
			window.open('tel:5755211919', '_self');
		},
	},
};
</script>
<style lang="scss">
.home {
	.section-1 {
	}
	.section-2 {
		display: flex;
		margin-top: 50px;
		border-top: 1px solid #cccccc;
		border-bottom: 1px solid #cccccc;
		padding: 20px 0;
		.el-col:last-of-type {
			text-align: right;
			.el-button {
				font-size: 20px;
			}
		}
	}
}
</style>
