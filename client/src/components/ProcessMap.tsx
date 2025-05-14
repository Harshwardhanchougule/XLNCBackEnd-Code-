import React from 'react';

interface Step {
  title: string;
  description: string;
}

interface ProcessStepsProps {
  title: string;
  steps: Step[];
}

const ProcessSteps: React.FC<ProcessStepsProps> = ({ title, steps }) => {
  return (
    <section className="py-4 bg-[#f8fafc]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {title}
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative space-y-6">
            {/* Vertical connecting line */}
            <div className="absolute left-[21px] top-[48px] w-0.5 h-[calc(100%-72px)] bg-blue-200"></div>
            
            {steps.map((step: Step, index: number) => (
              <div key={index} className="flex items-start relative">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00487a] text-white flex items-center justify-center mr-4 text-xl font-bold z-10">
                  {index + 1}
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: step.description }}></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;