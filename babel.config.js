module.exports = {
	presets: [
		'@vue/cli-plugin-babel/preset',
		[
			'@babel/preset-env',
			{
				useBuiltIns: 'entry',
				corejs: '3.21.1',
			},
		],
	],
	plugins: [
		[
			'component',
			{
				libraryName: 'element-ui',
				styleLibraryName: 'theme-chalk',
			},
		],
	],
};
