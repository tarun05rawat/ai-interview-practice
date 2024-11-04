import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Master Your Interview Skills
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Practice interviews with AI-powered feedback and improve your
            confidence
          </p>

          <Link
            href="/interview"
            className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200"
          >
            Start Practice Interview
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <FeatureCard
              title="Real-time Feedback"
              description="Get instant feedback on your responses and speaking style"
              icon="🎯"
            />
            <FeatureCard
              title="Industry Questions"
              description="Practice with questions from your specific industry"
              icon="💼"
            />
            <FeatureCard
              title="Track Progress"
              description="Monitor your improvement over time with detailed analytics"
              icon="📈"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
