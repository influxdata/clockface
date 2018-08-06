module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'clockface',
      externals: {
        react: 'React'
      }
    }
  }
}
