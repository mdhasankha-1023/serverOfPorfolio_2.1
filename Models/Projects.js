const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectName: {
      type: String,
      required: true,
    },
    summery: {
      type: String,
      required: false,
    },
    technologies: {
      type: Array,
      required: false,
    },
    projectImage: {
      type: String,
      required: true,
    },
    demoLink: {
      type: String,
      required: true,
    },
  });
  
  const Project = mongoose.model('Project', projectSchema);
  module.exports = Project;