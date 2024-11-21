module.exports = {
  extends: [
    'next/core-web-vitals',
    'next'
  ],
  root: true,
  plugins: ['react'],
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
    'react/no-unescaped-entities': 'off',
    'react/display-name': 'off'
  }
}
