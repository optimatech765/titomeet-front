/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://civodi.bj',
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
    sitemap: 'https://civodi.bj/sitemap.xml',
  },
}
