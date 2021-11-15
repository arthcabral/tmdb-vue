// vue.config.js file to be place in the root of your repository
//a
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/tmdb-vue/'
      : '/'
  }
  