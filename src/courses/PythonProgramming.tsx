import React from "react";

const PythonProgramming: React.FC = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-blue-600">Python Programming Course</h1>
            <p className="text-gray-700 mt-2">
                Welcome to the Python Programming Course, a comprehensive learning path that covers everything from Python basics to advanced topics like web development, data science, and automation.
            </p>
            <p className="mt-2">By the end of this course, you’ll be able to develop real-world applications with Python.</p>

            {/* Module 1 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 1: Introduction to Python</h2>
                <h3 className="text-xl font-semibold mt-4">1.1 What is Python?</h3>
                <p className="mt-2">
                    Python is a high-level, interpreted, object-oriented programming language known for its simplicity and readability.
                    It was created by Guido van Rossum in 1991 and is widely used in web development, data science, automation, and scripting.
                </p>
            </section>

            {/* Setting Up Python */}
            <section className="mt-6">
                <h3 className="text-xl font-semibold">1.2 Setting Up Python</h3>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>python --version</code>
                </pre>
                <p className="mt-2">Write your first Python program:</p>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`print("Hello, Python!")`}
                    </code>
                </pre>
            </section>

            {/* Module 2 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 2: Python Basics</h2>
                <h3 className="text-xl font-semibold mt-4">2.1 Variables and Data Types</h3>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`name = "Alice"   # String
age = 25         # Integer
price = 99.99    # Float
is_student = True  # Boolean`}
                    </code>
                </pre>
            </section>

            {/* Module 3 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 3: Functions and Modules in Python</h2>
                <h3 className="text-xl font-semibold mt-4">3.1 Defining Functions</h3>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))`}
                    </code>
                </pre>
            </section>

            {/* Module 4 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 4: Object-Oriented Programming (OOP) in Python</h2>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`class Car:
    def __init__(self, brand, speed):
        self.brand = brand
        self.speed = speed

    def display(self):
        print(f"Brand: {self.brand}, Speed: {self.speed}")

car1 = Car("Toyota", 120)
car1.display()`}
                    </code>
                </pre>
            </section>

            {/* Module 5 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 5: Python Data Structures</h2>
                <h3 className="text-xl font-semibold mt-4">5.1 Lists</h3>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`fruits = ["Apple", "Banana", "Cherry"]
fruits.append("Mango")
print(fruits)  # Output: ['Apple', 'Banana', 'Cherry', 'Mango']`}
                    </code>
                </pre>
            </section>

            {/* Module 6 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 6: File Handling in Python</h2>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`# Writing to a file
with open("sample.txt", "w") as file:
    file.write("Hello, World!")

# Reading a file
with open("sample.txt", "r") as file:
    content = file.read()
    print(content)`}
                    </code>
                </pre>
            </section>

            {/* Module 7 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 7: Python Libraries and Frameworks</h2>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`import pandas as pd
data = {"Name": ["Alice", "Bob"], "Age": [25, 30]}
df = pd.DataFrame(data)
print(df)`}
                    </code>
                </pre>
            </section>

            {/* Module 8 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 8: REST API Development with Django & Flask</h2>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/api/data", methods=["GET"])
def get_data():
    return jsonify({"message": "Hello, API!"})

if __name__ == "__main__":
    app.run(debug=True)`}
                    </code>
                </pre>
            </section>

            {/* Module 9 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 9: Python and Databases</h2>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`import sqlite3

conn = sqlite3.connect("mydatabase.db")
cursor = conn.cursor()
cursor.execute("CREATE TABLE users (id INTEGER, name TEXT)")`}
                    </code>
                </pre>
            </section>

            {/* Final Projects */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 10: Final Projects</h2>
                <ul className="list-disc pl-5 mt-2">
                    <li>✔ Web Scraping Application (using BeautifulSoup)</li>
                    <li>✔ To-Do App with Flask & SQLite</li>
                    <li>✔ Chatbot using AI & Python</li>
                    <li>✔ E-commerce Website Backend with Django</li>
                </ul>
            </section>
        </div>
    );
};

export default PythonProgramming;
