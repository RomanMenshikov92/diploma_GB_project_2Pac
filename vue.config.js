const { defineConfig } = require("@vue/cli-service");
// const CopyPlugin = require("copy-webpack-plugin");
// const path = require("path");
module.exports = defineConfig({
  devServer: {
    port: 1111,
  },
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "2Pac";
      return args;
    });

    config.plugin("html").tap((args) => {
      args[0].favicon = "src/assets/favicon/favicon.ico";
      return args;
    });

    config.module
      .rule("pug")
      .test(/\.pug$/)
      .use("pug-plain-loader")
      .loader("pug-plain-loader");

    config.module
      .rule("vtt")
      .test(/\.vtt$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "assets/video/[name].[ext]",
      })
      .end();

    config.plugin("define").tap((args) => {
      args[0]["process.env"]["VUE_PROD_HYDRATION_MISMATCH_DETAILS"] = true;
      return args;
    });

    // config
    //   .plugin("copy")
    //   .use(CopyPlugin, [
    //     {
    //       patterns: [
    //         {
    //           from: path.resolve(__dirname, "src/data/json"),
    //           to: path.resolve(__dirname, "public/data"),
    //         },
    //       ],
    //     },
    //   ])
    //   .tap((options) => {
    //     console.log("CopyPlugin options:", options);
    //     return options;
    //   });
  },
});
