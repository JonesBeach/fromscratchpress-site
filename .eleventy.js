const markdownIt = require("markdown-it");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Ensure Markdown is properly processed
  eleventyConfig.setLibrary("md", markdownIt({ html: true }));

  // Define essays collection
  eleventyConfig.addCollection("essays", function(collectionApi) {
    return collectionApi.getFilteredByTag("essays").reverse();
  });

  // Sliced collection for homepage
  eleventyConfig.addCollection("latestEssays", function(collectionApi) {
    return collectionApi.getFilteredByTag("essays").reverse().slice(0, 4);
  });

  // Add sitemap plugin
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://fromscratchpress.com",
    },
  });

  // Copy robots.txt for SEO
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  // Copy static files (CSS)
  eleventyConfig.addPassthroughCopy("src/css");

  // Pass through favicon and Open Graph image
  eleventyConfig.addPassthroughCopy("src/favicon-512x512.png");
  eleventyConfig.addPassthroughCopy("src/og_banner_image.png");

  // Custom date filter using Luxon
  eleventyConfig.addFilter("essayDateFormat", (dateObj, format = "MMM dd, yyyy") => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(format);
  });

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
