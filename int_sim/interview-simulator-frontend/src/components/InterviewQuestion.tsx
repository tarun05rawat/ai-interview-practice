"use client";

interface Question {
  id: number;
  text: string;
  category: string;
}

export default function InterviewQuestion({
  question,
}: {
  question: Question;
}) {
  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-2">{question.text}</h2>
      <p className="text-gray-600">Category: {question.category}</p>
    </div>
  );
}
