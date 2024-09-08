const express = require('express');
const router = express.Router();
const Project = require('../Models/Projects');


// Route to add a new project
// router.post('/', async (req, res) => {
//     const { projectName, projectImage, demoLink, technologies, summery } = req.body;
//     try {
//         const newProject = new Project({ projectName, projectImage, demoLink, technologies, summery });
//         await newProject.save();
//         res.status(201).json(newProject);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// Route to get all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Route to get a specific project by ID
// router.get('/:id', async (req, res) => {
//     const { id } = req.params;
//     console.log(id);
//     try {
//         const project = await Project.findById(id);
//         if (!project) return res.status(404).json({ message: 'Project not found' });
//         res.status(200).json(project);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// Route to update a project by ID
// router.put('/:id', async (req, res) => {
//     const { id } = req.params;
//     const { projectName, projectImage, demoLink, technologies, summery } = req.body;
//     try {
//         const updatedProject = await Project.findByIdAndUpdate(id, { projectName, projectImage, demoLink, technologies, summery }, { new: true, runValidators: true });
//         if (!updatedProject) return res.status(404).json({ message: 'Project not found' });
//         res.status(200).json(updatedProject);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// Route to delete a project by ID
// router.delete('/:id', async (req, res) => {
//     const { id } = req.params;
//     try {
//         const deletedProject = await Project.findByIdAndDelete(id);
//         if (!deletedProject) return res.status(404).json({ message: 'Project not found' });
//         res.status(200).json({ message: 'Project deleted' });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });


module.exports = router;