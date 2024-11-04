interface QuestionProps {
  question: string;
  category: string;
}

export default function Question({ question, category }: QuestionProps) {
  return (
    <div>
      <div className="text-sm font-medium text-blue-600 mb-2">{category}</div>
      <h2 className="text-xl font-semibold">{question}</h2>
    </div>
  );
}
