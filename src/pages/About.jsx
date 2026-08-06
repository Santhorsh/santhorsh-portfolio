import React from 'react';
import { User, Briefcase, Heart, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A motivated undergraduate eager to learn, grow, and gain real-world experience in software development.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <User className="text-blue-600" size={28} />
              <h2 className="text-2xl font-bold">Who Am I?</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              I'm Kumaravel Santhorsh, a Software Engineering undergraduate at KIU University,
              currently pursuing a Bachelor of Information Technology at the University of Moratuwa.
              I am passionate about learning how modern software systems are built and how technology
              can solve real-world problems.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I have gained hands-on experience through academic and personal projects in areas like
              web development, mobile applications, REST API design, and DevOps practices. I am
              continuously improving my skills and exploring new technologies to become a better
              software engineer.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="text-red-500" size={28} />
              <h2 className="text-2xl font-bold">What Drives Me</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              I enjoy building applications that solve practical problems and improve user experiences.
              From secure booking APIs to AI-based plant disease detection, I am motivated by learning
              through real-world projects.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              {['Learning', 'Innovation', 'Problem Solving', 'Teamwork'].map((value, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-green-600" size={28} />
              <h2 className="text-2xl font-bold">Experience Highlights</h2>
            </div>
            <ul className="space-y-4">
              {[
                'Built secure REST APIs with NestJS, JWT authentication, and Swagger documentation',
                'Developed full-stack web applications using React, Next.js, .NET, Java, and PHP',
                'Built a mobile application using React Native and Django with a trained ML model',
                'Designed responsive user interfaces with a focus on UI/UX fundamentals',
                'Worked with MySQL, PostgreSQL, and SQLite for database design and queries',
                'Applied DevOps concepts such as Git workflows, CI/CD pipelines, and Docker'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Target className="text-purple-600" size={28} />
              <h2 className="text-2xl font-bold">Current Focus</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              I am currently strengthening my fundamentals in Full Stack Development and exploring
              AI & Machine Learning basics. I am also learning modern development workflows,
              version control practices, and DevOps concepts such as CI/CD and containerization.
              My goal is to gain hands-on experience through internships or training programs and
              apply these skills in real-world software development environments.
            </p>
            <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                "Always learning, always building, and always improving."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
