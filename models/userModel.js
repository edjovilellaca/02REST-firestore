const bcrypt = require("bcryptjs");

let users = [
  {
    username: "admin",
    password: bcrypt.hashSync("12345", 10), // Contraseña encriptada
    apiKey: "admin.d683c168-377f-528d-8d9a-b7f1551ecb44" // <=8-4-4-4-12 tamaño
  },
  {
    username: "user",
    password: bcrypt.hashSync("password", 10), // Contraseña encriptada
    apiKey: "596ac0ae-c4a0-4803-b796-8f239c8431ba"
  },
];


function getUserByUsername(username) {
  return users.find((user) => user.username === username);
}

module.exports = {
  users,
  getUserByUsername
}