const userModel = require("../models/userModel");
const { generateApiKey } = require("generate-api-key");


async function login(req, res) {
  const { username, password, apiKey } = req.body;

  if(!toString(username).split(' ') || !password.split(' ')) return res.status(403).json({ code: 403, message: "Usuario o contraseña vacio" });

  if (apikiCorrecta(username, apiKey)) return res.status(403).json({ code: 403, message: "Api Key incorrecta" }); 
  
  return res.status(200).json({
    code: 200,
    message: "Inicio de sesión exitoso",
    apiKey
  });
}

async function createUserAdmin(req, res) {
  const { username, password } = req.body;

  if(!toString(username).split(' ') || !password.split(' ')) return res.status(403).json({ code: 403, message: "Usuario o contraseña vacio" });
  if (existsUsername(username)) return res.status(403).json({ code: 403, message: "Este usuario ya existe" });
  
  const apiki = generateApiKey({
    method: 'uuidv5',
    name: username,
    dashes: true,
    prefix: 'admin',
    batch: 1
  });

  userModel.users.push({username, password, apiki});
  
  return res.status(200).json({
    code: 200,
    message: "Usuario creado exitosamente",
    ApikEY: apiki
  });
}

async function createUser(req, res) {
  const { username, password } = req.body;

  if(!toString(username).split(' ') || !password.split(' ')) return res.status(403).json({ code: 403, message: "Usuario o contraseña vacio" });
  if (existsUsername(username)) return res.status(403).json({ code: 403, message: "Este usuario ya existe" });
  
  const apiki = generateApiKey({
    method: 'uuidv5',
    name: username,
    dashes: true,
    batch: 1
  });

  userModel.users.push({username, password, apiki});
  
  return res.status(200).json({
    code: 200,
    message: "Usuario creado exitosamente",
    ApikEY: apiki
  });
}

function existsUsername(users, username) {
  return userModel.users.some(user => user.username === username);
}

function apikiCorrecta(users, apiki) {
  return userModel.users.some(user => user.apikey ==apiki);
}

module.exports = { login, createUserAdmin, createUser, apikiCorrecta };