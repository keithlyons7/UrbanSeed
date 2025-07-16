import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleStartInvesting = () => {
    navigate('/signup');
  };

  return (
    <main className="w-full min-h-screen flex items-center justify-center px-6 md:px-12 pt-20">
      <div className="backdrop-blur-md bg-white/40 dark:bg-gray-900/40 rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-emerald-800 dark:text-emerald-200 mb-6">
            Unlock High-Growth Real Estate Investments
          </h1>
          <p className="text-lg md:text-xl text-emerald-700 dark:text-emerald-300 mb-8 max-w-2xl mx-auto">
            Access exclusive investment opportunities in commercial and
            residential properties. Join Urban Seed and be part of sustainable
            urban development.
          </p>
          <button 
            onClick={handleStartInvesting}
            className="px-8 py-4 bg-emerald-600 text-white text-lg font-medium rounded-lg hover:bg-emerald-700 transition-colors shadow-lg"
          >
            Start Investing
          </button>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
