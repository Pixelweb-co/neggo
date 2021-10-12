var config = {
    host: "https://cdnjs.cloudflare.com/ajax/libs",
	cdn: {
		js: "https://cdnjs.cloudflare.com/ajax/libs",
		css: "https://cdnjs.cloudflare.com/ajax/libs"
	}
}
var webpackConfig = {
  entry: 'index.js',
  output: {
    path: 'dist',
    filename: 'index_bundle.js'
  },
  plugins: [
        new HtmlWebpackCdnPlugin(config),
        new HtmlWebpackPlugin()
  ]
};