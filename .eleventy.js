const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  // Ensure Markdown is properly processed
  eleventyConfig.setLibrary("md", markdownIt({ html: true }));

  // Define essays collection
  eleventyConfig.addCollection("essays", function(collectionApi) {
    return collectionApi.getFilteredByTag("essays").reverse();
  });

  // Copy static files (CSS)
  eleventyConfig.addPassthroughCopy("src/css");

  return {
    dir: {
      input: "src",
      output: "_site"
    },
    markdownTemplateEngine: "njk", // Allows Markdown files to use Nunjucks
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk"], // Ensures both Markdown and Nunjucks work
  };
};
