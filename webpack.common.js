const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

const fs = require('fs')
const analyticsCode = fs.readFileSync(
  path.resolve(__dirname, './src/partials/analytics.html'),
  'utf8'
)

const StaticSourceData = require('static-source-data')

module.exports = {
  entry: {
    index: './src/index.js'
    // page: './src/page.jsx'
  },
  // output: {
  //   filename: '[name].js',
  //   path: path.resolve(__dirname, 'docs')
  //   // publicPath: '/pleaxy/'
  //   // clean: true
  // },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs'),
    publicPath: '/'
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
      chunks: ['index'],
      analytics: analyticsCode
    }),

    // Инвентарь
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/inventory.html',
      filename: './inventory.html',
      chunks: ['index'],
      analytics: analyticsCode
    }),

    // Секс-игрушки
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/sextoys.html',
      filename: './sextoys.html',
      chunks: ['index'],
      analytics: analyticsCode
    }),

    // Вибратор кролик
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/sextoy_rabbit_vibrator.html',
      filename: './pages/sextoy_rabbit_vibrator.html',
      chunks: ['index'],
      analytics: analyticsCode
    }),

    // Вибропуля
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/sextoy_vibro_bullet.html',
      filename: './pages/sextoy_vibro_bullet.html',
      chunks: ['index'],
      analytics: analyticsCode
    }),

    // Фаллоимитатор
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/sextoy_dildo.html',
      filename: './pages/sextoy_dildo.html',
      chunks: ['index'],
      analytics: analyticsCode
    }),

    // Вибратор
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/sextoy_vibrator.html',
      filename: './pages/sextoy_vibrator.html',
      chunks: ['index'],
      analytics: analyticsCode
    }),

    // Клиторальный стимулятор
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/sextoy_clitoral_ctimulator.html',
      filename: './pages/sextoy_clitoral_ctimulator.html',
      chunks: ['index'],
      analytics: analyticsCode
    }),

    // Анальная пробка
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/sextoy_butt_plug.html',
      filename: './pages/sextoy_butt_plug.html',
      chunks: ['index'],
      analytics: analyticsCode
    }),

    // Эрекционное кольцо
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/sextoy_erection_ring.html',
      filename: './pages/sextoy_erection_ring.html',
      chunks: ['index'],
      analytics: analyticsCode
    }),

    // Анальные шарики
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/sextoy_anal_beads.html',
      filename: './pages/sextoy_anal_beads.html',
      chunks: ['index'],
      analytics: analyticsCode
    }),

    // Мастурбатор
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/sextoy_masturbator.html',
      filename: './pages/sextoy_masturbator.html',
      chunks: ['index'],
      analytics: analyticsCode
    }),

    // Вибратор ванд
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/sextoy_vibrator_wand.html',
      filename: './pages/sextoy_vibrator_wand.html',
      chunks: ['index'],
      analytics: analyticsCode
    }),

    // Массажер простаты
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/sextoy_anal_stimulator.html',
      filename: './pages/sextoy_anal_stimulator.html',
      chunks: ['index'],
      analytics: analyticsCode
    }),

    // Виброяйцо
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/sextoy_vibro_egg.html',
      filename: './pages/sextoy_vibro_egg.html',
      chunks: ['index'],
      analytics: analyticsCode
    }),

    // Атрибуты
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/attributes.html',
      filename: './attributes.html',
      chunks: ['index'],
      analytics: analyticsCode
    }),

    // Практики
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/practices.html',
      filename: './practices.html',
      chunks: ['index'],
      analytics: analyticsCode
    }),

    // Анилингус
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/practice_analingus.html',
      filename: './pages/practice_analingus.html',
      chunks: ['index'],
      analytics: analyticsCode
    }),

    // Кунилингус
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/practice_kunilingus.html',
      filename: './pages/practice_kunilingus.html',
      chunks: ['index'],
      analytics: analyticsCode
    }),

    // Минет
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/practice_minet.html',
      filename: './pages/practice_minet.html',
      chunks: ['index'],
      analytics: analyticsCode
    }),

    // Ролевые игры
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/practice_role_games.html',
      filename: './pages/practice_role_games.html',
      chunks: ['index'],
      analytics: analyticsCode
    }),

    // Петтинг
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/practice_petting.html',
      filename: './pages/practice_petting.html',
      chunks: ['index'],
      analytics: analyticsCode
    }),

    // Ваксплей
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/practice_waxplay.html',
      filename: './pages/practice_waxplay.html',
      chunks: ['index'],
      analytics: analyticsCode
    }),

    // Фингеринг
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/practice_fingering.html',
      filename: './pages/practice_fingering.html',
      chunks: ['index'],
      analytics: analyticsCode
    }),

    // Тантрический секс
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/practice_tantra_sex.html',
      filename: './pages/practice_tantra_sex.html',
      chunks: ['index'],
      analytics: analyticsCode
    }),

    // Шибари
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/practice_shibary.html',
      filename: './pages/practice_shibary.html',
      chunks: ['index'],
      analytics: analyticsCode
    }),

    // Статьи
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles.html',
      filename: './articles.html',
      chunks: ['index'],
      analytics: analyticsCode
    }),

    // Уход за игрушками
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/article_sextoys_care.html',
      filename: './pages/article_sextoys_care.html',
      chunks: ['index'],
      analytics: analyticsCode
    }),

    // Лубриканты
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/article_lubricants.html',
      filename: './pages/article_lubricants.html',
      chunks: ['index'],
      analytics: analyticsCode
    }),

    // Презервативы
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/article_condoms.html',
      filename: './pages/article_condoms.html',
      chunks: ['index'],
      analytics: analyticsCode
    }),

    // Покупка игрушек
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/article_buying_sex_toys.html',
      filename: './pages/article_buying_sex_toys.html',
      chunks: ['index'],
      analytics: analyticsCode
    }),

    // Мастурбация и желания
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/article_masturbation_desires.html',
      filename: './pages/article_masturbation_desires.html',
      chunks: ['index'],
      analytics: analyticsCode
    }),

    // Контрацепция
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/article_contraception.html',
      filename: './pages/article_contraception.html',
      chunks: ['index'],
      analytics: analyticsCode
    }),

    // Internal pages
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/page.html',
      filename: './pages/page.html',
      chunks: ['page']
    }),

    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'), // путь к файлу с кодом Метрики
        location: 'head', // плагин сам найдет тег <head>
        priority: 'high', // и вставит код в самое начало <head>
        template_filename: '*' // применит ко всем (*) HTML страницам автоматически!
      }
    ]),

    // Partials
    // new HtmlWebpackPartialsPlugin([
    //   {
    //     path: path.join(__dirname, './src/partials/analytics.html'),
    //     location: 'analytics',
    //     template_filename: '*',
    //     priority: 'replace'
    //   }
    // ]),

    new CopyPlugin({
      patterns: [
        { from: 'public', to: '.' } // Копирует файл CNAME из папки public прямо в корень папки docs
      ]
    }),

    new HtmlWebpackPlugin({
      template: './src/yandex_462e3273abdb6b05.html', // Имя твоего файла от Яндекса
      filename: 'yandex_462e3273abdb6b05.html', // Имя, которое будет на сервере
      inject: false // Важно: чтобы Webpack не вставлял скрипты в этот файл
    })

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
