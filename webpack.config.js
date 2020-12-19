const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const mode = process.env.NODE_ENV || 'development'

module.exports = {
  mode,
  entry: {
    'skeleton': './src/skeleton.css' 
  },
  plugins: [new MiniCssExtractPlugin()],
  // resolve: {
  //   extensions: ['.ts', '.tsx', '.js'],
  // },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          mode == 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('autoprefixer')],
              },
            },
          },

        ],
      },
    ],
  },
  // output: {
  //   filename: '[name].js',
  // },
  devServer: {
    host: '0.0.0.0',
    port: 8001,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
}
