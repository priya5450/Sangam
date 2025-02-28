import React from "react";

const DataStructures: React.FC = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-blue-600">Data Structures Course</h1>
            <p className="text-gray-700 mt-2">
                Welcome to the Data Structures Course, where you will learn about essential data structures, their implementations, and how to use them efficiently in programming.
            </p>
            <p className="mt-2">
                This course will cover arrays, linked lists, stacks, queues, trees, graphs, heaps, hash tables, and more.
                By the end, you'll be able to optimize your code for better performance and solve complex problems effectively.
            </p>

            {/* Module 1 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 1: Introduction to Data Structures</h2>
                <h3 className="text-xl font-semibold mt-4">1.1 What are Data Structures?</h3>
                <p className="mt-2">
                    A data structure is a way of organizing, managing, and storing data for efficient access and modification.
                </p>
            </section>

            {/* Module 2 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 2: Arrays</h2>
                <h3 className="text-xl font-semibold mt-4">2.1 Introduction to Arrays</h3>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`arr = [1, 2, 3, 4]
arr.append(5)  # Adding element at the end
print(arr)`}
                    </code>
                </pre>
            </section>

            {/* Module 3 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 3: Linked Lists</h2>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def insert(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def display(self):
        temp = self.head
        while temp:
            print(temp.data, end=" -> ")
            temp = temp.next
        print("None")

ll = LinkedList()
ll.insert(10)
ll.insert(20)
ll.display()`}
                    </code>
                </pre>
            </section>

            {/* Module 4 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 4: Stacks</h2>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`stack = []
stack.append(10)  # Push
stack.append(20)
print(stack.pop())  # Pop`}
                    </code>
                </pre>
            </section>

            {/* Module 5 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 5: Queues</h2>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`from collections import deque

class Queue:
    def __init__(self):
        self.queue = deque()

    def enqueue(self, data):
        self.queue.append(data)

    def dequeue(self):
        if not self.is_empty():
            return self.queue.popleft()
        return "Queue is empty"

    def is_empty(self):
        return len(self.queue) == 0

q = Queue()
q.enqueue(10)
q.enqueue(20)
print(q.dequeue())  # Output: 10`}
                    </code>
                </pre>
            </section>

            {/* Module 6 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 6: Trees</h2>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`class Node:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key

def inorder(root):
    if root:
        inorder(root.left)
        print(root.val, end=" ")
        inorder(root.right)

root = Node(10)
root.left = Node(5)
root.right = Node(15)
inorder(root)  # Output: 5 10 15`}
                    </code>
                </pre>
            </section>

            {/* Module 7 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 7: Graphs</h2>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`graph = {
    "A": ["B", "C"],
    "B": ["A", "D", "E"],
    "C": ["A", "F"],
    "D": ["B"],
    "E": ["B", "F"],
    "F": ["C", "E"]
}`}
                    </code>
                </pre>
            </section>

            {/* BFS */}
            <section className="mt-6">
                <h3 className="text-xl font-semibold">Breadth-First Search (BFS)</h3>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])

    while queue:
        node = queue.popleft()
        if node not in visited:
            print(node, end=" ")
            visited.add(node)
            queue.extend(graph[node])

bfs(graph, "A")  # Output: A B C D E F`}
                    </code>
                </pre>
            </section>

            {/* Final Projects */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Final Projects</h2>
                <ul className="list-disc pl-5 mt-2">
                    <li>✔ Implement a File System using Trees</li>
                    <li>✔ Build a Graph-Based Social Network Recommendation System</li>
                    <li>✔ Develop a Task Scheduler using Queues</li>
                </ul>
            </section>
        </div>
    );
};

export default DataStructures;
