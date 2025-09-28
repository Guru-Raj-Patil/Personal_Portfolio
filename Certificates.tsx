import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "Internet of Things (IoT)",
      issuer: "NPTEL",
      description: "Comprehensive course covering IoT fundamentals, sensor networks, communication protocols, and practical implementation of IoT systems.",
      year: "2023",
      category: "Technology"
    },
    {
      title: "MongoDB",
      issuer: "Udemy",
      description: "In-depth training on MongoDB database management, including data modeling, querying, aggregation, and performance optimization.",
      year: "2023",
      category: "Database"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Technology':
        return 'from-blue-500 to-cyan-500';
      case 'Database':
        return 'from-green-500 to-teal-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Certificates & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
              <div className={`bg-gradient-to-r ${getCategoryColor(cert.category)} p-6`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white/90">
                        {cert.category} Certificate
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {cert.title}
                      </h3>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-white/90">Issued by</div>
                    <div className="font-semibold text-white">{cert.issuer}</div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Completed in {cert.year}
                  </span>
                  <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Verify Certificate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Journey */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Learning Journey
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Continuous Growth
              </h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                I believe in lifelong learning and staying updated with the latest technologies. 
                These certifications represent my commitment to professional development and 
                expanding my technical expertise.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">IoT and Embedded Systems</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Database Management</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Ongoing Learning in AI/ML</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-2xl font-bold text-blue-600 mb-2">2</div>
                <div className="text-sm text-gray-600">Certificates Earned</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-2xl font-bold text-teal-600 mb-2">100+</div>
                <div className="text-sm text-gray-600">Learning Hours</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;