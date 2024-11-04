"use client";

import { useState } from "react";
import AudioRecorder from "../components/AudioRecorder";
import Question from "../components/Question";
import InterviewLayout from "../components/InterviewLayout";

const mockQuestions = [
  {
    id: 1,
    question: "Tell me about yourself and your background.",
    category: "Introduction",
    tips: [
      "Focus on professional experiences",
      "Keep it under 2 minutes",
      "Highlight key achievements",
    ],
  },
  {
    id: 2,
    question: "What are your greatest professional strengths?",
    category: "Skills",
    tips: [
      "Provide specific examples",
      "Align with job requirements",
      "Be honest and confident",
    ],
  },
  {
    id: 3,
    question: "Where do you see yourself in five years?",
    category: "Career Goals",
    tips: ["Show ambition", "Be realistic", "Connect with the role"],
  },
];

export default function InterviewPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < mockQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const progress = ((currentQuestionIndex + 1) / mockQuestions.length) * 100;
  const currentQuestion = mockQuestions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-red-950">
      <InterviewLayout progress={progress}>
        <div className="max-w-4xl mx-auto p-6 text-gray-100">
          {/* Question counter */}
          <div className="text-sm font-medium text-gray-400 mb-8">
            Question {currentQuestionIndex + 1} of {mockQuestions.length}
          </div>

          {/* Main interview area */}
          <div className="grid gap-8 md:grid-cols-[2fr,1fr]">
            <div className="space-y-6 bg-gray-900 p-6 rounded-lg">
              <Question
                question={currentQuestion.question}
                category={currentQuestion.category}
              />
              <div className="flex justify-center">
                <AudioRecorder />
              </div>
            </div>

            {/* Tips sidebar */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-md h-fit border border-gray-800">
              <h3 className="font-semibold text-lg mb-4 text-gray-200">Tips</h3>
              <ul className="space-y-3">
                {currentQuestion.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span className="text-gray-300">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex justify-between">
            <button
              onClick={() =>
                setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))
              }
              disabled={currentQuestionIndex === 0}
              className="px-4 py-2 text-gray-300 bg-gray-900 rounded-md disabled:opacity-50 hover:bg-gray-800 transition-colors"
            >
              Previous
            </button>
            <button
              onClick={handleNextQuestion}
              disabled={currentQuestionIndex === mockQuestions.length - 1}
              className="px-4 py-2 text-white bg-blue-600 rounded-md disabled:opacity-50 hover:bg-blue-700 transition-colors"
            >
              Next Question
            </button>
          </div>
        </div>
      </InterviewLayout>
    </div>
  );
}