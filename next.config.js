const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  pageExtensions: ['page.tsx'],
  basePath: isProd ? '/hashtag-interactive-valentines-day-card-app' : '',
};
