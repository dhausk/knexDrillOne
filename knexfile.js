module.exports = {
  development: {
    client: 'pg',
    connection: "postgress:///resolutiondb"
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
