import React from "react";

const JavaDevelopment: React.FC = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-blue-600">Java Development Course</h1>
            <p className="text-gray-700 mt-2">
                Welcome to the Java Development Course, a comprehensive learning journey designed for beginners and professionals alike.
                This course will take you from the fundamentals of Java to advanced topics like web development, microservices, and cloud deployment.
            </p>
            <p className="mt-2">By the end of this course, you will have the skills to develop robust, scalable, and efficient Java applications.</p>

            {/* Module 1 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 1: Introduction to Java</h2>
                <h3 className="text-xl font-semibold mt-4">1.1 What is Java?</h3>
                <p className="mt-2">
                    Java is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle). 
                    It is known for its "Write Once, Run Anywhere" (WORA) capability.
                </p>
            </section>

            {/* Setting Up Java */}
            <section className="mt-6">
                <h3 className="text-xl font-semibold">1.2 Setting Up the Development Environment</h3>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`}
                    </code>
                </pre>
                <p className="mt-2">Compile and run it using:</p>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`javac HelloWorld.java  
java HelloWorld`}
                    </code>
                </pre>
            </section>

            {/* Module 2 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 2: Java Basics</h2>
                <h3 className="text-xl font-semibold mt-4">2.1 Data Types and Variables</h3>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`int age = 25;
double price = 99.99;
String name = "John Doe";`}
                    </code>
                </pre>
            </section>

            {/* Module 3 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 3: Object-Oriented Programming (OOP) in Java</h2>
                <h3 className="text-xl font-semibold mt-4">3.1 Classes and Objects</h3>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`class Car {
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
}`}
                    </code>
                </pre>
            </section>

            {/* Module 4 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 4: Java Collections Framework (JCF)</h2>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`import java.util.ArrayList;
public class ListExample {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        names.add("Alice");
        names.add("Bob");
        System.out.println(names);
    }
}`}
                    </code>
                </pre>
            </section>

            {/* Module 5 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 5: Multithreading in Java</h2>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running...");
    }
}
public class Main {
    public static void main(String[] args) {
        MyThread t = new MyThread();
        t.start();
    }
}`}
                    </code>
                </pre>
            </section>

            {/* Module 6 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 6: Java Web Development</h2>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`import java.io.IOException;
import javax.servlet.http.*;

public class HelloServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.getWriter().println("Hello, Web!");
    }
}`}
                    </code>
                </pre>
            </section>

            {/* Module 7 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 7: REST APIs with Spring Boot</h2>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`@RestController
@RequestMapping("/api")
public class UserController {
    @GetMapping("/users")
    public List<String> getUsers() {
        return Arrays.asList("Alice", "Bob", "Charlie");
    }
}`}
                    </code>
                </pre>
            </section>

            {/* Module 8 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 8: Database Connectivity with JDBC</h2>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "user", "password");
Statement stmt = con.createStatement();
ResultSet rs = stmt.executeQuery("SELECT * FROM users");`}
                    </code>
                </pre>
            </section>

            {/* Final Project */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Final Project: Full-Stack Java Application</h2>
                <ul className="list-disc pl-5 mt-2">
                    <li>✅ Backend uses Spring Boot + MySQL</li>
                    <li>✅ Frontend uses React/Angular</li>
                    <li>✅ REST APIs enable user registration and job postings</li>
                </ul>
            </section>
        </div>
    );
};

export default JavaDevelopment;
