module.exports = {
  HOST: "localhost:3306",
  USER: "root",
  PASSWORD: "123456",
  DB: "so_db",
  dialect: "mysql",
  dialectOptions: {
    socketPath: "/var/run/mysqld/mysqld.sock",
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
