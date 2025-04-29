module.exports = {
  locales: ['en', 'es', 'fr', 'de'],
  sourceLocale: 'en',
  fallbackLocale: 'en',
  catalogs: [
    {
      path: 'src/locales/{locale}/messages',
      include: ['src'],
    },
  ],
};
