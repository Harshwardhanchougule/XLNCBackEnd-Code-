import { Target, Compass, Award, Lightbulb, Users2 } from 'lucide-react';

const VisionMissionSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Vision Card */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="transform transition-transform duration-300 group-hover:scale-110">
                  <Target className="w-8 h-8 text-blue-600 transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 transition-all duration-300 group-hover:text-blue-600">Vision</h3>
                  <div className="w-12 h-0.5 bg-blue-600 mt-2 transition-all duration-300 group-hover:w-20" />
                </div>
              </div>
              <p className="text-gray-600 transform transition-all duration-300 group-hover:translate-x-2">
                To build a brand that is a recognized name across the industries of education, Technologies and Recruitment consulting for providing niche solutions by adopting AI, ML and Robotics.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="transform transition-transform duration-300 group-hover:scale-110">
                  <Compass className="w-8 h-8 text-blue-600 transition-transform duration-300 group-hover:rotate-45" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 transition-all duration-300 group-hover:text-blue-600">Mission</h3>
                  <div className="w-12 h-0.5 bg-blue-600 mt-2 transition-all duration-300 group-hover:w-20" />
                </div>
              </div>
              <p className="text-gray-600 transform transition-all duration-300 group-hover:translate-x-2">
                Consistent focus to provide organizational solutions, committed workforce and exceptional leaders who are built on key values of excellence, innovation and teamwork.
              </p>
            </div>
          </div>
        </div>

        {/* Redesigned Core Values Section */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100">
          <div className="flex items-center gap-4 mb-12">
            <div className="transform transition-transform duration-300">
              <Award className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Core Values</h3>
              <div className="w-12 h-0.5 bg-blue-600 mt-2" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Excellence',
                desc: 'Delivering superior quality in every service'
              },
              {
                icon: Lightbulb,
                title: 'Innovation',
                desc: 'Driving growth through cutting-edge technology'
              },
              {
                icon: Users2,
                title: 'Teamwork',
                desc: 'Fostering collaboration to achieve shared goals'
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="group"
              >
                <div className="flex items-start gap-4 p-6 rounded-xl transition-all duration-300 hover:bg-gray-50">
                  <div className="p-2 rounded-lg bg-blue-50 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <value.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-blue-600">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {value.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionSection;
