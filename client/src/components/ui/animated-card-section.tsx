interface AnimatedCardSectionProps {
  title: string;
  subheading?: string;
  paragraphs: string[];
  subheadingAfterFirstPara?: boolean;
}

const AnimatedCardSection = ({ 
  title, 
  subheading, 
  paragraphs,
  subheadingAfterFirstPara = false 
}: AnimatedCardSectionProps) => {
  return (
    <section className="relative w-full text-[#242424]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-8">
        <div className="bg-white rounded-xl overflow-visible 
          transform transition-all duration-500 hover:scale-105 hover:shadow-2xl 
          border border-gray-200 p-8">
          <div className="relative overflow-visible"> {/* Changed from overflow-hidden */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-50/30 to-white opacity-30 animate-gradient"></div>

            <div className="relative z-10 group">
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 pb-1"> {/* Added pb-1 */}
                {title}
              </h2>
              
              {!subheadingAfterFirstPara && subheading && (
                <h3 className="text-xl font-semibold mb-6 text-blue-600">
                  {subheading}
                </h3>
              )}

              {paragraphs.map((paragraph, index) => (
                <>
                  <p key={`p-${index}`} className="text-lg mb-8 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                  {index === 0 && subheadingAfterFirstPara && subheading && (
                    <h3 key={`h-${index}`} className="text-xl font-semibold my-6 text-blue-600">
                      {subheading}
                    </h3>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedCardSection;
