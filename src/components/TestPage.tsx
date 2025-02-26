// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import testQuestions from "../data/testQuestions";

// const TestPage = () => {
//   const { courseId } = useParams(); // Get courseId from URL
//   const navigate = useNavigate();

//   const questions = testQuestions[courseId]; // Fetch relevant questions

//   const [score, setScore] = useState(0);
//   const [current, setCurrent] = useState(0);

//   if (!questions) {
//     return <div className="text-center mt-10 text-red-500">Test not found for this course</div>;
//   }

//   const handleAnswer = (selectedIndex) => {
//     if (selectedIndex === questions[current].answer) {
//       setScore(score + questions[current].points);
//     }
//     if (current + 1 < questions.length) {
//       setCurrent(current + 1);
//     } else {
//       alert(`Test completed! Your score: ${score + questions[current].points}`);
//       navigate("/");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 text-center">
//         <h1 className="text-3xl font-bold">Test: {courseId.replace("-", " ").toUpperCase()}</h1>
//         <h2 className="text-xl mt-4">{questions[current].question}</h2>
        
//         <div className="mt-4 flex flex-col gap-3">
//           {questions[current].options.map((option, index) => (
//             <button
//               key={index}
//               onClick={() => handleAnswer(index)}
//               className="bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
//             >
//               {option}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestPage;


// import React, { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
// import testQuestions from "../data/testQuestions";

// const TestPage = () => {
//   const { courseId } = useParams();
//   const questions = testQuestions[courseId] || [];

//   const [score, setScore] = useState(0);
//   const [current, setCurrent] = useState(0);
//   const [correctCount, setCorrectCount] = useState(0);
//   const [wrongCount, setWrongCount] = useState(0);
//   const [testCompleted, setTestCompleted] = useState(false);
//   const navigate = useNavigate();

//   const handleAnswer = (selected) => {
//     if (selected === questions[current].answer) {
//       setScore(score + questions[current].points);
//       setCorrectCount(correctCount + 1);
//     } else {
//       setWrongCount(wrongCount + 1);
//     }

//     if (current + 1 < questions.length) {
//       setCurrent(current + 1);
//     } else {
//       setTestCompleted(true);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       {!testCompleted ? (
//         <div className="max-w-2xl mx-auto bg-white p-6 shadow-lg rounded-lg">
//           <h1 className="text-2xl font-bold mb-4">Test: {courseId.replace("-", " ").toUpperCase()}</h1>
//           <h2 className="text-lg font-semibold">{questions[current].question}</h2>
//           <div className="mt-4 space-y-2">
//             {questions[current].options.map((option, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleAnswer(index)}
//                 className="block w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//               >
//                 {option}
//               </button>
//             ))}
//           </div>
//         </div>
//       ) : (
//         <div className="max-w-2xl mx-auto bg-white p-6 shadow-lg rounded-lg text-center">
//           <h1 className="text-3xl font-bold text-green-600">Test Completed!</h1>
//           <p className="text-lg mt-2">Your Score: <span className="font-bold">{score}</span></p>

//           {/* Bar Chart Visualization */}
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={[{ name: "Answers", Correct: correctCount, Wrong: wrongCount }]}>
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="Correct" fill="#4CAF50" />
//               <Bar dataKey="Wrong" fill="#F44336" />
//             </BarChart>
//           </ResponsiveContainer>

//           <button
//             onClick={() => navigate("/")}
//             className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
//           >
//             Back to Courses
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TestPage;


import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import testQuestions from "../data/testQuestions";

const TestPage = () => {
  const { courseId } = useParams();
  const questions = testQuestions[courseId] || [];

  const [score, setScore] = useState(0);
  const [current, setCurrent] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [testCompleted, setTestCompleted] = useState(false);
  const [answers, setAnswers] = useState([]);

  const navigate = useNavigate();

  const handleAnswer = (selected) => {
    const isCorrect = selected === questions[current].answer;

    setAnswers([...answers, { 
      question: questions[current].question, 
      selectedAnswer: questions[current].options[selected], 
      correctAnswer: questions[current].options[questions[current].answer], 
      isCorrect 
    }]);

    if (isCorrect) {
      setScore(score + questions[current].points);
      setCorrectCount(correctCount + 1);
    } else {
      setWrongCount(wrongCount + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setTestCompleted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {!testCompleted ? (
        <div className="max-w-2xl mx-auto bg-white p-6 shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold mb-4">Test: {courseId.replace("-", " ").toUpperCase()}</h1>
          <h2 className="text-lg font-semibold">{questions[current].question}</h2>
          <div className="mt-4 space-y-2">
            {questions[current].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="block w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto bg-white p-6 shadow-lg rounded-lg text-center">
          <h1 className="text-3xl font-bold text-green-600">Test Completed!</h1>
          <p className="text-lg mt-2">Your Score: <span className="font-bold">{score}</span></p>

          {/* Bar Chart Visualization */}
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[{ name: "Answers", Correct: correctCount, Wrong: wrongCount }]}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Correct" fill="#4CAF50" />
              <Bar dataKey="Wrong" fill="#F44336" />
            </BarChart>
          </ResponsiveContainer>

          {/* Answer Review Section */}
          <div className="mt-6 text-left">
            <h2 className="text-xl font-bold mb-3">Review Your Answers</h2>
            <ul className="space-y-3">
              {answers.map((answer, index) => (
                <li key={index} className={`p-3 rounded-lg ${answer.isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                  <p className="font-semibold">{index + 1}. {answer.question}</p>
                  <p className="text-sm">Your Answer: <span className={answer.isCorrect ? "text-green-600 font-bold" : "text-red-600 font-bold"}>{answer.selectedAnswer}</span></p>
                  {!answer.isCorrect && (
                    <p className="text-sm">Correct Answer: <span className="text-green-600 font-bold">{answer.correctAnswer}</span></p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => navigate("/")}
            className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
          >
            Back to Courses
          </button>
        </div>
      )}
    </div>
  );
};

export default TestPage;
