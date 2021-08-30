
require('dotenv').config();
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE, DATABASE_URL } = process.env;

module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_DATABASE,
    "host": DB_HOST,
    "dialect": "postgres",
    define: {
      timestamps: false
    }
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "deConcesionarias_test",
    "host": DB_HOST,
    "dialect": "postgres"
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "deConcesionarias_prod",
    "host": DB_HOST,
    "dialect": "postgres",
    "use_env_variable": DATABASE_URL
  },
}
