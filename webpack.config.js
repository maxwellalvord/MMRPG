const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',
  devServer: {               
    contentBase: './dist'    
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'MMRPG',
      template: './src/index.html',
      inject: 'body'
    }),
    // new MiniCSSExtractPlugin(),
    // ...['room', 'room2'].map((event) => {
    //   return new HtmlWebpackPlugin({
    //     template: `./src/${event}/index.html`,
    //     filename: `${event}.htm`,
    //   })
    // })
    new HtmlWebpackPlugin({
      template: './src/room.html',
      filename: 'room.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/room2.html',
      filename: 'room2.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(gif|png|avif|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/'
            }
          }
        ]
      },
      {
        test:/\.html$/,
        use: [
          'html-loader'
        ],

      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ]
  }
};