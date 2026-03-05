const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

const StaticSourceData = require('static-source-data')

module.exports = {
  entry: {
    index: './src/index.js'
    // page: './src/page.jsx'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs'),
    publicPath: '/pleaxy/'
    // clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),

    // Главная
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      // template: './src/index.ejs',
      template: './src/index.html',
      filename: './index.html',
      chunks: ['index']
    }),

    // Инвентарь
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/inventory.html',
      filename: './inventory.html',
      chunks: ['index']
    }),

    // Секс-игрушки
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/sextoys.html',
      filename: './sextoys.html',
      chunks: ['index']
    }),

    // Вибратор кролик
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/sextoy_rabbit_vibrator.html',
      filename: './pages/sextoy_rabbit_vibrator.html',
      chunks: ['index']
    }),

    // Атрибуты
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/attributes.html',
      filename: './attributes.html',
      chunks: ['index']
    }),

    // Практики
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/practices.html',
      filename: './practices.html',
      chunks: ['index']
    }),

    // Анилингус
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/practice_analingus.html',
      filename: './pages/practice_analingus.html',
      chunks: ['index']
    }),

    // Статьи
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles.html',
      filename: './articles.html',
      chunks: ['index']
    }),

    // Уход за игрушками
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/article_sextoys_care.html',
      filename: './pages/article_sextoys_care.html',
      chunks: ['index']
    }),

    // Internal pages
    // new HtmlWebpackPlugin({
    //   hash: true,
    //   scriptLoading: 'blocking',
    //   template: './src/pages/page.html',
    //   filename: './pages/page.html',
    //   chunks: ['page']
    // }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ])

    // new StaticSourceData({
    //   indexData: {
    //     url: 'https://api.airtable.com/v0/appwcTAYHNcwgwLzW/Homepage',
    //     headers: {
    //       Authorization:
    //         'Bearer patke89sQo0h97AJa.6cb932e6f78a5b51b191b0250616503eefd7461629dd77f35561873bd5fe27c6'
    //     }
    //   }
    // })
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  },
  resolve: {
    fallback: {
      stream: require.resolve('stream-browserify')
    }
  }
}
