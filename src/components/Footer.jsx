import React from 'react';
import { Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Kumaravel Santhorsh
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Software Engineering Undergraduate · Colombo, Sri Lanka
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/Santhorsh" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/Santhorsh" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="mailto:ksanthorsh@gmail.com"
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
              <Mail size={18} />
            </a>
            <a href="tel:+94704611523"
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
              <Phone size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1">
          <span>© {year} Kumaravel Santhorsh. Built with</span>
          <Heart size={14} className="text-red-500 fill-red-500" />
          <span>using React & Tailwind CSS.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
