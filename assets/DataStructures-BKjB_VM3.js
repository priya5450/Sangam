import{j as e}from"./index-CNsAis2L.js";const t=()=>e.jsxs("div",{className:"p-6",children:[e.jsx("h1",{className:"text-3xl font-bold text-blue-600",children:"Data Structures Course"}),e.jsx("p",{className:"text-gray-700 mt-2",children:"Welcome to the Data Structures Course, where you will learn about essential data structures, their implementations, and how to use them efficiently in programming."}),e.jsx("p",{className:"mt-2",children:"This course will cover arrays, linked lists, stacks, queues, trees, graphs, heaps, hash tables, and more. By the end, you'll be able to optimize your code for better performance and solve complex problems effectively."}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 1: Introduction to Data Structures"}),e.jsx("h3",{className:"text-xl font-semibold mt-4",children:"1.1 What are Data Structures?"}),e.jsx("p",{className:"mt-2",children:"A data structure is a way of organizing, managing, and storing data for efficient access and modification."})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 2: Arrays"}),e.jsx("h3",{className:"text-xl font-semibold mt-4",children:"2.1 Introduction to Arrays"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`arr = [1, 2, 3, 4]
arr.append(5)  # Adding element at the end
print(arr)`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 3: Linked Lists"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`class Node:
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
ll.display()`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 4: Stacks"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`stack = []
stack.append(10)  # Push
stack.append(20)
print(stack.pop())  # Pop`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 5: Queues"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`from collections import deque

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
print(q.dequeue())  # Output: 10`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 6: Trees"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`class Node:
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
inorder(root)  # Output: 5 10 15`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 7: Graphs"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`graph = {
    "A": ["B", "C"],
    "B": ["A", "D", "E"],
    "C": ["A", "F"],
    "D": ["B"],
    "E": ["B", "F"],
    "F": ["C", "E"]
}`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h3",{className:"text-xl font-semibold",children:"Breadth-First Search (BFS)"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])

    while queue:
        node = queue.popleft()
        if node not in visited:
            print(node, end=" ")
            visited.add(node)
            queue.extend(graph[node])

bfs(graph, "A")  # Output: A B C D E F`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Final Projects"}),e.jsxs("ul",{className:"list-disc pl-5 mt-2",children:[e.jsx("li",{children:"✔ Implement a File System using Trees"}),e.jsx("li",{children:"✔ Build a Graph-Based Social Network Recommendation System"}),e.jsx("li",{children:"✔ Develop a Task Scheduler using Queues"})]})]})]});export{t as default};
