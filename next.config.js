module.exports = {
  exportTrailingSlash: true,
  exportPathMap: () => ({
    '/': { page: '/' },
    '/about': { page: '/about' },
  }),
};
