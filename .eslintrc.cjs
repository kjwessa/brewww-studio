module.exports = {
  extends: [
    'next/core-web-vitals',
    'next'
  ],
  root: true,
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
    'react/no-unescaped-entities': 'off'
  }
}
