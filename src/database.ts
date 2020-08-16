import mysql from "promise-mysql";
import keys from "./keys";

const pool = mysql.createPool(keys.database);

pool.get("getConnection").then((connection) => {
  pool.get("releaseConnection");
  console.log("db connect!");
});

export default pool;
