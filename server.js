const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Project = require('./Models/Projects');
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

// connect mongoose
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Data base is connected"))
    .catch(err => console.log(err.message))

// Route to add a new project
app.post('/projects', async (req, res) => {
    const { projectName,
        projectImage,
        demoLink,
        technologies,
        summery } = req.body;
    // console.log(req.body)
    try {
        const newProject = new Project({
            projectName,
            projectImage,
            demoLink,
            technologies,
            summery
        });
        await newProject.save();
        res.status(201).json(newProject);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Route to get all projects
app.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/', (req, res) => {
    res.send('This is my portfolio server')
})

// Route to get a specific project by ID
app.get('/projects/:id', async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        const project = await Project.findById(id);
        if (!project) return res.status(404).json({ message: 'Project not found' });
        res.status(200).json(project);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Route to update a project by ID
app.put('/projects/:id', async (req, res) => {
    const { id } = req.params;
    const {
        projectName,
        projectImage,
        demoLink,
        technologies,
        summery, } = req.body;
    try {
        const updatedProject = await Project.findByIdAndUpdate(
            id,
            {
                projectName,
                projectImage,
                demoLink,
                technologies,
                summery,
            },
            { new: true, runValidators: true }
        );
        if (!updatedProject) return res.status(404).json({ message: 'Project not found' });
        res.status(200).json(updatedProject);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Route to delete a project by ID
app.delete('/projects/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProject = await Project.findByIdAndDelete(id);
        if (!deletedProject) return res.status(404).json({ message: 'Project not found' });
        res.status(200).json({ message: 'Project deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const port = process.env.PORT || 5000;
// server listen
app.listen(port, () => {
    console.log(`This server is running on PORT: ${port}`)
})