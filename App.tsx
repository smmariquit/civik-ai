
import React, { useState, useCallback } from 'react';

// Define a simple reusable SVG icon component (must be defined outside App)
const SparkleIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L25.5 5.25l-.813 2.846a4.5 4.5 0 0 0-3.09 3.09L18.75 12l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L25.5 18.75l-2.846-.813a4.5 4.5 0 0 0-3.09-3.09L18.25 12Z" />
  </svg>
);

// Define a reusable Button component (must be defined outside App)
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}
const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 ${className}`}
    >
      {children}
    </button>
  );
};

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [message, setMessage] = useState<string>('Welcome to the React Boilerplate!');

  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
    setMessage(`Counter updated! Current count is ${count + 1}.`);
  }, [count]); // Dependency on count is fine here as it's for message update logic

  const resetCount = useCallback(() => {
    setCount(0);
    setMessage('Counter reset to zero.');
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex flex-col items-center justify-center p-6 selection:bg-indigo-500 selection:text-white">
      <header className="mb-12 text-center">
        <div className="flex items-center justify-center mb-4">
          <SparkleIcon className="w-16 h-16 text-indigo-400 mr-4" />
          <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            React Boilerplate
          </h1>
          <SparkleIcon className="w-16 h-16 text-indigo-400 ml-4" />
        </div>
        <p className="text-xl text-gray-300 mt-2">
          A starting point for your amazing React applications.
        </p>
      </header>

      <main className="bg-gray-800 bg-opacity-50 backdrop-blur-md p-10 rounded-xl shadow-2xl w-full max-w-2xl border border-gray-700">
        <div className="text-center mb-8">
          <p className="text-lg text-gray-200 mb-2">
            {message}
          </p>
          <p className="text-6xl font-bold text-indigo-400 tabular-nums">
            {count}
          </p>
        </div>

        <div className="flex justify-center space-x-6">
          <Button onClick={incrementCount}>
            Increment
          </Button>
          <Button onClick={resetCount} className="bg-pink-600 hover:bg-pink-700 focus:ring-pink-500">
            Reset
          </Button>
        </div>
      </main>

      <footer className="mt-12 text-center">
        <p className="text-gray-500">
          Powered by React, TypeScript, and Tailwind CSS.
        </p>
        <img src="https://picsum.photos/300/200" alt="Placeholder" className="mt-4 rounded-lg shadow-lg mx-auto opacity-75 hover:opacity-100 transition-opacity" />
      </footer>
    </div>
  );
};

export default App;
