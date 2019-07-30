const path = require("path");
const TSDocgenPlugin = require("react-docgen-typescript-loader");

module.exports = ({ config }) => {
  //scss loader
   config.module.rules.push({
    test: /\.scss$/,
    loaders: [
      {
        loader: require.resolve("sass-loader"),
        options: {
          includePaths: [path.resolve(__dirname, "../src")]
        }
      }
    ]
  });

  //font loader
  config.module.rules.push({
    test: /\.(otf)$/,
    include: path.resolve(__dirname, "../assets/fonts"),
    
    use: [
      {
        loader: require.resolve('file-loader'),
        options: {
          outputPath: 'fonts',
          name: '[name].[ext]',
        }
      }
    ],
  })

  //Component loader
  config.module.rules.unshift({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, "../src"),
    use: [
      require.resolve("react-docgen-typescript-loader"),
      require.resolve("babel-loader"),
    ],
  });

  //Story source loader
  config.module.rules.unshift({
    test: /\.story\.tsx?$/,
    loaders: [
      {
        loader: require.resolve("@storybook/addon-storysource/loader"),
        options: { parser: "typescript" }
      },
    ],
    enforce: "pre",
  });

  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};