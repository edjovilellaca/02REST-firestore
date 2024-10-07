const projectModel = require('../models/projectModel');

async function getAllProjects(req, res) {
    try {
        const projects = await projectModel.getAllProjects(); 

        if (projects.length > 0) {
            res.status(200).json(projects);
        } else {
            res.status(404).json({ code: 404, message: "Proyectos no encontrados" });
        }
    } catch (error) {
        res.status(500).json({ code: 500, message: "Error al obtener proyectos", error: error.message });
    }
}

async function createProject(req, res) {
    try {
        const newProject = await projectModel.createProject(req.body);

        res.status(201).json(newProject); 
    } catch (error) {
        res.status(500).json({ code: 500, message: "Error al crear el proyecto", error: error.message });
    }
}

async function getProjectById(req, res) {
    try {
        const project = await projectModel.getProjectById(req.params.id);

        res.status(201).json(project); 
    } catch (error) {
        res.status(500).json({ code: 500, message: "Error al crear el proyecto", error: error.message });
    }
}

module.exports = {
    getAllProjects, createProject, getProjectById
}