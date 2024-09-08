const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const projectRoutes = require('../Routes/Projects');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// connect mongoose
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Data base is connected"))
    .catch(err => console.log(err.message))

// Use project routes
app.use('/projects', projectRoutes);

app.get('/', (req, res) => {
    res.send('This is my portfolio server')
})

// server listen
app.listen(port, () => {
    console.log(`This server is running on PORT: ${port}`)
})
