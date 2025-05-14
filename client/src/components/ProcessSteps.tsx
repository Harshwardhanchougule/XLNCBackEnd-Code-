import React from 'react';

// Define the type for a single process step
interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

// Define the props for the component
interface ProcessStepsProps {
  steps: ProcessStep[];
  className?: string;
  darkMode?: boolean;
  heading?: string;
  subheading?: string;
}

const ProcessSteps: React.FC<ProcessStepsProps> = ({
  steps,
  className = "",
  darkMode = true,
  heading,
  subheading
}) => {
  // Base colors based on theme
  const bgColor = darkMode ? 'bg-zinc-900' : 'bg-white';
  const textColor = darkMode ? 'text-white' : 'text-zinc-900';
  const borderColor = darkMode ? 'border-zinc-700' : 'border-zinc-200';

  return (
    <div className={`w-full ${bgColor} ${textColor} py-12 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        {(heading || subheading) && (
          <div className="text-center mb-12">
            {heading && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                {subheading}
              </p>
            )}
          </div>
        )}

        {/* Steps Section */}
        <div className="relative flex flex-col items-center">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center relative mb-8">
              {/* Step number in circle */}
              <div className="relative z-10">
                <div className={`flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border ${borderColor} mb-6`}>
                  <span className="text-2xl md:text-4xl font-bold">{step.number}</span>
                </div>
              </div>

              {/* Step title */}
              <h3 className="text-xl md:text-2xl font-bold mb-4">{step.title}</h3>

              {/* Step description */}
              <p className="text-sm max-w-2xl mx-auto font-semibold">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;
