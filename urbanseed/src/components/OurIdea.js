import React from 'react';

const OurIdea = () => {
  const steps = [
    {
      id: 1,
      title: 'Depositors Contribute',
      description: 'Depositors place funds into savings accounts at 3-4% interest, with options for mezzanine bridge loans to enhance returns.',
    },
    {
      id: 2,
      title: 'Funds Flow to Main SPV',
      description: 'The main SPV channels these funds, ensuring interest is repaid to clients securely.',
    },
    {
      id: 3,
      title: 'Management SPV Allocates',
      description: 'The Management SPV manages funds, including mezzanine finance, and holds collateral via SPV Escrow.',
    },
    {
      id: 4,
      title: 'Developer Utilizes',
      description: 'Developers secure 7-14% loans and pay promotion fees, benefiting from tax advantages.',
    },
    {
      id: 5,
      title: 'Profits to Owners',
      description: 'Owners receive profits after fees, with risks minimized through the SPV structure.',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-4xl mt-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white border-b-2 border-emerald-500 pb-4">
          Our Idea
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
          Discover how our innovative SPV financial model, including mezzanine finance, powers real estate development with security and efficiency.
        </p>
        <div className="mt-8">
          {/* First 3 steps in a row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {steps.slice(0, 3).map(step => (
              <div
                key={step.id}
                className="step bg-gray-100 dark:bg-gray-700 p-6 rounded-lg text-center hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-600 transition-transform transform hover:scale-105"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-500 text-white rounded-full text-xl font-bold mx-auto mb-4">
                  {step.id}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{step.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
          
          {/* Last 2 steps wider */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.slice(3).map(step => (
              <div
                key={step.id}
                className="step bg-gray-100 dark:bg-gray-700 p-6 rounded-lg text-center hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-600 transition-transform transform hover:scale-105"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-500 text-white rounded-full text-xl font-bold mx-auto mb-4">
                  {step.id}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{step.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurIdea;
