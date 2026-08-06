import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Palette, Database, Cloud, CheckCircle, Download, Lock, ClipboardList, Smartphone, Briefcase, Star, Rocket, TrendingUp, Users, Award, Zap, Server, GitBranch, GraduationCap, Target, BookOpen, Coffee, Layers, Terminal, Cpu } from 'lucide-react';
import profilePic from "../assets/Santhorsh.png";
const Home = () => {
  const projectImages = {
    api: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=200&fit=crop&crop=center",
    dashboard: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&crop=center",
    mobile: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&h=200&fit=crop&crop=center"
  };

  const featuredProjects = [
    {
      name: "Booking Platform API",
      category: "backend",
      description: "Secure NestJS REST API with JWT authentication, service/booking management, validation, Swagger documentation, database migrations, and scalable clean architecture.",
      tech: ["NestJS", "TypeScript", "TypeORM", "PostgreSQL", "JWT", "Swagger", "Docker"],
      icon: <Lock size={24} />,
      features: ["JWT Authentication", "Swagger Docs", "Clean Architecture"],
      image: projectImages.api,
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      name: "Project & Team Task Management",
      category: "fullstack",
      description: "Full-stack project and team task management system with JWT authentication, RBAC, REST APIs, Prisma database integration, responsive UI, and CI/CD workflow.",
      tech: ["Next.js", "Node.js", "Prisma", "MySQL/PostgreSQL", "JWT", "CI/CD"],
      icon: <ClipboardList size={24} />,
      features: ["Role-Based Access", "Team Task Boards", "CI/CD Workflow"],
      image: projectImages.dashboard,
      gradient: "from-purple-600 to-pink-600"
    },
    {
      name: "VerdantEye - Smart Plant Disease Detection",
      category: "mobile",
      description: "AI-powered plant disease detection mobile/web app with REST APIs, CNN model training, testing, and personalized plant care recommendations.",
      tech: ["React Native", "React.js", "Django", "Python", "TensorFlow", "SQLite"],
      icon: <Smartphone size={24} />,
      features: ["AI Disease Detection", "Personalized Care Tips", "Plant Health Tracking"],
      image: projectImages.mobile,
      gradient: "from-green-500 to-emerald-600"
    }
  ];

  const stats = [
    { icon: <Code2 size={24} />, value: "10+", label: "Projects Built", color: "from-blue-500 to-blue-600" },
    { icon: <Briefcase size={24} />, value: "Open", label: "For Internships", color: "from-green-500 to-green-600" },
    { icon: <Star size={24} />, value: "Learning", label: "Full Stack", color: "from-purple-500 to-purple-600" },
    { icon: <Rocket size={24} />, value: "2028", label: "Graduating", color: "from-orange-500 to-orange-600" }
  ];

  // Learning journey stages with detailed information
  const learningStages = [
    {
      title: "🌱 Currently Learning",
      skills: ["React.js", "Node.js", "TypeScript", "MongoDB", "Git & GitHub", "Next.js", "NestJS", "Testing (Jest)"],
      description: "Building foundational full-stack development skills",
      icon: <Code2 size={20} />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "📚 Completed Basics",
      skills: ["HTML5", "CSS3", "JavaScript", "PHP", "Java", "Python", "SQL"],
      description: "Strong foundation in programming and web development",
      icon: <BookOpen size={20} />,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "🚀 Exploring Next",
      skills: ["Docker", "DevOps", "CI/CD", "Cloud Fundamentals (AWS)"],
      description: "Expanding into modern software engineering and cloud technologies",
      icon: <Rocket size={20} />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 -z-10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000" />
        <div className="absolute top-40 right-40 w-48 h-48 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left">
              {/* Internship Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6 animate-pulse">
                <Zap size={16} className="text-yellow-500" />
                🎓 Software Engineering Intern
                <Zap size={16} className="text-yellow-500" />
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">
                  Kumaravel Santhorsh
                </span>
              </h1>
              
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Available for Internship
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                  <GraduationCap size={14} />
                  Software Engineering Student
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                  <Target size={14} />
                  Full Stack Developer
                </span>
              </div>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  Software Engineering Student
                </span> | 
                Full Stack Developer in Training | Passionate about Building Innovative Solutions | 
                Seeking a Software Engineering Internship Opportunity
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-lg mx-auto md:mx-0 leading-relaxed">
                Passionate Software Engineering Intern with a strong foundation in full-stack development, 
                programming, and software engineering principles. Experienced in building web applications 
                using modern technologies and continuously learning emerging tools such as React.js, Node.js, 
                TypeScript, Docker, DevOps, and cloud technologies.
              </p>
              
              <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed text-sm border-l-4 border-blue-500 pl-4">
                💡 Enthusiastic about solving problems, writing clean code, collaborating with teams, 
                and contributing to innovative software solutions.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link to="/projects" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-2xl transition-all hover:scale-105 flex items-center gap-2 group">
                  View My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="/CV.pdf"
                  download="CV.pdf"
                  className="px-6 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-500 transition-all flex items-center gap-2 shadow-sm hover:shadow-lg"
                >
                  <Download size={18} /> Download CV
                </a>
                <Link to="/contact" className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all">
                  Let's Connect
                </Link>
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <img
                  src={profilePic}
                  alt="Kumaravel Santhorsh"
                  className="relative w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 right-4 bg-green-500 w-6 h-6 rounded-full border-2 border-white dark:border-gray-800 shadow-lg" />
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-3 py-1 rounded-full shadow-lg">
                  Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center border border-gray-100 dark:border-gray-700"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Updated with 3 stages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Tech Stack & Skills</h2>
            <p className="text-gray-600 dark:text-gray-400">Building my foundation as a developer</p>
            <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 dark:from-green-900/20 dark:via-blue-900/20 dark:to-purple-900/20 rounded-full text-gray-700 dark:text-gray-300 text-sm border border-gray-200 dark:border-gray-700">
              <Layers size={16} className="text-blue-600" />
              <span>🌱 Learning &nbsp;|&nbsp; 📚 Completed &nbsp;|&nbsp; 🚀 Exploring</span>
            </div>
          </div>

          {/* Learning Stages - 3 columns */}
          <div className="grid md:grid-cols-3 gap-6">
            {learningStages.map((stage, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${stage.color} bg-opacity-10`}>
                    {stage.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{stage.title}</h3>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{stage.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {stage.skills.map((skill, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                    {stage.skills.length} skills
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="mt-10 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-4 px-6 py-3 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">🌱</span>
                <span className="text-xs text-gray-600 dark:text-gray-400">{learningStages[0].skills.length} learning</span>
              </div>
              <span className="w-px h-6 bg-gray-300 dark:bg-gray-600"></span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">📚</span>
                <span className="text-xs text-gray-600 dark:text-gray-400">{learningStages[1].skills.length} completed</span>
              </div>
              <span className="w-px h-6 bg-gray-300 dark:bg-gray-600"></span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">🚀</span>
                <span className="text-xs text-gray-600 dark:text-gray-400">{learningStages[2].skills.length} exploring</span>
              </div>
              <span className="w-px h-6 bg-gray-300 dark:bg-gray-600"></span>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                <span className="font-semibold">
                  {learningStages.reduce((acc, stage) => acc + stage.skills.length, 0)}
                </span> total skills
              </span>
              <span className="w-px h-6 bg-gray-300 dark:bg-gray-600"></span>
              <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-1">
                <Code2 size={16} /> Full Stack in Training
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-4">
              <Star size={16} className="text-yellow-500" />
              Featured Projects
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Projects I've Built While Learning</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              These projects demonstrate my growth as a developer and my ability to build 
              full-stack applications with modern technologies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <div
                key={idx}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`relative h-48 overflow-hidden bg-gradient-to-r ${project.gradient}`}>
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-center justify-center">
                    <div className="text-white transform group-hover:scale-110 transition-transform duration-300 bg-white/20 backdrop-blur-sm p-4 rounded-full">
                      {project.icon}
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full capitalize">
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((f, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 5).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 5 && (
                      <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded">
                        +{project.tech.length - 5}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href="https://github.com/Santhorsh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                    >
                      <Code2 size={16} /> Code
                    </a>
                    <Link
                      to="/projects"
                      className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                    >
                      <ArrowRight size={16} /> Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-2xl transition-all hover:scale-105 group"
            >
              View All Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;