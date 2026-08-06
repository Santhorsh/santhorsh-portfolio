import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, ExternalLink, ChevronRight } from 'lucide-react';

// Import local PNG images (make sure these files exist in the same directory)
import moratuwaLogo from './Moratuwa.png';
import kiuLogo from './KIU.png';

const Education = () => {
  const educationList = [
    {
      degree: "Bachelor of Software Engineering",
      institution: "KIU University",
      period: "May 2024 - Present",
      location: "Colombo, Sri Lanka",
      description: "Comprehensive software engineering program focusing on modern development methodologies, system design, and project management.",
      courses: ["Data Structures", "Algorithms", "Software Architecture", "Database Systems", "Web Technologies"],
      logo: kiuLogo,
      logoAlt: "KIU University Logo",
      website: "https://kiu.ac.lk/"
    },
    {
      degree: "Bachelor of Information Technology",
      institution: "University of Moratuwa",
      period: "May 2023 - Present",
      location: "Moratuwa, Sri Lanka",
      description: "Rigorous IT program covering fundamental and advanced concepts in information technology and computing.",
      courses: ["Programming Fundamentals", "Web Development", "Database Management", "Networking", "UI/UX Design"],
      logo: moratuwaLogo,
      logoAlt: "University of Moratuwa Logo",
      website: "https://uom.lk/"
    }
  ];

  const certifications = [
    "Ethical Considerations for Using Generative AI - IBM SkillsBuild (2025)",
    "Java Skills - Codecademy (In Progress - 2025)",
    "Web Development - 02, University of Moratuwa (2025)",
    "Programming in Python - 01, University of Moratuwa (2024)",
    "Explore Robotics in MicroPython - Arduino Code Camp (2021)",
    "Web Development - 01, University of Moratuwa (2024)"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Education & Certifications
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          My academic journey and professional development achievements.
        </p>
      </div>

      {/* Side-by-side education cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {educationList.map((edu, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                {/* University Logo with Link */}
                <a 
                  href={edu.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-20 h-20 rounded-xl overflow-hidden bg-white dark:bg-gray-700 flex items-center justify-center p-2 flex-shrink-0 shadow-md border-2 border-gray-200 dark:border-gray-600 hover:shadow-lg hover:scale-105 transition-all duration-300 group relative"
                  title={`Visit ${edu.institution} website`}
                >
                  <img 
                    src={edu.logo} 
                    alt={edu.logoAlt}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"%3E%3Cpath fill="%236366f1" d="M12 3L1 9l11 6 11-6-11-6zm0 11.5L4.5 10.5l7.5 4.5 7.5-4.5-7.5 4.5zM1 15l11 6 11-6-11-6-11 6z"/%3E%3C/svg%3E';
                    }}
                  />
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={20} />
                  </div>
                </a>
                <div>
                  <h3 className="text-lg font-bold">{edu.degree}</h3>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-600 dark:text-gray-400 font-medium text-sm">{edu.institution}</p>
                    <a 
                      href={edu.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                      title={`Visit ${edu.institution} website`}
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-3 text-sm">
              <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                <Calendar size={14} />
                <span>{edu.period}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                <MapPin size={14} />
                <span>{edu.location}</span>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{edu.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {edu.courses.map((course, cIdx) => (
                <span key={cIdx} className="px-2.5 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-medium">
                  {course}
                </span>
              ))}
            </div>

            <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
              <a 
                href={edu.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors group"
              >
                <ExternalLink size={16} className="group-hover:rotate-12 transition-transform" />
                Visit {edu.institution} Website
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <Award className="text-yellow-500" size={32} />
          <h2 className="text-2xl font-bold">Certifications & Achievements</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700 dark:text-gray-300">{cert}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-md">
          <BookOpen className="text-blue-600" size={20} />
          <span className="text-gray-700 dark:text-gray-300">Lifelong Learner | Always curious, always growing</span>
        </div>
      </div>
    </div>
  );
};

export default Education;