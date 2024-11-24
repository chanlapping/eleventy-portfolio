// docs: https://www.11ty.io/docs/config/

module.exports = function (eleventyConfig) {
  // eleventyConfig.addFilter( "myFilter", function() {});

  eleventyConfig.setBrowserSyncConfig({
    // https://www.browsersync.io/docs/options/#option-ghostMode
    ghostMode: false,
  });

  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");
  
  eleventyConfig.addPassthroughCopy("./src/images/");
  
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
