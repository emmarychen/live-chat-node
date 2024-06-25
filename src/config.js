const config = {
  development: {
    domain: 'http://localhost:3000',
    dbHost: process.env.DB_HOST || 'localhost',
    dbUser: process.env.DB_USER || 'test',
    dbPassword: process.env.DB_PASSWORD || 'test',
    database: process.env.DB_NAME || 'live_chat',
    port: process.env.DB_PORT || 8889,
  },
  production: {
    domain: 'https://live-chat-node.herokuapp.com',
    dbHost: 'us-cdbr-east-06.cleardb.net',
    dbUser: 'bbf6fd3aa26a15',
    dbPassword: 'caa679b6',
    database: 'heroku_4d85e7e8281f7b8',
  }
};

const env = process.env.NODE_ENV || 'development';
module.exports = config[env];