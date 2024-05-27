const Pool = require("pg").Pool;

const pool = new Pool({
  host: "localhost",
  user: "root",
  database: "tutorial",
  max: 10,
  //password: ""
  //port: 5432,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

module.exports = pool;
