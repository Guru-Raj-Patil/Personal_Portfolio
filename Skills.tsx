import React from 'react';
import { Code, Globe, Smartphone, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["C", "Java", "Python"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Web Development",
      icon: <Globe className="w-6 h-6" />,
      skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Flask", "SQL"],
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      skills: ["React Native"],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      skills: ["Machine Learning", "Artificial Intelligence", "Deep Learning"],
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className={`bg-gradient-to-r ${category.color} p-6`}>
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4">
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Proficiency Level
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { skill: "Python", level: 90 },
                { skill: "React.js", level: 85 },
                { skill: "Machine Learning", level: 88 },
                { skill: "Java", level: 82 },
                { skill: "JavaScript", level: 87 },
                { skill: "SQL", level: 80 }
              ].map((item, index) => (
                <div key={index} className="text-left">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">{item.skill}</span>
                    <span className="text-sm text-gray-500">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;