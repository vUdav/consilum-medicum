module.exports = {
	// Path settings
	pathTo: {
			Src: {
				Styles: 'src/less/**/*.less',
				MainStyleFile: 'src/less/style.less',
				Jade: 'src/jade/**/[^_]*.jade',
				Images: ['src/img/**/*.*', '!src/img/sprite/*.*'],
				PngSprite: 'src/img/sprite/**/*.png',
				GHPages: 'build/**/*',
				JS: 'src/js/**/*.*',
				JSVendor: 'vendor/**/*.*',
				BowerJSVendor: 'src/js/vendor/',
				JSCustom: ['custom/**/*.js', 'main.js', '!custom/toHead/**/*.js'],
				CSSVendor: 'src/less/vendor/',
				Txt: ['src/humans.txt', 'src/robots.txt', 'src/.htaccess','src/CHANGELOG.md','src/README.md'],
				Fonts: 'src/fonts/**/*',
				Svg: ['src/svg/**/*.*', '!src/svg/sprite/*.*'],
				SvgSprite: 'src/svg/sprite/**/*.svg'
			},
			Build: {
				Styles: 'dist/css',
				Html: 'dist/',
				Images: 'dist/img',
				PngSprite: 'dist/img',
				PngSpriteCSS: 'src/less/blocks',
				JSVendor: 'dist/js',
				JSCustom: 'dist/js/custom',
				Txt: 'dist/',
				Clean: ['dist/**/*', '!dist/.gitignore'],
				Fonts: 'dist/fonts',
				Svg: 'dist/svg',
				SvgSprite: 'dist/img',
				SvgSpriteNoSvg: 'dist/svg/sprite/svg-sprite.png'
			},
			Watch: {
				Jade: 'src/jade/**/*.jade'
			}
		},

	// GitHub Pages options
	ghpOptions: {
		remoteUrl: "git@github.com:Enkil/amg-webstarter-kit.git"
	},

	// jsDoc3 options for JS documentation generating
	jsDocOptions:"./node_modules/jsdoc/jsdoc.js -c ./jsdoc-conf.json -r",

	// Styledocco options for SCSS documentation generating
	StyledoccoOptions:"./node_modules/styledocco/bin/styledocco -o build/docs/scss -s src/scss src/scss",

	// Browser versions for automatically prefix
	autoprefixerBrowsers: ['last 3 versions', '> 1%', 'Firefox ESR'],

	// BrowserSync local web server settings
	browserSync: {
		server: './dist',
		baseDir: './dist',
		tunnel: true,
		host: 'localhost',
		port: 9000,
		injectChanges: true,
		delay: 300,
		logPrefix: "Spadream"
	}

};
