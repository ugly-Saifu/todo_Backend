const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes/ToDoRoute');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;

app.use(express.json());
app.use(cors());

// MongoDB connection using environment variable
mongoose.connect(MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB connected successfully");
}).catch(err => {
    console.log("MongoDB connection error:", err);
});

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
