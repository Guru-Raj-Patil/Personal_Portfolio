import React from 'react';
import { Heart, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/Guru-Raj-Patil",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/guru-patila944a6325/",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:patilguru1606@gmail.com",
      label: "Email"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      href: "tel:8904508437",
      label: "Phone"
    }
  ];

  const quickLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#projects', label: 'Projects' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Guru Raj Patil</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Passionate Computer Science & Engineering student specializing in AI/ML and Web Development. 
              Always eager to learn, innovate, and solve complex problems.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200 group"
                  aria-label={social.label}
                >
                  <div className="text-gray-300 group-hover:text-white transition-colors duration-200">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:patilguru1606@gmail.com"
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-4 h-4 mr-3" />
                patilguru1606@gmail.com
              </a>
              <a
                href="tel:8904508437"
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Phone className="w-4 h-4 mr-3" />
                +91 8904508437
              </a>
            </div>
            <div className="mt-6">
              <p className="text-gray-300 text-sm">
                Currently seeking opportunities in AI/ML and Web Development
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <p className="text-gray-300 text-sm">
                © {currentYear} Guru Raj Patil. Built with{' '}
                <Heart className="w-4 h-4 inline text-red-500" />{' '}
                using React & Tailwind CSS
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-300">
              <span>CGPA: 9.3</span>
              <span>•</span>
              <span>5th Semester</span>
              <span>•</span>
              <span>Computer Science & Engineering</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;