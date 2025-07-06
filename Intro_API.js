const express = require("express"); // this returns an express module or function which we are storing in the 'express' variable
const app = express(); // this will return an object of express type which we store in 'app'

// this app has various methods like get, post, put, delete etc.
// app.get() , app.post() , app.put() , app.delete()

// this is how we define a route in express
// app.get() is used to handle GET requests
// the first argument is the path (url) and the second argument is a callback function (route handler)
app.get("/", (req, res) => {
  res.send("I am Ananya R Bhat");
});

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3, 5, 6, 7]);
});

// if you just put app.get("api/courses/:id") then it will not work. correct form → /api/courses/:id
app.get("/api/courses/:id", (req, res) => {
  res.send(req.params.id);
});
// app.get() is used to handle GET requests
// id is a route parameter and can be named anything
// req.params is an object that contains the route parameters
// req.params.id will give the value of the id parameter in the URL

// here is a small example to get a year and month from the URL
// I have changed it to query because it is more flexible and I have assigned changes in the URL
// http://localhost:5000/api/posts/2025/2?sortBy=name
app.get("/api/posts/:year/:month", (req, res) => {
  res.send(req.query); // sends { sortBy: 'name' }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
// this will start the server on port 3000 and log a message to the console

// without nodemon, we have to go back to the terminal every time we make a change in the code to restart the server
// nodemon will automatically restart the server when we make a change in the code

// environment variable - value is set outside the application
// whenever you are using "set PORT", make sure there are no spaces in between === set PORT=5000
// process.env.PORT is used to get the value of the PORT environment variable
// process.env is an object that contains the user environment variables
// if the PORT environment variable is not set, it will use 3000 as the default
