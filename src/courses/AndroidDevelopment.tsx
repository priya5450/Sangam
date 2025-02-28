import React from "react";

const AndroidDevelopment: React.FC = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-blue-600">Android Development Course</h1>
            <p className="text-gray-700 mt-2">
                Welcome to the Android Development Course, where you will learn how to build Android applications from scratch.
                This course covers Java/Kotlin, UI design, backend integration, database management, APIs, Firebase, and app deployment.
            </p>
            <p className="mt-2">By the end, you’ll be able to create real-world Android apps.</p>

            {/* Module 1 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 1: Introduction to Android Development</h2>
                <h3 className="text-xl font-semibold mt-4">1.1 What is Android Development?</h3>
                <p className="mt-2">
                    Android development is the process of building applications for devices running the Android operating system.
                </p>
            </section>

            {/* Setting Up */}
            <section className="mt-6">
                <h3 className="text-xl font-semibold">1.2 Setting Up Your Development Environment</h3>
                <ul className="list-disc pl-5 mt-2">
                    <li>Install Android Studio – The official IDE for Android development.</li>
                    <li>Set Up an Emulator or use a real device for testing.</li>
                    <li>Install Java/Kotlin SDK – Required for Android app development.</li>
                </ul>
            </section>

            {/* Module 2 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 2: Kotlin for Android Development</h2>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`fun main() {
    val name = "Android Developer"
    println("Hello, $name!")
}`}
                    </code>
                </pre>
            </section>

            {/* Module 3 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 3: Android Project Structure</h2>
                <ul className="list-disc pl-5 mt-2">
                    <li><strong>MainActivity.kt:</strong> Handles the app’s logic.</li>
                    <li><strong>activity_main.xml:</strong> Defines the UI layout.</li>
                    <li><strong>AndroidManifest.xml:</strong> Contains app configurations.</li>
                    <li><strong>Gradle Scripts:</strong> Handles dependencies.</li>
                </ul>
            </section>

            {/* Module 4 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 4: User Interface (UI) Design with XML</h2>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`<TextView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Hello Android!" />`}
                    </code>
                </pre>
            </section>

            {/* Module 5 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 5: Activities and Intents</h2>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`val intent = Intent(this, SecondActivity::class.java)
startActivity(intent)`}
                    </code>
                </pre>
            </section>

            {/* Module 6 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 6: Working with Fragments</h2>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`class ExampleFragment : Fragment(R.layout.fragment_example)`}
                    </code>
                </pre>
            </section>

            {/* Module 7 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 7: Handling User Input</h2>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`val button: Button = findViewById(R.id.button)
button.setOnClickListener {
    Toast.makeText(this, "Button Clicked!", Toast.LENGTH_SHORT).show()
}`}
                    </code>
                </pre>
            </section>

            {/* Module 8 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 8: Working with RecyclerView</h2>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`class MyAdapter(private val items: List<String>) : RecyclerView.Adapter<MyAdapter.ViewHolder>() {
    class ViewHolder(view: View) : RecyclerView.ViewHolder(view)

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val view = LayoutInflater.from(parent.context).inflate(R.layout.item_layout, parent, false)
        return ViewHolder(view)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        holder.itemView.textView.text = items[position]
    }

    override fun getItemCount() = items.size
}`}
                    </code>
                </pre>
            </section>

            {/* Final Projects */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Final Projects</h2>
                <ul className="list-disc pl-5 mt-2">
                    <li>✔ Weather App (API Integration)</li>
                    <li>✔ Chat Application (Firebase Authentication & Database)</li>
                    <li>✔ To-Do App (SQLite Database)</li>
                    <li>✔ E-commerce App (RecyclerView, API Calls, Firebase)</li>
                </ul>
            </section>
        </div>
    );
};

export default AndroidDevelopment;
