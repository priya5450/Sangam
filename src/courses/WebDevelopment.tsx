import React from "react";

const WebDevelopment: React.FC = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-blue-600">Web Development Course</h1>
            <p className="text-gray-700 mt-2">
                Welcome to the Web Development Course, where you'll learn how to build modern, responsive, and dynamic websites.
                This course covers HTML, CSS, JavaScript, Frontend Frameworks (React.js), Backend Development (Node.js, Express.js), 
                Databases (MongoDB, SQL), APIs, Authentication, and Deployment.
            </p>
            <p className="mt-2">By the end, you’ll be able to create full-stack web applications from scratch. 🚀</p>

            {/* Module 1 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 1: Introduction to Web Development</h2>
                <h3 className="text-xl font-semibold mt-4">1.1 What is Web Development?</h3>
                <p className="mt-2">
                    Web development is the process of creating websites and web applications that run on the internet. It consists of:
                </p>
                <ul className="list-disc pl-5 mt-2">
                    <li>Frontend Development (User Interface and Experience)</li>
                    <li>Backend Development (Server-side logic and database handling)</li>
                    <li>Full-Stack Development (Both frontend and backend)</li>
                </ul>
            </section>

            {/* Module 2 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 2: HTML (HyperText Markup Language)</h2>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`<!DOCTYPE html>
<html>
<head>
    <title>My First Web Page</title>
</head>
<body>
    <h1>Welcome to Web Development</h1>
    <p>This is my first web page!</p>
</body>
</html>`}
                    </code>
                </pre>
            </section>

            {/* Module 3 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 3: CSS (Cascading Style Sheets)</h2>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`h1 {
    color: blue;
    font-size: 24px;
}`}
                    </code>
                </pre>
            </section>

            {/* Module 4 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 4: JavaScript (JS) - The Programming Language of the Web</h2>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`let name = "John";  // String
let age = 25;       // Number
let isStudent = true;  // Boolean`}
                    </code>
                </pre>
            </section>

            {/* Module 5 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 5: Frontend Development with React.js</h2>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`function Welcome() {
    return <h1>Hello, React!</h1>;
}

export default Welcome;`}
                    </code>
                </pre>
            </section>

            {/* Module 6 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 6: Backend Development with Node.js & Express.js</h2>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, Backend!");
});

app.listen(3000, () => console.log("Server running on port 3000"));`}
                    </code>
                </pre>
            </section>

            {/* Module 7 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 7: Databases (SQL & NoSQL)</h2>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mydatabase", { useNewUrlParser: true });

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const User = mongoose.model("User", userSchema);`}
                    </code>
                </pre>
            </section>

            {/* Module 8 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 8: REST APIs & Authentication</h2>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`const jwt = require("jsonwebtoken");

const token = jwt.sign({ userId: 123 }, "secretkey", { expiresIn: "1h" });`}
                    </code>
                </pre>
            </section>

            {/* Module 9 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 9: Version Control with Git & GitHub</h2>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`git init
git add .
git commit -m "First commit"
git push origin main`}
                    </code>
                </pre>
            </section>

            {/* Module 10 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 10: Deployment & Hosting</h2>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`heroku create myapp
git push heroku main`}
                    </code>
                </pre>
            </section>

            {/* Final Projects */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Final Projects</h2>
                <ul className="list-disc pl-5 mt-2">
                    <li>✔ Portfolio Website (HTML, CSS, JavaScript)</li>
                    <li>✔ Weather App (React, API Integration)</li>
                    <li>✔ Blog Website (Node.js, MongoDB, JWT Authentication)</li>
                    <li>✔ E-commerce Store (Full-Stack: React, Node.js, MongoDB)</li>
                </ul>
            </section>
        </div>
    );
};

export default WebDevelopment;
