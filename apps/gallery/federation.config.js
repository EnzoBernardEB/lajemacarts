const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'gallery',

  exposes: {
    './Routes': './apps/gallery/src/app/app.routes.ts'
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto'
    })
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    'http',
    'fs',
    'path',
    'url',
    'util',
    'stream',
    'crypto',
    'perf_hooks',
    'class-validator'
  ]

});
