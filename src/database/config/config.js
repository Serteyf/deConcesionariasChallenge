
require('dotenv').config();
const { DATABASE_URL, DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE} = process.env;

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
    "dialect": "postgres",
    "use_env_variable": DATABASE_URL,
    "dialectOptions": {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
}
