const markdownIt = require("markdown-it");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");
const { DateTime } = require("luxon");
const { feedPlugin } = require("@11ty/eleventy-plugin-rss");
const site = require("./src/_data/site");

module.exports = function(eleventyConfig) {
  // Ensure Markdown is properly processed
  eleventyConfig.setLibrary("md", markdownIt({ html: true }));

  // Define essays collection
  eleventyConfig.addCollection("essays", function(collectionApi) {
    return collectionApi.getFilteredByTag("essays");
  });

  // Sliced collection for homepage
  eleventyConfig.addCollection("latestEssays", function(collectionApi) {
    return collectionApi.getFilteredByTag("essays").reverse().slice(0, 2);
  });

  // One featured post
  eleventyConfig.addCollection("featuredEssay", function(collectionApi) {
    return collectionApi.getFilteredByTag("featured")[0]; // take the first one
  });

  // Define series
  eleventyConfig.addCollection("series", function(collectionApi) {
    const essays = collectionApi.getFilteredByTag("essays");

    const seriesMap = {};

    essays.forEach(post => {
      const s = post.data.series;
      if (!s) return;

      if (!seriesMap[s]) {
        seriesMap[s] = [];
      }
      seriesMap[s].push(post);
    });

    // Sort by date
    for (const s in seriesMap) {
      seriesMap[s].sort((a, b) => a.date - b.date);
    }

    return seriesMap;
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

  eleventyConfig.addPlugin(feedPlugin, {
    type: "rss",
    outputPath: "/feed.xml",
    collection: {
      name: "essays",
    },
    metadata: {
      language: "en",
      title: site.title,
      subtitle: site.description,
      base: site.url,
      author: {
        name: site.author,
      }
    }
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
