import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "BE in Computer Science & Engineering",
      institution: "BNM Institute of Technology, Bengaluru",
      period: "Currently in 5th Semester",
      grade: "CGPA: 9.3",
      status: "current"
    },
    {
      degree: "Grade 12th",
      institution: "AECS Magnolia Maaruthi Public School, Bengaluru",
      period: "Completed",
      grade: "80.2%",
      status: "completed"
    },
    {
      degree: "10th Grade",
      institution: "AECS Magnolia Maaruthi Public School, Bengaluru",
      period: "Completed",
      grade: "90.5%",
      status: "completed"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic journey and achievements
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-200 to-teal-200"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full shadow-lg z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 pl-20 md:pl-0' : 'md:pl-8 pl-20 md:pl-0'}`}>
                  <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border-l-4 ${edu.status === 'current' ? 'border-blue-500' : 'border-teal-500'}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${edu.status === 'current' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                        {edu.status === 'current' ? 'In Progress' : 'Completed'}
                      </div>
                      <div className={`p-2 rounded-lg ${edu.status === 'current' ? 'bg-blue-100' : 'bg-teal-100'}`}>
                        <GraduationCap className={`w-6 h-6 ${edu.status === 'current' ? 'text-blue-600' : 'text-teal-600'}`} />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {edu.degree}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{edu.institution}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Award className={`w-5 h-5 mr-2 ${edu.status === 'current' ? 'text-blue-500' : 'text-teal-500'}`} />
                      <span className={`font-semibold ${edu.status === 'current' ? 'text-blue-600' : 'text-teal-600'}`}>
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-2/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Achievements */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Academic Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">9.3</div>
              <div className="text-sm text-gray-600">Current CGPA</div>
              <div className="text-gray-700">Engineering Excellence</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-teal-600">90.5%</div>
              <div className="text-sm text-gray-600">10th Grade</div>
              <div className="text-gray-700">Strong Foundation</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-600">80.2%</div>
              <div className="text-sm text-gray-600">12th Grade</div>
              <div className="text-gray-700">Consistent Performance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;