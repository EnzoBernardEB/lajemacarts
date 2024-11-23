const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join } = require('path');

module.exports = {
  output: {
    path: join(__dirname, '../../dist/apps/artwork-service')
  },
  externals: {
    'child_process': 'commonjs child_process',
    'fs': 'commonjs fs',
    'path': 'commonjs path',
    'url': 'commonjs url',
    'util': 'commonjs util',
    'stream': 'commonjs stream'
  },
  plugins: [
    new NxAppWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './src/main.ts',
      tsConfig: './tsconfig.app.json',
      assets: ['./src/assets'],
      optimization: false,
      outputHashing: 'none'
    })
  ]
};
