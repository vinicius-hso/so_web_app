module.exports = {
  HOST: "127.0.0.1:3306",
  USER: "app_user",
  PASSWORD: "123456",
  DB: "so_database",
  dialect: "mariadb",
  // dialectOptions: {
  //   socketPath: "/var/run/mysqld/mysqld.sock",
  // },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
