import{j as e}from"./index-DI04zPyO.js";const t=()=>e.jsxs("div",{className:"p-6",children:[e.jsx("h1",{className:"text-3xl font-bold text-blue-600",children:"Python Programming Course"}),e.jsx("p",{className:"text-gray-700 mt-2",children:"Welcome to the Python Programming Course, a comprehensive learning path that covers everything from Python basics to advanced topics like web development, data science, and automation."}),e.jsx("p",{className:"mt-2",children:"By the end of this course, you’ll be able to develop real-world applications with Python."}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 1: Introduction to Python"}),e.jsx("h3",{className:"text-xl font-semibold mt-4",children:"1.1 What is Python?"}),e.jsx("p",{className:"mt-2",children:"Python is a high-level, interpreted, object-oriented programming language known for its simplicity and readability. It was created by Guido van Rossum in 1991 and is widely used in web development, data science, automation, and scripting."})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h3",{className:"text-xl font-semibold",children:"1.2 Setting Up Python"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:"python --version"})}),e.jsx("p",{className:"mt-2",children:"Write your first Python program:"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:'print("Hello, Python!")'})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 2: Python Basics"}),e.jsx("h3",{className:"text-xl font-semibold mt-4",children:"2.1 Variables and Data Types"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`name = "Alice"   # String
age = 25         # Integer
price = 99.99    # Float
is_student = True  # Boolean`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 3: Functions and Modules in Python"}),e.jsx("h3",{className:"text-xl font-semibold mt-4",children:"3.1 Defining Functions"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 4: Object-Oriented Programming (OOP) in Python"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`class Car:
    def __init__(self, brand, speed):
        self.brand = brand
        self.speed = speed

    def display(self):
        print(f"Brand: {self.brand}, Speed: {self.speed}")

car1 = Car("Toyota", 120)
car1.display()`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 5: Python Data Structures"}),e.jsx("h3",{className:"text-xl font-semibold mt-4",children:"5.1 Lists"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`fruits = ["Apple", "Banana", "Cherry"]
fruits.append("Mango")
print(fruits)  # Output: ['Apple', 'Banana', 'Cherry', 'Mango']`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 6: File Handling in Python"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`# Writing to a file
with open("sample.txt", "w") as file:
    file.write("Hello, World!")

# Reading a file
with open("sample.txt", "r") as file:
    content = file.read()
    print(content)`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 7: Python Libraries and Frameworks"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`import pandas as pd
data = {"Name": ["Alice", "Bob"], "Age": [25, 30]}
df = pd.DataFrame(data)
print(df)`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 8: REST API Development with Django & Flask"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/api/data", methods=["GET"])
def get_data():
    return jsonify({"message": "Hello, API!"})

if __name__ == "__main__":
    app.run(debug=True)`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 9: Python and Databases"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`import sqlite3

conn = sqlite3.connect("mydatabase.db")
cursor = conn.cursor()
cursor.execute("CREATE TABLE users (id INTEGER, name TEXT)")`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 10: Final Projects"}),e.jsxs("ul",{className:"list-disc pl-5 mt-2",children:[e.jsx("li",{children:"✔ Web Scraping Application (using BeautifulSoup)"}),e.jsx("li",{children:"✔ To-Do App with Flask & SQLite"}),e.jsx("li",{children:"✔ Chatbot using AI & Python"}),e.jsx("li",{children:"✔ E-commerce Website Backend with Django"})]})]})]});export{t as default};
