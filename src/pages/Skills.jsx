import React from 'react';
import { Code, Database, Cloud, Layout, GitBranch, Brain, Terminal, Zap, Server, Shield, Smartphone, Globe, Lock, CheckSquare, ShoppingCart, Wallet, BookOpen } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    { 
      title: "Frontend Development", 
      icon: <Layout className="text-blue-600" size={28} />, 
      skills: ["React.js", "Next.js", "HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwind CSS", "Redux Toolkit"], 
      color: "from-blue-500 to-cyan-500" 
    },
    { 
      title: "Backend Development", 
      icon: <Server className="text-purple-600" size={28} />, 
      skills: ["Node.js", "NestJS", ".NET Core", "Django", "PHP", "Laravel", "REST APIs", "JWT Authentication"], 
      color: "from-purple-500 to-pink-500" 
    },
    { 
      title: "Mobile Development", 
      icon: <Smartphone className="text-green-600" size={28} />, 
      skills: ["React Native", "Cross-Platform Development", "Mobile UI Design", "App Deployment"], 
      color: "from-green-500 to-emerald-500" 
    },
    { 
      title: "Database & ORM", 
      icon: <Database className="text-orange-600" size={28} />, 
      skills: ["MySQL", "PostgreSQL", "SQLite", "Prisma ORM", "TypeORM", "MongoDB", "Database Modeling"], 
      color: "from-orange-500 to-red-500" 
    },
    { 
      title: "DevOps & Tools", 
      icon: <GitBranch className="text-gray-600" size={28} />, 
      skills: ["Git & GitHub", "Docker", "CI/CD", "Agile Methodologies", "VS Code", "IntelliJ IDEA", "Figma", "Draw.io"], 
      color: "from-gray-500 to-gray-700" 
    },
    { 
      title: "Security & Authentication", 
      icon: <Shield className="text-red-600" size={28} />, 
      skills: ["JWT Authentication", "RBAC", "API Security", "Phantom Wallet Integration", "Secure Coding"], 
      color: "from-red-500 to-rose-500" 
    },
    { 
      title: "Project Management Features", 
      icon: <CheckSquare className="text-indigo-600" size={28} />, 
      skills: ["Task Management", "Team Collaboration", "Project Planning", "Real-time Updates", "CI/CD Workflows"], 
      color: "from-indigo-500 to-blue-500" 
    },
    { 
      title: "E-commerce & Inventory", 
      icon: <ShoppingCart className="text-yellow-600" size={28} />, 
      skills: ["Sales Order Management", "Inventory Tracking", "Payment Integration", "Tax Calculation", "Order Processing"], 
      color: "from-yellow-500 to-amber-500" 
    },
    { 
      title: "AI & Emerging Tech", 
      icon: <Brain className="text-pink-600" size={28} />, 
      skills: ["AI/ML Basics", "CNN Models", "TensorFlow", "Phantom Wallet", "Solana Blockchain", "REST API Integration"], 
      color: "from-pink-500 to-rose-500" 
    }
  ];

  // Skills directly from projects
  const projectBasedSkills = [
    { name: "Booking Platform API", skills: ["NestJS", "TypeORM", "PostgreSQL", "JWT", "Swagger", "Docker"] },
    { name: "Project & Team Task Management", skills: ["Next.js", "Prisma", "RBAC", "CI/CD", "MySQL"] },
    { name: "Plant Disease Detection", skills: ["React Native", "Django", "TensorFlow", "Python", "SQLite"] },
    { name: "Sales Order Management", skills: [".NET Core", "Redux Toolkit", "SQL Server", "Tailwind CSS"] },
    { name: "Paint Shop Inventory", skills: ["Java", "MySQL", "JDBC", "Stock Management"] },
    { name: "Pharmacy Management", skills: ["PHP", "Python", "Prescription Processing", "Inventory Control"] },
    { name: "Task Management App", skills: ["Next.js", "Prisma ORM", "Docker", "JWT", "MySQL"] },
    { name: "Solana Wallet Tracker", skills: ["Solana", "Phantom Wallet", "TypeScript", "REST APIs"] },
  ];

  const softSkills = ["Communication & Teamwork", "Problem-Solving", "Critical Thinking", "Time Management", "Project Management", "Adaptability", "Leadership", "Agile Collaboration"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Skills & Expertise
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Technical skills and technologies I've mastered through real-world projects and development experience.
        </p>
      </div>

      {/* Main Skill Categories */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group">
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10 group-hover:scale-110 transition-transform`}>
                {category.icon}
              </div>
              <h3 className="text-lg font-bold">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span key={i} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Project-Based Skills */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Globe className="text-blue-600" size={32} />
          <h2 className="text-2xl font-bold">Skills by Project</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projectBasedSkills.map((project, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-all">
              <h4 className="font-semibold text-sm mb-2 text-blue-600 dark:text-blue-400">{project.name}</h4>
              <div className="flex flex-wrap gap-1.5">
                {project.skills.map((skill, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills & Languages */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="text-purple-600" size={32} />
            <h2 className="text-2xl font-bold">Soft Skills</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {softSkills.map((skill, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="text-green-600" size={32} />
            <h2 className="text-2xl font-bold">Languages</h2>
          </div>
          <div className="space-y-4">
            {[
              { lang: "English", level: "Professional Working", progress: 85 },
              { lang: "Tamil", level: "Native", progress: 100 },
              { lang: "Sinhala", level: "Professional Working", progress: 70 }
            ].map((lang, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">{lang.lang}</span>
                  <span className="text-sm text-gray-500">{lang.level}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full" style={{ width: `${lang.progress}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="mt-12 text-center">
        <div className="inline-flex flex-wrap justify-center gap-3 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
          <span className="text-gray-500">🏆</span>
          {[
            "Full Stack", 
            "UI/UX Design", 
            "DevOps", 
            "QA Testing", 
            "Agile", 
            "Git", 
            "REST APIs", 
            "Responsive Design",
            "Database Design",
            "Security",
            "Mobile Development",
            "API Integration"
          ].map((badge, idx) => (
            <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium">
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Skills Summary */}
      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>Total Skills: <span className="font-bold text-gray-700 dark:text-gray-300">
          {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}
        </span> | Projects Represented: <span className="font-bold text-gray-700 dark:text-gray-300">12</span></p>
      </div>
    </div>
  );
};

export default Skills;