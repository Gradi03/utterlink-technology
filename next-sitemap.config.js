/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://utterlink.co.za",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  trailingSlash: false,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
