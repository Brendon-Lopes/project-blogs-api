require('dotenv').config();

// const environment = process.env.NODE_ENV || 'test';

// const suffix = {
//   dev: '-dev',
//   development: '-dev',
//   test: '-test',
// };

const options = {
  host: process.env.HOSTNAME || process.env.MYSQL_HOST || 'localhost',
  port: process.env.MYSQL_PORT || '3306',
  database: process.env.MYSQL_DB_NAME,
  // `${process.env.MYSQL_DB_NAME || 'blogs-api'}${suffix[environment] || suffix.test}`,
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '1234',
  dialect: process.env.DB_DIALECT,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
    timezone: 'Z',
  },
  // logging: process.env.DEBUG !== 'false',
  logging: false,
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
  production: {
    ...options,
    database: process.env.MYSQL_DB_NAME,
    host: process.env.MYSQL_HOST,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
