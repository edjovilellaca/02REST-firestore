const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/login', authController.login);
router.post('/create', authController.createUser);
router.post('/createAdmin', authController.createUserAdmin);

module.exports = router;