// require express and bodyParser
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const postsRoute = require('./routes/posts')

require("dotenv/config")

// create express app
const app = express();
// Everytime a route is called, this bodyParser runs
app.use(bodyParser.json())

//Everytime I access /prova it logs the message (example): it is usually used for authentication everytime you access a page
// app.use('/prova', () => {
//     console.log("Prova console")
// })

app.get('/', (req, res) => {
    res.send("ciao ciao")
})

app.use('/posts', postsRoute)
// It does not exist, but it could be another route
// app.use('/users', userRoute)

//Connect to db
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true }, () => console.log("CONNECTED!"))

//Start server
app.listen(8080);

// // define port to run express app
// const port = process.env.PORT || 8080;

// // use bodyParser middleware on express app
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// const courses = [
//     { id:1, name: 'course1' },
//     { id:2, name: 'course2' },
//     { id:3, name: 'course3' },
// ];

// // Add endpoint
// app.get('/prova/', (req, res) => {
//     res.send(courses);
// });

// // Listen to server
// app.listen(port, () => {

//     console.log(`Server running at http://localhost:${port}`);
// });

// // Import DB Connection
// require("./config/db");

// // Import API route
// var routes = require('./api/routes/todoRoutes'); //importing route
// routes(app);