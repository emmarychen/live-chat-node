const config = {
  development: {
    domain: 'http://localhost:3000',
  },
  production: {
    domain: 'https://live-chat-node.herokuapp.com',
  }
};

const env = process.env.NODE_ENV || 'development';
module.exports = config[env];