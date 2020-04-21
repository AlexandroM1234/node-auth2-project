const db = require("../database/db-config");

module.exports = {
  find,
  addUser,
  findBy,
};

function find() {
  return db("users").select("id", "username", "department");
}

function addUser(newUser) {
  return db("users").insert(newUser, "id");
}

function findBy(something) {
  return db("users").where(something);
}
