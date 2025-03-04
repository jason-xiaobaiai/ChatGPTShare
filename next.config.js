const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  editPage: false,
  feedback: false,
  footer: false,
})

module.exports = withNextra()
