This repository contains my first hands-on practice with **Node.js** and **Express.js**. It includes:

- ✅ Basic Express routing (`index.js`)
- ✅ A complete REST API with validation (`index1.js`)
- ✅ Use of middleware, route parameters, query strings, and data validation with `Joi`

---

## 📁 Project Structure

```bash
express-demo/
│
├── Intro_API.js        # Basic Express examples with routes and query params
├── CRUD_API.js       # Full REST API with CRUD and Joi validation
├── package.json    # Project dependencies and metadata
├── .gitignore      # Ignored files (node_modules, etc.)
└── README.md       # You're reading it!
```

---

## 🔰 Intro_API.js — Basic Express Routes

### 🚀 Purpose:

This file shows how to set up a basic Express server, define routes, use query strings, and route parameters.

### ✨ Key Features:

- `GET /` → Returns a welcome message.
- `GET /api/courses` → Returns a static list of course IDs.
- `GET /api/courses/:id` → Returns the value of the ID sent in the route.
- `GET /api/posts/:year/:month?sortBy=name` → Demonstrates query string usage.

### 💡 Concepts Covered:

- Express setup and `app.listen()`
- Using `process.env.PORT || 3000` to allow custom port setting
- Route parameters (`req.params`)
- Query parameters (`req.query`)
- Using environment variables:

  ```bash
  set PORT=5000  # No spaces around '=' on Windows
  ```

---

## CRUD_API.js — REST API with CRUD and Joi Validation

### Purpose:

A complete CRUD API for managing a list of courses, using RESTful routes and validation with `Joi`.

### Features:

- `GET /api/courses` → Get all courses
- `GET /api/courses/:id` → Get a course by ID
- `POST /api/courses` → Add a course with validation
- `PUT /api/courses/:id` → Update a course with validation
- `DELETE /api/courses/:id` → Delete a course by ID

### 🛡️ Validation with Joi:

Before adding or updating a course, input is validated:

```js
const schema = Joi.object({
  name: Joi.string().min(3).required(),
});
```

If validation fails, a 400 Bad Request is returned with a helpful message.

### Concepts Covered:

- Middleware: `app.use(express.json())`
- Route structure and RESTful design
- Error handling (404, 400)
- Input validation using `Joi`
- Array operations: `.find()`, `.push()`, `.splice()`
- Object destructuring for clean validation logic

---

## 🔧 How to Run

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the server**

   ```bash
   node CRUD_API.js
   # or
   nodemon CRUD_API.js
   ```

3. **Test with Postman or Browser:**

| Method | Route            | Description           |
| ------ | ---------------- | --------------------- |
| GET    | `/api/courses`   | Get all courses       |
| GET    | `/api/courses/1` | Get course by ID      |
| POST   | `/api/courses`   | Add new course (JSON) |
| PUT    | `/api/courses/1` | Update course name    |
| DELETE | `/api/courses/1` | Delete course by ID   |

---

## Sample JSON for POST/PUT

```json
{
  "name": "Advanced JavaScript"
}
```
