import{j as e}from"./index-CNsAis2L.js";const a=()=>e.jsxs("div",{className:"p-6",children:[e.jsx("h1",{className:"text-3xl font-bold text-blue-600",children:"Java Development Course"}),e.jsx("p",{className:"text-gray-700 mt-2",children:"Welcome to the Java Development Course, a comprehensive learning journey designed for beginners and professionals alike. This course will take you from the fundamentals of Java to advanced topics like web development, microservices, and cloud deployment."}),e.jsx("p",{className:"mt-2",children:"By the end of this course, you will have the skills to develop robust, scalable, and efficient Java applications."}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 1: Introduction to Java"}),e.jsx("h3",{className:"text-xl font-semibold mt-4",children:"1.1 What is Java?"}),e.jsx("p",{className:"mt-2",children:'Java is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle). It is known for its "Write Once, Run Anywhere" (WORA) capability.'})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h3",{className:"text-xl font-semibold",children:"1.2 Setting Up the Development Environment"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`})}),e.jsx("p",{className:"mt-2",children:"Compile and run it using:"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`javac HelloWorld.java  
java HelloWorld`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 2: Java Basics"}),e.jsx("h3",{className:"text-xl font-semibold mt-4",children:"2.1 Data Types and Variables"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`int age = 25;
double price = 99.99;
String name = "John Doe";`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 3: Object-Oriented Programming (OOP) in Java"}),e.jsx("h3",{className:"text-xl font-semibold mt-4",children:"3.1 Classes and Objects"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`class Car {
    String brand;
    int speed;

    void display() {
        System.out.println("Brand: " + brand + ", Speed: " + speed);
    }
}
public class Main {
    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.brand = "Toyota";
        myCar.speed = 120;
        myCar.display();
    }
}`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 4: Java Collections Framework (JCF)"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`import java.util.ArrayList;
public class ListExample {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        names.add("Alice");
        names.add("Bob");
        System.out.println(names);
    }
}`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 5: Multithreading in Java"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running...");
    }
}
public class Main {
    public static void main(String[] args) {
        MyThread t = new MyThread();
        t.start();
    }
}`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 6: Java Web Development"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`import java.io.IOException;
import javax.servlet.http.*;

public class HelloServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.getWriter().println("Hello, Web!");
    }
}`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 7: REST APIs with Spring Boot"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`@RestController
@RequestMapping("/api")
public class UserController {
    @GetMapping("/users")
    public List<String> getUsers() {
        return Arrays.asList("Alice", "Bob", "Charlie");
    }
}`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 8: Database Connectivity with JDBC"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "user", "password");
Statement stmt = con.createStatement();
ResultSet rs = stmt.executeQuery("SELECT * FROM users");`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Final Project: Full-Stack Java Application"}),e.jsxs("ul",{className:"list-disc pl-5 mt-2",children:[e.jsx("li",{children:"✅ Backend uses Spring Boot + MySQL"}),e.jsx("li",{children:"✅ Frontend uses React/Angular"}),e.jsx("li",{children:"✅ REST APIs enable user registration and job postings"})]})]})]});export{a as default};
