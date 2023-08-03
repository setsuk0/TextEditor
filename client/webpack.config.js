const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      // Add HTML Webpack Plugin to generate HTML file
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        chunks: ['main'],
      }),
      // Add Webpack PWA Manifest Plugin to generate manifest.json
      new WebpackPwaManifest({
        name: 'My Text Editor',
        short_name: 'Text Editor',
        description: 'A simple text editor PWA',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
          {
            src: path.resolve('./src/assets/icon.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
        start_url: '/',
        display: 'standalone',
      }),
      // Add Workbox Inject Manifest Plugin for Service Worker
      new InjectManifest({
        swSrc: './src/sw.js',
      }),
    ],

    module: {
      rules: [
        // Add CSS loader rule
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        // Add Babel loader rule for modern JavaScript support
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
  };
};

