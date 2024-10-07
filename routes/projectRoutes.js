const express = require('express');

const projectController = require('../controllers/projectController');

const router = express.Router();

router.get('/', projectController.getAllProjects);
router.get('/:id', projectController.getProjectById);
router.post('/', projectController.createProject);

module.exports = router;