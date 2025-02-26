const testQuestions = {
    "web-development": [
        {
            question: "What does HTML stand for?",
            options: ["Hyper Text Markup Language", "High Text Machine Learning", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
            answer: 0, // Index of correct answer
            points: 1
          },
          {
            question: "Which CSS property is used to change the text color of an element?",
            options: ["font-color", "text-color", "color", "background-color"],
            answer: 2,
            points: 1
          },
          {
            question: "Which of the following is NOT a JavaScript framework?",
            options: ["React", "Vue", "Django", "Angular"],
            answer: 2,
            points: 1
          },
          {
            question: "Which of the following is used to declare a constant variable in JavaScript?",
            options: ["var", "let", "const", "static"],
            answer: 2,
            points: 1
          },
          {
            question: "Which HTTP method is used to submit form data?",
            options: ["GET", "POST", "PUT", "DELETE"],
            answer: 1,
            points: 1
          },
          {
            question: "What is the purpose of React Router?",
            options: ["To manage API requests", "To enable client-side routing", "To handle animations", "To manage global state"],
            answer: 1,
            points: 1
          },
          {
            question: "Which database is a NoSQL database?",
            options: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
            answer: 1,
            points: 1
          },
          {
            question: "Which of the following is a backend framework?",
            options: ["Bootstrap", "React", "Express.js", "Tailwind CSS"],
            answer: 2,
            points: 1
          },
          {
            question: "What does CSS stand for?",
            options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
            answer: 1,
            points: 1
          },
          {
            question: "Which of the following is used for version control?",
            options: ["Git", "Node.js", "npm", "Webpack"],
            answer: 0,
            points: 1
          }
    ],
    "python-programming": [
        {
            question: "What is the correct extension of Python files?",
            options: [".py", ".pyt", ".pt", ".pyth"],
            answer: 0, // Index of correct answer
            points: 1
          },
          {
            question: "Which keyword is used to define a function in Python?",
            options: ["func", "define", "def", "function"],
            answer: 2,
            points: 1
          },
          {
            question: "What will `print(type([]))` output?",
            options: ["<class 'list'>", "<class 'dict'>", "<class 'set'>", "<class 'tuple'>"],
            answer: 0,
            points: 1
          },
          {
            question: "Which of the following is NOT a Python data type?",
            options: ["List", "Dictionary", "Tuple", "Array"],
            answer: 3,
            points: 1
          },
          {
            question: "Which function is used to get user input in Python 3?",
            options: ["get()", "input()", "scan()", "read()"],
            answer: 1,
            points: 1
          },
          {
            question: "What will be the output of `bool([])` in Python?",
            options: ["True", "False", "None", "Error"],
            answer: 1,
            points: 1
          },
          {
            question: "Which of the following is used to install external Python packages?",
            options: ["pip", "install", "setup", "import"],
            answer: 0,
            points: 1
          },
          {
            question: "What will be the output of `print(2 ** 3)` in Python?",
            options: ["5", "6", "8", "9"],
            answer: 2,
            points: 1
          },
          {
            question: "Which of the following is used to handle exceptions in Python?",
            options: ["try-except", "catch-throw", "error-handling", "exception-block"],
            answer: 0,
            points: 1
          },
          {
            question: "What is the output of `print('Hello' * 3)`?",
            options: ["HelloHelloHello", "Hello  Hello  Hello", "Error", "Hello, Hello, Hello"],
            answer: 0,
            points: 1
          },
          {
            question: "Which Python module is used for working with JSON data?",
            options: ["json", "csv", "pickle", "os"],
            answer: 0,
            points: 1
          },
          {
            question: "What is the output of `len({'a': 1, 'b': 2, 'c': 3})`?",
            options: ["3", "2", "1", "Error"],
            answer: 0,
            points: 1
          },
          {
            question: "Which statement is used to stop a loop in Python?",
            options: ["exit", "break", "stop", "terminate"],
            answer: 1,
            points: 1
          },
          {
            question: "Which built-in function returns the absolute value of a number?",
            options: ["absolute()", "abs()", "fabs()", "math.abs()"],
            answer: 1,
            points: 1
          },
          {
            question: "What will be the output of `print(5 // 2)`?",
            options: ["2.5", "2", "3", "2.0"],
            answer: 1,
            points: 1
          }
    ],
    "java-development": [
        {
            question: "What is the default value of an int variable in Java?",
            options: ["0", "null", "1", "undefined"],
            answer: 0, // Index of correct answer
            points: 1
          },
          {
            question: "Which keyword is used to create a class in Java?",
            options: ["class", "Class", "define", "create"],
            answer: 0,
            points: 1
          },
          {
            question: "Which of the following is not a primitive data type in Java?",
            options: ["int", "String", "float", "char"],
            answer: 1,
            points: 1
          },
          {
            question: "What is the size of the int data type in Java?",
            options: ["8 bits", "16 bits", "32 bits", "64 bits"],
            answer: 2,
            points: 1
          },
          {
            question: "Which method is called when an object is created in Java?",
            options: ["init()", "start()", "constructor", "create()"],
            answer: 2,
            points: 1
          },
          {
            question: "Which of the following is used to read input from the console in Java?",
            options: ["Scanner", "InputReader", "ConsoleReader", "BufferedReader"],
            answer: 0,
            points: 1
          },
          {
            question: "Which keyword is used to prevent method overriding in Java?",
            options: ["static", "abstract", "final", "private"],
            answer: 2,
            points: 1
          },
          {
            question: "Which collection class allows null elements in Java?",
            options: ["HashSet", "TreeSet", "Hashtable", "HashMap"],
            answer: 3,
            points: 1
          },
          {
            question: "What is the parent class of all classes in Java?",
            options: ["Object", "Main", "Parent", "Core"],
            answer: 0,
            points: 1
          },
          {
            question: "Which method is used to start a thread in Java?",
            options: ["run()", "start()", "init()", "begin()"],
            answer: 1,
            points: 1
          },
          {
            question: "Which exception is thrown when an array is accessed out of its bounds?",
            options: ["IOException", "ArrayIndexOutOfBoundsException", "NullPointerException", "ArithmeticException"],
            answer: 1,
            points: 1
          },
          {
            question: "Which access modifier makes a method accessible only within its own class?",
            options: ["public", "private", "protected", "default"],
            answer: 1,
            points: 1
          },
          {
            question: "Which of the following is a marker interface in Java?",
            options: ["Runnable", "Serializable", "Cloneable", "Both B and C"],
            answer: 3,
            points: 1
          },
          {
            question: "Which package is automatically imported in every Java program?",
            options: ["java.util", "java.lang", "java.io", "java.net"],
            answer: 1,
            points: 1
          },
          {
            question: "Which method is used to find the length of a string in Java?",
            options: ["length()", "size()", "getLength()", "count()"],
            answer: 0,
            points: 1
          }
    ],
    "data-structures": [
        {
            question: "Which data structure follows the FIFO (First In, First Out) principle?",
            options: ["Stack", "Queue", "Array", "Graph"],
            answer: 1, // Index of correct answer
            points: 1
          },
          {
            question: "What is the worst-case time complexity of searching in an unsorted array?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
            answer: 2,
            points: 1
          },
          {
            question: "Which of the following data structures allows insertion and deletion at both ends?",
            options: ["Queue", "Deque", "Stack", "Linked List"],
            answer: 1,
            points: 1
          },
          {
            question: "Which sorting algorithm has the best average-case time complexity?",
            options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Insertion Sort"],
            answer: 2,
            points: 1
          },
          {
            question: "Which data structure is used for implementing recursion?",
            options: ["Queue", "Stack", "Array", "Heap"],
            answer: 1,
            points: 1
          },
          {
            question: "What is the time complexity of inserting an element at the beginning of a linked list?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
            answer: 0,
            points: 1
          },
          {
            question: "Which of the following data structures is used in implementing priority queues?",
            options: ["Stack", "Heap", "Array", "Graph"],
            answer: 1,
            points: 1
          },
          {
            question: "In which tree, the difference between heights of left and right subtrees cannot be more than one?",
            options: ["Binary Search Tree", "AVL Tree", "B Tree", "Heap"],
            answer: 1,
            points: 1
          },
          {
            question: "Which data structure is best suited for implementing a LRU (Least Recently Used) cache?",
            options: ["Stack", "Queue", "HashMap + Doubly Linked List", "Binary Search Tree"],
            answer: 2,
            points: 1
          },
          {
            question: "What is the worst-case time complexity of QuickSort?",
            options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
            answer: 2,
            points: 1
          },
          {
            question: "Which traversal method of a Binary Search Tree (BST) results in sorted order?",
            options: ["Preorder", "Inorder", "Postorder", "Level Order"],
            answer: 1,
            points: 1
          },
          {
            question: "Which of the following graph representations uses an adjacency matrix?",
            options: ["List of edges", "Array of adjacency lists", "2D Array", "Binary Heap"],
            answer: 2,
            points: 1
          },
          {
            question: "Which data structure is used in Dijkstra’s algorithm to find the shortest path?",
            options: ["Stack", "Queue", "Priority Queue", "Linked List"],
            answer: 2,
            points: 1
          },
          {
            question: "Which of the following is a self-balancing binary search tree?",
            options: ["Binary Heap", "Red-Black Tree", "Trie", "Graph"],
            answer: 1,
            points: 1
          },
          {
            question: "What is the time complexity of inserting an element in a max-heap?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
            answer: 1,
            points: 1
          }
    ],
    "Android-Development":[
        {
            question: "Which programming languages are primarily used for Android development?",
            options: ["Java & Swift", "Java & Kotlin", "Python & C++", "HTML & JavaScript"],
            answer: 1, // Index of correct answer
            points: 1
          },
          {
            question: "Which component represents a single screen with a user interface in Android?",
            options: ["Service", "BroadcastReceiver", "Activity", "ContentProvider"],
            answer: 2,
            points: 1
          },
          {
            question: "What is the official IDE for Android development?",
            options: ["Eclipse", "Android Studio", "IntelliJ IDEA", "Visual Studio"],
            answer: 1,
            points: 1
          },
          {
            question: "Which XML file is used to define the UI layout in an Android app?",
            options: ["strings.xml", "styles.xml", "AndroidManifest.xml", "activity_main.xml"],
            answer: 3,
            points: 1
          },
          {
            question: "Which Android component is used to run background tasks?",
            options: ["Activity", "Service", "Fragment", "Intent"],
            answer: 1,
            points: 1
          },
          {
            question: "What is the entry point for an Android application?",
            options: ["Main.java", "HomeActivity", "MainActivity", "AndroidManifest.xml"],
            answer: 2,
            points: 1
          },
          {
            question: "Which library is used for HTTP networking in Android?",
            options: ["Volley", "Retrofit", "OkHttp", "All of the above"],
            answer: 3,
            points: 1
          },
          {
            question: "Which Android database provides structured storage for an app?",
            options: ["SQLite", "Firebase", "SharedPreferences", "Room Database"],
            answer: 0,
            points: 1
          },
          {
            question: "Which lifecycle method is called when an activity is no longer visible?",
            options: ["onPause()", "onDestroy()", "onStop()", "onRestart()"],
            answer: 2,
            points: 1
          },
          {
            question: "Which component is responsible for sending and receiving broadcasts in Android?",
            options: ["Service", "Activity", "BroadcastReceiver", "ContentProvider"],
            answer: 2,
            points: 1
          },
          {
            question: "What is the purpose of Android Jetpack?",
            options: ["To design custom UI components", "To simplify app development", "To build Android games", "To run JavaScript on Android"],
            answer: 1,
            points: 1
          },
          {
            question: "Which layout allows flexible arrangement of UI components?",
            options: ["LinearLayout", "RelativeLayout", "ConstraintLayout", "FrameLayout"],
            answer: 2,
            points: 1
          },
          {
            question: "What is the recommended way to store large amounts of structured data in Android?",
            options: ["SharedPreferences", "SQLite", "Internal Storage", "Cloud Storage"],
            answer: 1,
            points: 1
          },
          {
            question: "Which Android API is used to request runtime permissions?",
            options: ["checkSelfPermission()", "requestPermissions()", "grantPermission()", "Both A & B"],
            answer: 3,
            points: 1
          },
          {
            question: "Which Gradle file is used to define dependencies for an Android project?",
            options: ["AndroidManifest.xml", "gradle.properties", "settings.gradle", "build.gradle"],
            answer: 3,
            points: 1
          }

    ],
    "Machine-Learning":[
        {
            question: "What is Machine Learning?",
            options: [
              "A type of software testing",
              "A subset of Artificial Intelligence that enables systems to learn from data",
              "A programming language",
              "A database management system"
            ],
            answer: 1, // Index of correct answer
            points: 1
          },
          {
            question: "Which of the following is a type of Supervised Learning?",
            options: ["Clustering", "Classification", "Dimensionality Reduction", "Anomaly Detection"],
            answer: 1,
            points: 1
          },
          {
            question: "Which algorithm is used for classification problems?",
            options: ["Linear Regression", "Logistic Regression", "K-Means", "Apriori"],
            answer: 1,
            points: 1
          },
          {
            question: "Which of the following is an example of Unsupervised Learning?",
            options: ["Decision Trees", "K-Means Clustering", "Random Forest", "Naïve Bayes"],
            answer: 1,
            points: 1
          },
          {
            question: "What is Overfitting in Machine Learning?",
            options: [
              "When a model performs well on training data but poorly on new data",
              "When a model generalizes well on all datasets",
              "When a model has too few parameters",
              "When a model ignores the training data"
            ],
            answer: 0,
            points: 1
          },
          {
            question: "Which metric is used to evaluate classification models?",
            options: ["MSE (Mean Squared Error)", "Accuracy", "R-squared", "All of the above"],
            answer: 1,
            points: 1
          },
          {
            question: "Which technique is used to prevent Overfitting?",
            options: ["Dropout", "Feature Scaling", "Bagging", "Both A & C"],
            answer: 3,
            points: 1
          },
          {
            question: "Which library is commonly used for Machine Learning in Python?",
            options: ["TensorFlow", "NumPy", "Matplotlib", "Flask"],
            answer: 0,
            points: 1
          },
          {
            question: "Which of the following is NOT a Machine Learning algorithm?",
            options: ["Random Forest", "Gradient Boosting", "SQL", "Support Vector Machine"],
            answer: 2,
            points: 1
          },
          {
            question: "Which of the following is used to evaluate Regression models?",
            options: ["Confusion Matrix", "Precision & Recall", "Mean Absolute Error (MAE)", "F1-Score"],
            answer: 2,
            points: 1
          },
          {
            question: "Which of the following is an example of Deep Learning?",
            options: ["Linear Regression", "Support Vector Machines", "Convolutional Neural Networks", "Random Forest"],
            answer: 2,
            points: 1
          },
          {
            question: "What is the purpose of Gradient Descent in Machine Learning?",
            options: [
              "To increase the complexity of a model",
              "To find the optimal weights minimizing loss",
              "To measure the accuracy of a model",
              "To transform categorical data into numerical values"
            ],
            answer: 1,
            points: 1
          },
          {
            question: "What is the main advantage of using a Neural Network?",
            options: [
              "It requires no data preprocessing",
              "It can automatically extract features from raw data",
              "It is faster than all other ML algorithms",
              "It does not require any labeled data"
            ],
            answer: 1,
            points: 1
          },
          {
            question: "What is a Hyperparameter in Machine Learning?",
            options: [
              "A parameter that is learned during training",
              "A parameter set before training that affects learning",
              "A feature in the dataset",
              "A parameter that is used for model evaluation"
            ],
            answer: 1,
            points: 1
          },
          {
            question: "Which of the following methods is used for dimensionality reduction?",
            options: ["PCA (Principal Component Analysis)", "K-Means", "Decision Trees", "Naïve Bayes"],
            answer: 0,
            points: 1
          }
    ]

  };
  
  export default testQuestions;
  