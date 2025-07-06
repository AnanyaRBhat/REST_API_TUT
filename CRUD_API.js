const Joi = require("joi"); // Joi is a validation library for input validation , the function returns a class hence J capital in joi
const express = require("express"); // Importing the express module
const app = express(); // Creating an express application

app.use(express.json()); // Middleware to parse incoming JSON request bodies

const courses = [
  { id: 1, name: "Phyisics" },
  { id: 2, name: "Chemistry" },
  { id: 3, name: "Maths" },
];

// -------- GET all courses --------
// This route returns the list of all courses
app.get("/api/courses", (req, res) => {
  res.send(courses);
});

// -------- GET course by ID --------
// This route returns a single course based on the provided ID
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("The course was not found");
  res.send(course);
});

// -------- POST (Create) a new course --------
// This route adds a new course after validating input
app.post("/api/courses", (req, res) => {
  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

// -------- PUT (Update) an existing course --------
// This route updates the name of a course with a given ID
app.put("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("The course with the given ID was not found");
  // this is called object destructuring
  //const result = validateCourse(req.body);
  // if (result.error) return res.status(400).send(result.error.details[0].message);
  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  course.name = req.body.name;
  res.send(course);
});

// -------- DELETE a course --------
// This route deletes a course based on the ID provided
app.delete("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("The course with the given ID was not found");

  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(course);
});

// -------- Input Validation Function --------
// This function uses Joi to validate that the course name is a string and at least 3 characters long
function validateCourse(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });
  return schema.validate(course);
}

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
