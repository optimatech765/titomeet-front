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
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/cgu'),
    await config.transform(config, '/policy'),
    await config.transform(config, '/faq'),
    await config.transform(config, '/support'),
    await config.transform(config, '/events'),
    await config.transform(config, '/#evenements'),
    await config.transform(config, '/#categories'),
    await config.transform(config, '/#fonctionnalites'),
    await config.transform(config, '/#providers'),
    // Ajoute toutes les routes publiques ici
  ],
}

