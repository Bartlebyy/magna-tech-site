module.exports = function (eleventyConfig) {
  // Static passthroughs
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/img": "img" });
  eleventyConfig.addPassthroughCopy({ "src/_redirects": "_redirects" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "src/llms.txt": "llms.txt" });

  // Filter: slugify already built into 11ty v3, but a tiny date filter is handy
  eleventyConfig.addFilter("year", () => new Date().getFullYear());

  return {
    dir: {
      input: "src/pages",
      includes: "../_includes",
      data: "../_data",
      output: "_site"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
