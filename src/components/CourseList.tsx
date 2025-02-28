
import React from "react";
import { Link } from "react-router-dom";
import courses from "../data/courses";

const CourseList = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center">Available Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {courses.map((course, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={course.image}
              alt={course.title}
              className="rounded-lg w-full h-80 object-cover"
            />
            <h2 className="text-xl font-semibold mt-2">{course.title}</h2>
            <p className="text-gray-600 mt-1">{course.description}</p>
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              {/* View Content Button */}
              <Link
                to={course.contentUrl}
                className="flex-1 text-center bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
              >
                View Content
              </Link>

              {/* Watch Now Button */}
              <a
                href={course.playlistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
              >
                Watch Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;

