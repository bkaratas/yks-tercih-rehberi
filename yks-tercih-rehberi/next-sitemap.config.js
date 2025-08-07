const fs = require("fs");
const path = require("path");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://tercihnet.com',
  generateRobotsTxt: true,
  exclude: ['/404', '/api/*'],
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },


  additionalPaths: async (config) => {
    const departments = JSON.parse(
      fs.readFileSync(path.join(__dirname, 'data/departments.json'), 'utf8')
    );
    const universities = JSON.parse(
      fs.readFileSync(path.join(__dirname, 'data/universities.json'), 'utf8')
    );

    const departmentPaths = departments.map((dept) => ({
      loc: `/departments/${dept.slug}`,
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));

    const universityPaths = universities.map((uni) => ({
      loc: `/universities/${uni.slug}`,
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));

    const scorePaths = ['sayisal', 'ea', 'soz', 'dil'].map((type) => ({
  loc: `/scores/${type}`,
  changefreq: 'weekly',
  priority: 0.7,
  lastmod: new Date().toISOString(),
}));


    return [...departmentPaths, ...universityPaths, ...scorePaths];
  },
};
