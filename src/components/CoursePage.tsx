
import React, { lazy, Suspense } from "react";
import { useParams, Link } from "react-router-dom";

// Lazy load course components
const courses: Record<string, React.LazyExoticComponent<React.FC>> = {
    "web-development": lazy(() => import("../courses/WebDevelopment")),
    "python-programming": lazy(() => import("../courses/PythonProgramming")),
    "java-development": lazy(() => import("../courses/JavaDevelopment")),
    "data-structures": lazy(() => import("../courses/DataStructures")),
    "android-development": lazy(() => import("../courses/AndroidDevelopment")),
    "machine-learning": lazy(() => import("../courses/MachineLearning")),
};

const CoursePage: React.FC = () => {
    const { courseId } = useParams<{ courseId: string }>();
    const CourseComponent = courses[courseId];

    if (!CourseComponent) {
        return <div className="text-center mt-10 text-red-500">Course not found</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
                <Suspense fallback={<div className="text-center">Loading course content...</div>}>
                    <CourseComponent />
                </Suspense>

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
