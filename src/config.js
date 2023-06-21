const config = {
  development: {
    domain: 'http://localhost:3000',
    dbHost: 'localhost',
    dbUser: 'test',
    dbPassword: 'test',
    database: 'live_chat',
    port: 8889
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