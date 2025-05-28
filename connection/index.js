const express = require('express');
const app = express();
const connectDB = require('./db');

const port = 3000;

app.use(express.json());
// connect to database
connectDB();




app.get('/', (req, res) => {
    // res.send('Hello World!')
    console.log("i am inside home page route handler");
    res.send('Hello from the home page!');
});




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});