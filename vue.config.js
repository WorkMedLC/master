module.exports = {
	css: {
		loaderOptions: {
			scss: {
				prependData: `
                    @import "~@/assets/scss/reset.scss";
                    @import "~@/assets/scss/fonts.scss";
                `,
			},
		},
	},
};
