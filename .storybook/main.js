const glob = require("glob");

const getStoriesPaths = () => {
  return [
    ".slicemachine/assets/**/*.stories.@(js|jsx|ts|tsx|svelte)",
    "customtypes/**/*.stories.@(js|jsx|ts|tsx|svelte)",
  ].reduce((acc, p) => (glob.sync(p).length ? [...acc, `../${p}`] : acc), []);
};

module.exports = {
  addons: [   
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },],
  stories: [...getStoriesPaths(), "../styles/globals.css"]
}