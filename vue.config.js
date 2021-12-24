module.exports = {
  transpileDependencies: ['vuetify', 'vuex-module-decorators'],
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.txt$/i,
          use: 'raw-loader',
        },
      ],
    },
  },
};
