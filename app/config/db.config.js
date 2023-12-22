module.exports = {
  HOST: "postgres-testdb-postgresql.postgres-testdb.svc.cluster.local",
  USER: "postgres",
  PASSWORD: "123",
  DB: "testdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};