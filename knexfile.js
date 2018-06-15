module.exports = {
  development: {
    client: 'pg',
    connection: 'postgress:///gd1-memory'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
