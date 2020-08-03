const express = require('express');
const connectDB = require('./config/db');
const PORT = 3000;
const baseUrl = `http://localhost:${PORT}`

const app = express();

// Connect to database
connectDB();

app.use(express.json());
app.use((req, res, next) => (req.app.set('baseUrl', baseUrl), next()))

// Define Routes
app.use('/api/url', require('./routes/url'));
app.use('/', require('./routes/index'));

app.use('/', function (req, res) {
    return res.json("Sorry")
});


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));