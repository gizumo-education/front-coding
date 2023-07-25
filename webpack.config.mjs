import path from 'path';
import { fileURLToPath } from 'url';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const src = path.resolve(__dirname, './src');
const dist = path.resolve(__dirname, './public/');

const nodeEnv = process.env.NODE_ENV || 'development';
const isDev = nodeEnv === 'development';

export default {
  mode: nodeEnv,
  devtool: isDev ? 'source-map' : 'eval',
  entry: {
    app: [
      `${src}/js/app.js`,
      `${src}/css/style.scss`,
    ]
  },
  output: {
    publicPath: `/`,
    path: `${dist}/`,
    filename: `js/[name].bundle.js`
  },
  module: {
    rules: [
      {
        test: /\.woff$/,
        use: ['file-loader'],
      },
      {
        test: /\.eot$/,
        use: ['file-loader'],
      },
      {
        test: /\.ttf$/,
        use: ['file-loader'],
      },
      {
        // node_module内のcss
        test: /node_modules\/(.+)\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: { url: false },
          },
        ],
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true }
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
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: (url, resourcePath, context) => {
            const relativePath = path.relative(context, resourcePath);
            const relativePathArray = relativePath.split(/\/|\\/)
            relativePathArray.splice(0, 1);
            return relativePathArray.join('/');
          },
        },
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `css/[name].css`
    }),
    new HtmlWebpackPlugin({
      template: `${src}/index.html`,
      filename: `index.html`
    })
  ],
  devServer: {
    open: true,
    static: {
      directory: dist,
    },
    hot: true,
  },
};