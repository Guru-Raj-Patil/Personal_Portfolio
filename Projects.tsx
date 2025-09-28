import React from 'react';
import { ExternalLink, Github, Brain, FileText, MapPin, Music, Mail } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "One-Shot Image Verification using Siamese Network",
      description: "Designed and implemented a Siamese Neural Network using TensorFlow to enable one-shot image verification without class-specific retraining. Built an interactive Streamlit app with contrastive loss for accurate similarity learning.",
      technologies: ["TensorFlow", "Streamlit", "Python", "Deep Learning", "Computer Vision"],
      icon: <Brain className="w-6 h-6" />,
      category: "AI/ML"
    },
    {
      title: "Legal Document Intelligence System",
      description: "Developed an AI-powered legal analytics platform using HuggingFace Transformers (BERT, GPT-2, Pegasus) for clause extraction, Q&A, and predictive analysis. Features automated legal PDF parsing and What-if scenario simulations.",
      technologies: ["HuggingFace", "BERT", "GPT-2", "Streamlit", "Python", "NLP"],
      icon: <FileText className="w-6 h-6" />,
      category: "AI/ML"
    },
    {
      title: "TourFlow – AI-Driven Web Interface for Itinerary Planning",
      description: "Developed a web application that utilizes AI algorithms to generate personalized travel itineraries. Integrated real-time location data and user preferences for tailored recommendations.",
      technologies: ["React.js", "Flask", "OpenAI API", "Python", "AI"],
      icon: <MapPin className="w-6 h-6" />,
      category: "Web Development",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "EchoPro – Java-Based Music Application",
      description: "Designed and implemented a Java-based music player with an interactive UI. Integrated media streaming and local playback functionalities using JavaFX for UI design and multithreading.",
      technologies: ["Java", "JavaFX", "Multithreading", "UI/UX"],
      icon: <Music className="w-6 h-6" />,
      category: "Application Development"
    },
    {
      title: "WeatherWave & NewsFlash – Automated Email Notification Bot",
      description: "Created a bot that instantly delivers weather and news updates via email. Utilized Python, NewsAPI and OpenWeather API for data scraping and retrieval with automated email dispatch using SMTP protocol.",
      technologies: ["Python", "NewsAPI", "OpenWeather API", "SMTP", "Automation"],
      icon: <Mail className="w-6 h-6" />,
      category: "Automation"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI/ML':
        return 'from-purple-500 to-pink-500';
      case 'Web Development':
        return 'from-blue-500 to-cyan-500';
      case 'Application Development':
        return 'from-green-500 to-teal-500';
      case 'Automation':
        return 'from-orange-500 to-red-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of innovative solutions and technical implementations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <div className={`bg-gradient-to-r ${getCategoryColor(project.category)} p-6`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <div className="text-white">
                        {project.icon}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white/90">
                        {project.category}
                      </div>
                      <h3 className="text-lg font-bold text-white leading-tight">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      className="inline-flex items-center px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 text-sm font-medium"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Project Statistics
            </h3>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-600">2</div>
                <div className="text-sm text-gray-600">AI/ML Projects</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">1</div>
                <div className="text-sm text-gray-600">Web Applications</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-green-600">1</div>
                <div className="text-sm text-gray-600">Desktop Applications</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-orange-600">1</div>
                <div className="text-sm text-gray-600">Automation Tools</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;