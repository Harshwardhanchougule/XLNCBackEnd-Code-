import React, { useState } from 'react';

interface TechnologyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative overflow-hidden rounded-lg transition-all duration-300 h-full border border-gray-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`p-6 h-full flex flex-col ${isHovered ? 'text-white' : 'bg-white'}`}>
        {/* Hover Background */}
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 z-0">
            <div 
              className="absolute inset-0 opacity-40 bg-cover bg-center"
              style={{ backgroundImage: `url('/api/placeholder/400/320')` }}
            />
          </div>
        )}
        
        {/* Content */}
        <div className={`relative z-10 flex flex-col h-full`}>
          <div className={`mb-4 ${isHovered ? 'text-white' : 'text-purple-600'}`}>
            {icon}
          </div>
          <h3 className={`text-xl font-bold mb-2 ${isHovered ? 'text-white' : 'text-gray-800'}`}>
            {title}
          </h3>
          <p className={`${isHovered ? 'text-gray-100' : 'text-gray-600'} flex-grow`}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;