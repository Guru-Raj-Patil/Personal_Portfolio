import React from 'react';
import { Code, Brain, Smartphone, Database } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI/ML Specialist",
      description: "Deep expertise in Machine Learning, Artificial Intelligence, and Deep Learning technologies"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Developer",
      description: "Proficient in modern web technologies including React, Node.js, Python, and more"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Developer",
      description: "Experience in React Native for cross-platform mobile application development"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Expert",
      description: "Strong foundation in SQL, MongoDB, and database design principles"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I am a passionate and results-oriented Computer Science & Engineering student 
            with a strong foundation in cutting-edge technologies. Fuelled by a relentless 
            drive to innovate, I excel at problem-solving and possess a keen ability to 
            translate complex concepts into practical solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full mb-6 group-hover:scale-110 transition-transform duration-200">
                <div className="text-blue-600 group-hover:text-teal-600 transition-colors duration-200">
                  {highlight.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {highlight.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              My Journey
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">9.3</div>
                <div className="text-sm text-gray-600">CGPA</div>
                <div className="text-gray-700">Academic Excellence</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-teal-600">5+</div>
                <div className="text-sm text-gray-600">Projects</div>
                <div className="text-gray-700">Practical Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-orange-600">10+</div>
                <div className="text-sm text-gray-600">Technologies</div>
                <div className="text-gray-700">Technical Skills</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;