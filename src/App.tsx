// import React from 'react';
// import { Play } from 'lucide-react';

// interface CourseCard {
//   title: string;
//   description: string;
//   image: string;
//   playlistUrl: string;
// }

// const courses: CourseCard[] = [
//   {
//     title: "Web Development",
//     description: "Master HTML, CSS, and JavaScript to build modern responsive websites",
//     image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
//     playlistUrl: "https://www.youtube.com/playlist?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w"
//   },
//   {
//     title: "Python Programming",
//     description: "Learn Python from basics to advanced concepts with practical projects",
//     image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0",
//     playlistUrl: "https://www.youtube.com/playlist?list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME"
//   },
//   {
//     title: "Java Development",
//     description: "Comprehensive Java programming from fundamentals to enterprise applications",
//     image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
//     playlistUrl: "https://www.youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q"
//   },
//   {
//     title: "Data Structures",
//     description: "Master essential data structures and algorithms for better problem-solving",
//     image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d",
//     playlistUrl: "https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi"
//   },
//   {
//     title: "React.js",
//     description: "Build modern user interfaces with React.js and its ecosystem",
//     image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
//     playlistUrl: "https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt"
//   },
//   {
//     title: "Node.js",
//     description: "Server-side JavaScript programming with Node.js and Express",
//     image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef",
//     playlistUrl: "https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt"
//   },
//   {
//     title: "Android Development",
//     description: "Create mobile applications for Android using Kotlin and Android Studio",
//     image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb",
//     playlistUrl: "https://www.youtube.com/playlist?list=PLu0W_9lII9aiL0kysYlfSOUgY5rNlOhUd"
//   },
//   {
//     title: "Machine Learning",
//     description: "Explore ML algorithms and build intelligent applications",
//     image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
//     playlistUrl: "https://www.youtube.com/playlist?list=PLu0W_9lII9ai6fAMHp-acBmJONT7Y4BSG"
//   },
//   {
//     title: "C++ Programming",
//     description: "Learn C++ programming from basics to advanced concepts",
//     image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
//     playlistUrl: "https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL"
//   },
//   {
//     title: "Database Management",
//     description: "Master SQL and database design principles",
//     image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",
//     playlistUrl: "https://www.youtube.com/playlist?list=PLu0W_9lII9alpVj7G7YEkd98OpCxUMsq8"
//   },
//   {
//     title: "DevOps",
//     description: "Learn modern DevOps practices and tools",
//     image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9",
//     playlistUrl: "https://www.youtube.com/playlist?list=PLu0W_9lII9aXZYTZk1_WUFzQ0iN5-_jC4"
//   },
//   {
//     title: "Cloud Computing",
//     description: "Explore cloud platforms and services",
//     image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
//     playlistUrl: "https://www.youtube.com/playlist?list=PLu0W_9lII9aGZZjXkwqcD0WT0GwK_IT1J"
//   }
// ];

// function App() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//       {/* Header Section */}
//       <header className="py-12 px-4 text-center">
//         <h1 className="text-5xl font-bold text-gray-800 mb-4 tracking-tight">
//           Sangam
//         </h1>
//         <p className="text-xl text-gray-600">
//           Connecting Students with Alumni
//         </p>
//       </header>

//       {/* Course Grid */}
//       <div className="container mx-auto px-4 pb-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {courses.map((course, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
//             >
//               <div className="relative h-48">
//                 <img
//                   src={`${course.image}?auto=format&fit=crop&w=800&q=80`}
//                   alt={course.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                   {course.title}
//                 </h3>
//                 <p className="text-gray-600 mb-4 h-16">
//                   {course.description}
//                 </p>
//                 <a
//                   href={course.playlistUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg transition-colors duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                 >
//                   <Play className="w-4 h-4 mr-2" />
//                   Watch Now
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseList from "./components/CourseList";
import CoursePage from "./components/CoursePage";
import TestPage from "./components/TestPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/course/:courseId" element={<CoursePage />} />
        <Route path="/test/:courseId" element={<TestPage />} />  {/* ✅ Test Page Route */}
      </Routes>
    </Router>
  );
};

export default App;
