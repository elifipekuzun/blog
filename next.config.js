const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      swcMinify: true,
      env: {
        mongodb_username: 'elifipek',
        mongodb_password: '588647elka',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'blogdb-dev',
      }
    }
  }
  return {
      reactStrictMode: true,
      swcMinify: true,
      env: {
        mongodb_username: 'elifipek',
        mongodb_password: '588647elka',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'blogdb',
      }
    }
}


// reactStrictMode: true,
//   swcMinify: true,
//   env: {
//     mongodb_username: 'elifipek',
//     mongodb_password: '588647elka',
//     mongodb_clustername: 'cluster0',
//     mongodb_database: 'blogdb',
//   }