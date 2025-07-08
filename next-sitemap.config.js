/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteName: 'TITOMEET',
  generateIndexSitemap: true,
  generateSitemaps: true,
  sitemapBaseFileName: 'sitemap',
  siteUrl: 'https://titomeet.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ['/admin', '/dashboard', '/api/*', '/auth/*', '/settings', '/profile'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/dashboard/',
          '/api/',
          '/auth/',
          '/settings/',
          '/profile/',
        ],
      },
    ],
    sitemap: 'https://titomeet.com/sitemap.xml',
  },
}
