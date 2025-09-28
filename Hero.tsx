import React from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <span className="text-4xl font-bold text-white">GP</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              Guru Raj Patil
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Passionate Computer Science & Engineering Student specializing in{' '}
            <span className="font-semibold text-blue-600">Artificial Intelligence</span>,{' '}
            <span className="font-semibold text-teal-600">Machine Learning</span> &{' '}
            <span className="font-semibold text-orange-600">Web Development</span>
          </p>
          
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Currently pursuing BE in Computer Science & Engineering with a CGPA of 9.3. 
            I excel at problem-solving and possess a keen ability to translate complex concepts into practical solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="mailto:patilguru1606@gmail.com"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </a>
            <button className="inline-flex items-center px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </button>
          </div>
          
          <button
            onClick={scrollToAbout}
            className="inline-flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 animate-bounce"
          >
            <span className="text-sm font-medium mb-2">Learn More</span>
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;