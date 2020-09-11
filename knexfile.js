// Update with your config settings.
const path = require('path');

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'us-cdbr-east-05.cleardb.net',
      user: 'b330a226aabe8a',
      password: 'c291fa31',
      database: 'heroku_88420d2ecdde9ff',
      charset: 'utf8'
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "migrations"),
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'mysql',
    connection: {
      host: 'us-cdbr-iron-east-04.cleardb.net',
      user: 'b330a226aabe8a',
      password: 'c291fa31',
      database: 'heroku_88420d2ecdde9ff'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'mysql',
    connection: {
      host: 'us-cdbr-iron-east-04.cleardb.net',
      user: 'b330a226aabe8a',
      password: 'c291fa31',
      database: 'heroku_88420d2ecdde9ff'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true
  }

};