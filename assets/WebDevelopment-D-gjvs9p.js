import{j as e}from"./index-DI04zPyO.js";const t=()=>e.jsxs("div",{className:"p-6",children:[e.jsx("h1",{className:"text-3xl font-bold text-blue-600",children:"Web Development Course"}),e.jsx("p",{className:"text-gray-700 mt-2",children:"Welcome to the Web Development Course, where you'll learn how to build modern, responsive, and dynamic websites. This course covers HTML, CSS, JavaScript, Frontend Frameworks (React.js), Backend Development (Node.js, Express.js), Databases (MongoDB, SQL), APIs, Authentication, and Deployment."}),e.jsx("p",{className:"mt-2",children:"By the end, you’ll be able to create full-stack web applications from scratch. 🚀"}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 1: Introduction to Web Development"}),e.jsx("h3",{className:"text-xl font-semibold mt-4",children:"1.1 What is Web Development?"}),e.jsx("p",{className:"mt-2",children:"Web development is the process of creating websites and web applications that run on the internet. It consists of:"}),e.jsxs("ul",{className:"list-disc pl-5 mt-2",children:[e.jsx("li",{children:"Frontend Development (User Interface and Experience)"}),e.jsx("li",{children:"Backend Development (Server-side logic and database handling)"}),e.jsx("li",{children:"Full-Stack Development (Both frontend and backend)"})]})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 2: HTML (HyperText Markup Language)"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`<!DOCTYPE html>
<html>
<head>
    <title>My First Web Page</title>
</head>
<body>
    <h1>Welcome to Web Development</h1>
    <p>This is my first web page!</p>
</body>
</html>`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 3: CSS (Cascading Style Sheets)"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`h1 {
    color: blue;
    font-size: 24px;
}`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 4: JavaScript (JS) - The Programming Language of the Web"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`let name = "John";  // String
let age = 25;       // Number
let isStudent = true;  // Boolean`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 5: Frontend Development with React.js"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`function Welcome() {
    return <h1>Hello, React!</h1>;
}

export default Welcome;`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 6: Backend Development with Node.js & Express.js"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, Backend!");
});

app.listen(3000, () => console.log("Server running on port 3000"));`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 7: Databases (SQL & NoSQL)"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mydatabase", { useNewUrlParser: true });

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const User = mongoose.model("User", userSchema);`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 8: REST APIs & Authentication"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`const jwt = require("jsonwebtoken");

const token = jwt.sign({ userId: 123 }, "secretkey", { expiresIn: "1h" });`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 9: Version Control with Git & GitHub"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`git init
git add .
git commit -m "First commit"
git push origin main`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 10: Deployment & Hosting"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`heroku create myapp
git push heroku main`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Final Projects"}),e.jsxs("ul",{className:"list-disc pl-5 mt-2",children:[e.jsx("li",{children:"✔ Portfolio Website (HTML, CSS, JavaScript)"}),e.jsx("li",{children:"✔ Weather App (React, API Integration)"}),e.jsx("li",{children:"✔ Blog Website (Node.js, MongoDB, JWT Authentication)"}),e.jsx("li",{children:"✔ E-commerce Store (Full-Stack: React, Node.js, MongoDB)"})]})]})]});export{t as default};
