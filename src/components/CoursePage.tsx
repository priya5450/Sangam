// import React from "react";
// import ReactMarkdown from "react-markdown";
// import { useParams, Link } from "react-router-dom";

// const studyContent = {
//     "web-development": {
//         title: "Web Development",
//         content: `
//       ## Web Development
//       Web development involves creating websites and web applications.

//       - **HTML:** *The structure of a webpage.*
//       - **CSS:** *Styles and layouts.*
//       - **JavaScript:** *Interactive elements.*
//       - **React.js:** *A popular JavaScript framework for UI.*
//       `
//       },
//   "python-programming": {
//     title: "Python Programming",
//     content: `
//       Python is a high-level, interpreted language.
//       - **Syntax & Variables:** Python uses indentation.
//       - **Data Types:** Lists, tuples, dictionaries.
//       - **OOP in Python:** Classes and objects.
//       - **Django & Flask:** Web frameworks for Python.
//     `
//   },
//   "java-development": {
//     title: "Java Development",
//     content: `
//       Java is an object-oriented programming language.
//       - **OOP Concepts:** Encapsulation, Inheritance, Polymorphism.
//       - **JVM & JDK:** Java Virtual Machine and Development Kit.
//       - **Spring Boot:** A powerful backend framework.
//       - **Java for DSA:** Used in competitive coding.
//     `
//   },
//   "data-structures": {
//     title: "Data Structures",
//     content: `
//       Data structures organize and store data efficiently.
//       - **Arrays & Linked Lists:** Sequential storage.
//       - **Stacks & Queues:** LIFO & FIFO concepts.
//       - **Trees & Graphs:** Hierarchical data structures.
//       - **Sorting Algorithms:** QuickSort, MergeSort.
//     `
//   }
//   ,
//   "Android-Development": {
//     title: "Android-Development",
//     content: `
//       Android development focuses on building applications for mobile devices.
//       - **Java & Kotlin:** Primary languages for Android development.
//       - **Android Studio:** Official IDE for Android app development.
//       - **Activity & Fragment Lifecycle:** Managing app states.
//       - **UI/UX Design:** XML layouts, Jetpack Compose.
//       - **Networking:** REST APIs, Retrofit, Volley.
//       - **Database Management:** SQLite, Room Database.
//       - **Firebase & Cloud Integration:** Authentication, real-time database.
//     `
//   },
//   "Machine-Learning": {
//     title: "Machine-Learning",
//     content: `
//       Machine learning enables systems to learn from data and improve predictions.
//       - **Supervised Learning:** Regression, classification algorithms.
//       - **Unsupervised Learning:** Clustering, anomaly detection.
//       - **Neural Networks & Deep Learning:** CNNs, RNNs, Transformers.
//       - **Feature Engineering:** Data preprocessing techniques.
//       - **Model Evaluation:** Accuracy, precision, recall, F1-score.
//       - **Libraries & Tools:** Scikit-learn, TensorFlow, PyTorch.
//       - **Deployment:** Model serving with Flask, FastAPI, or cloud platforms.
//     `
//   }
// };

// const CoursePage = () => {
//   const { courseId } = useParams();
//   const course = studyContent[courseId];

//   if (!course) {
//     return <div className="text-center mt-10 text-red-500">Course not found</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
//         <h1 className="text-3xl font-bold">{course.title}</h1>
//         <p className="mt-4 whitespace-pre-line text-gray-700">{course.content}</p>

//         <Link
//   to={`/test/${courseId}`}
//   className="block mt-6 text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
// >
//   Take Test
// </Link>

//       </div>
//     </div>
//   );
// };

// export default CoursePage;

import React from "react";
import ReactMarkdown from "react-markdown";
import { useParams, Link } from "react-router-dom";

interface Course {
    title: string;
    content: string;
}

const studyContent: Record<string, Course> = {
    "web-development": {
        title: "Web Development",
        content: `
# Web Development  
Web development involves creating websites and web applications. It consists of three major technologies:

## 1️⃣ HTML (HyperText Markup Language)
HTML provides the **structure** of a webpage. It consists of elements (tags) that define different parts of the page.

- **Elements**: Headings, paragraphs, lists, links, images, forms.
- **Semantic HTML**: Uses meaningful tags like \`<header>\`, \`<article>\`, \`<footer>\` for better accessibility.

## 2️⃣ CSS (Cascading Style Sheets)
CSS is used to **style** HTML elements and control the layout.

- **Selectors**: Class (\`.class\`), ID (\`#id\`), Element (\`h1, p\`).
- **Box Model**: Controls margin, border, padding, and content.
- **Media Queries**: Makes webpages responsive.

## 3️⃣ JavaScript (JS)
JavaScript makes webpages **interactive**.

- **DOM Manipulation**: Modify HTML elements dynamically.
- **Event Handling**: Respond to user actions like clicks and keypresses.
- **Asynchronous JS**: Handles API calls using Promises and Async/Await.

## ⚡ Frameworks & Libraries
- **React.js**: A popular JS library for building UI components.
- **Bootstrap/Tailwind**: CSS frameworks for faster design.
`
    },

    "python-programming": {
        title: "Python Programming",
        content: `
# Python Programming  
Python is a **high-level, interpreted** programming language used for web development, data science, and automation.

## 1️⃣ Key Features
- **Simple & Readable**: Uses indentation instead of curly braces.
- **Dynamically Typed**: No need to declare variable types.
- **Multi-Paradigm**: Supports Object-Oriented & Functional programming.

## 2️⃣ Python Basics
- **Data Types**: Strings, Lists, Tuples, Dictionaries.
- **Control Flow**: If-else statements, Loops (for, while).
- **Functions**: Defined using \`def function_name():\`.

## 3️⃣ Object-Oriented Programming (OOP)
- **Class & Objects**: Defines real-world entities.
- **Encapsulation, Inheritance, Polymorphism**: Core OOP concepts.

## 4️⃣ Python for Web Development
- **Flask & Django**: Web frameworks to build APIs & web apps.

## 5️⃣ Data Science & Machine Learning
- **NumPy, Pandas**: Data analysis libraries.
- **Scikit-Learn**: ML model training and evaluation.
`
    },

    "java-development": {
        title: "Java Development",
        content: `
# Java Development  
Java is a **robust, object-oriented** programming language used in enterprise applications, mobile development, and backend systems.

## 1️⃣ Features of Java
- **Platform-Independent**: Runs on JVM (Java Virtual Machine).
- **Memory Management**: Uses Garbage Collection.
- **Multi-threading**: Supports concurrent programming.

## 2️⃣ Java Basics
- **Variables & Data Types**: int, float, char, String.
- **Control Structures**: If-else, loops, switch.
- **Methods & Functions**: Defined using \`public void methodName()\`.

## 3️⃣ Object-Oriented Programming (OOP)
- **Encapsulation**: Protects data with private variables.
- **Inheritance**: Allows a class to inherit another.
- **Polymorphism**: Supports method overloading & overriding.

## 4️⃣ Java for Web Development
- **Spring Boot**: A popular Java backend framework.
- **Servlets & JSP**: Used for server-side applications.

## 5️⃣ Java in Competitive Programming
- **Efficient Memory Handling**: Java is widely used in DSA.
- **Libraries like Collections Framework**: Makes coding easier.
`
    },
    "data-structures": {
        title: "Data Structures",
        content: `
# Data Structures  
Data structures are used to **store, organize, and manipulate** data efficiently. They help in optimizing time and space complexity.

## 1️⃣ Arrays & Linked Lists  
- **Arrays**: Fixed-size, contiguous memory storage. Access time is **O(1)**, but inserting/deleting is costly **O(n)**.  
- **Linked Lists**: Dynamically allocated memory with pointers. Operations like insertion & deletion are **O(1) in best case**.

## 2️⃣ Stacks & Queues  
- **Stack (LIFO - Last In, First Out)**: Used in recursion, backtracking, undo operations.  
  - Operations: \`push()\`, \`pop()\`, \`peek()\` (All **O(1)**).  
- **Queue (FIFO - First In, First Out)**: Used in scheduling, buffering.  
  - Types: **Simple Queue, Circular Queue, Priority Queue, Deque**.

## 3️⃣ Trees & Graphs  
- **Binary Tree**: Hierarchical data structure, each node has **at most 2 children**.  
- **Binary Search Tree (BST)**: A binary tree where left < root < right, used in searching **O(log n)**.  
- **Graph**: Consists of **nodes (vertices) and edges**. Used in networks, maps, social media connections.  
  - **Graph Traversal**: BFS (Breadth-First Search), DFS (Depth-First Search).

## 4️⃣ Sorting Algorithms  
Sorting arranges data in a logical order. Common algorithms:  
- **Bubble Sort**: Easy but slow **O(n²)**.  
- **Selection Sort**: Finds the smallest element **O(n²)**.  
- **Merge Sort**: Divide & Conquer, efficient **O(n log n)**.  
- **QuickSort**: Picks a pivot, efficient **O(n log n) on average**.  
- **Heap Sort**: Uses a binary heap, best for priority queues **O(n log n)**.
`
    },

    "Android-Development": {
        title: "Android Development",
        content: `
# Android Development  
Android development focuses on **creating mobile applications** for Android devices.

## 1️⃣ Java & Kotlin  
- **Java**: Object-oriented, widely used in Android development.  
- **Kotlin**: Modern alternative to Java, safer and concise. Official language for Android apps.

## 2️⃣ Android Studio  
- **Official IDE** for developing Android apps.  
- Includes Emulator, Debugging tools, and UI Designer.

## 3️⃣ Activity & Fragment Lifecycle  
- **Activity**: Represents a screen in an app.  
  - Lifecycle: \`onCreate()\`, \`onStart()\`, \`onResume()\`, \`onPause()\`, \`onStop()\`, \`onDestroy()\`.  
- **Fragment**: A reusable UI component within an activity.

## 4️⃣ UI/UX Design  
- **XML Layouts**: Used to define app UI.  
- **Jetpack Compose**: Modern UI toolkit for building native interfaces.

## 5️⃣ Networking in Android  
- **REST APIs**: Used for web communication.  
- **Retrofit**: A powerful HTTP client for API calls.  
- **Volley**: Google’s networking library for handling HTTP requests.

## 6️⃣ Database Management  
- **SQLite**: Local database for storing structured data.  
- **Room Database**: Abstraction over SQLite for better management.

## 7️⃣ Firebase & Cloud Integration  
- **Firebase Authentication**: Login/Signup using Google, Email, etc.  
- **Realtime Database**: Cloud database that syncs data instantly.  
- **Cloud Firestore**: Scalable NoSQL database for real-time applications.  
`
    },

    "Machine-Learning": {
        title: "Machine Learning",
        content: `
# Machine Learning  
Machine learning enables computers to **learn from data** and improve predictions without being explicitly programmed.

## 1️⃣ Types of Machine Learning  
- **Supervised Learning**: Uses labeled data for training.  
  - **Algorithms**: Linear Regression, Logistic Regression, Decision Trees, Random Forest, SVM.  
- **Unsupervised Learning**: No labeled data, finds patterns.  
  - **Algorithms**: K-Means Clustering, DBSCAN, PCA.  
- **Reinforcement Learning**: Learns by taking actions and receiving rewards (e.g., AlphaGo, Robotics).

## 2️⃣ Neural Networks & Deep Learning  
- **Artificial Neural Networks (ANNs)**: Inspired by the human brain.  
- **Convolutional Neural Networks (CNNs)**: Used for image recognition.  
- **Recurrent Neural Networks (RNNs)**: Used for sequential data like speech and text.  
- **Transformers**: Advanced architectures like GPT and BERT for NLP.

## 3️⃣ Feature Engineering & Data Preprocessing  
- **Feature Scaling**: Normalization, Standardization.  
- **Handling Missing Data**: Mean/Median Imputation, Dropping rows.  
- **Dimensionality Reduction**: PCA, t-SNE.

## 4️⃣ Model Evaluation & Performance Metrics  
- **Classification**: Accuracy, Precision, Recall, F1-Score, AUC-ROC.  
- **Regression**: RMSE, MAE, R² Score.

## 5️⃣ Libraries & Tools  
- **Scikit-learn**: Classical ML algorithms.  
- **TensorFlow & Keras**: Deep learning frameworks.  
- **PyTorch**: Used in research and production for deep learning.

## 6️⃣ Deployment & Model Serving  
- **Flask / FastAPI**: Serve ML models as APIs.  
- **Docker & Kubernetes**: Containerization for scalable deployment.  
- **Cloud Deployment**: AWS, Google Cloud, Azure ML.
`
    }
};

const CoursePage: React.FC = () => {
    const { courseId } = useParams<{ courseId: string }>();
    const course = studyContent[courseId];

    if (!course) {
        return <div className="text-center mt-10 text-red-500">Course not found</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-bold">{course.title}</h1>
                <div className="mt-4 text-gray-700">
                    <ReactMarkdown>{course.content}</ReactMarkdown>
                </div>

                <Link
                    to={`/test/${courseId}`}
                    className="block mt-6 text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                >
                    Take Test
                </Link>
            </div>
        </div>
    );
};

export default CoursePage;


