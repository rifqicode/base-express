const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  DB_DRIVER: process.env.DATABASE_DRIVER,
  DB_URL: process.env.DATABASE_URL
};
