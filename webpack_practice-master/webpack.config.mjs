import path from 'path';
import { fileURLToPath } from 'url';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const nodeEnv = process.env.NODE_ENV || 'development';
const devMode = nodeEnv === 'development';

console.log('nodeEnv ==> ', nodeEnv);
console.log('devMode ==> ', devMode);

const __filename = fileURLToPath(import.meta.url); // webpack.config.mjsまでの絶対パス
const __dirname = path.dirname(__filename);
// ↑webpack.config.mjsが格納されているwebpack_practiceまでの絶対パス
const src = path.resolve(__dirname, './src'); //srcディレクトリまでの絶対パス
const dist = path.resolve(__dirname, './public');

export default {
  mode: nodeEnv,
  entry: {
    app: `${src}/js/app.js`
  },
  output: {
    filename: 'js/[name].bundle.js', // [name]にはentryのkeyに指定しているapp(app: `${src}/js/app.js`)が入る
    path: `${dist}/`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  ["autoprefixer"],
                ],
              },
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ],
  resolve: {
    extensions: ['.js', '.json']
  },
  devServer: {
    open: true,
    static: {
      directory: dist,
    },
    hot: true,
  },
}
