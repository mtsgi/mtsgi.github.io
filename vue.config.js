module.exports = {
  lintOnSave: true,
  publicPath: "/",
  outputDir: "docs",

  pwa: {
    themeColor: "#92fe9f",
  },

  css: {
    loaderOptions: {
      sass: {
        implementation: require("sass"),
      },
    },
  },

  chainWebpack: (config) => {
    config.resolve.alias.set("vue", "@vue/compat");

    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => {
        return {
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 2,
            },
          },
        };
      });
  },
};
