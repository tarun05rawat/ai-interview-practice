"use client";

interface InterviewLayoutProps {
  children: React.ReactNode;
  progress: number;
}

export default function InterviewLayout({
  children,
  progress,
}: InterviewLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Progress bar */}
      <div className="h-2 bg-gray-200">
        <div
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">{children}</div>
    </div>
  );
}
