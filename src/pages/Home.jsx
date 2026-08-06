import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Palette, Database, Cloud, CheckCircle, Download, Lock, ClipboardList, Smartphone, Briefcase, Star, Rocket, TrendingUp, Users, Award, Zap, Server, GitBranch, GraduationCap, Target, BookOpen, Coffee, Layers, Terminal, Cpu } from 'lucide-react';
import profilePic from '../assets/santhorsh.png';

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
    { icon: <Code2 size={20} />, value: "10+", label: "Projects Built", color: "from-blue-500 to-blue-600" },
    { icon: <Briefcase size={20} />, value: "Open", label: "For Internships", color: "from-green-500 to-green-600" },
    { icon: <Star size={20} />, value: "Learning", label: "Full Stack", color: "from-purple-500 to-purple-600" },
    { icon: <Rocket size={20} />, value: "2028", label: "Graduating", color: "from-orange-500 to-orange-600" }
  ];

  const learningStages = [
    {
      title: "🌱 Currently Learning",
      skills: ["React.js", "Node.js", "TypeScript", "MongoDB", "Git & GitHub", "Next.js", "NestJS", "Testing (Jest)"],
      description: "Building foundational full-stack development skills",
      icon: <Code2 size={18} />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "📚 Completed Basics",
      skills: ["HTML5", "CSS3", "JavaScript", "PHP", "Java", "Python", "SQL"],
      description: "Strong foundation in programming and web development",
      icon: <BookOpen size={18} />,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "🚀 Exploring Next",
      skills: ["Docker", "DevOps", "CI/CD", "Cloud Fundamentals (AWS)"],
      description: "Expanding into modern software engineering and cloud technologies",
      icon: <Rocket size={18} />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 -z-10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000" />
        <div className="absolute top-40 right-40 w-48 h-48 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-3 animate-pulse">
                <Zap size={14} className="text-yellow-500" />
                🎓 Software Engineering Intern
                <Zap size={14} className="text-yellow-500" />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-3">
                <span className="text-gray-900 dark:text-white">Kumaravel Santhorsh</span>
              </h1>
              
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  Available for Internship
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs">
                  <GraduationCap size={12} />
                  Software Engineering Student
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs">
                  <Target size={12} />
                  Full Stack Developer
                </span>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-2 leading-relaxed">
                <span className="font-semibold text-blue-600 dark:text-blue-400">Software Engineering Student</span> | 
                Full Stack Developer in Training | Passionate about Building Innovative Solutions | 
                Seeking a Software Engineering Internship Opportunity
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 mb-3 max-w-lg mx-auto md:mx-0 leading-relaxed text-sm">
                Passionate Software Engineering Intern with a strong foundation in full-stack development, 
                programming, and software engineering principles. Experienced in building web applications 
                using modern technologies and continuously learning emerging tools such as React.js, Node.js, 
                TypeScript, Docker, DevOps, and cloud technologies.
              </p>
              
              <p className="text-gray-500 dark:text-gray-400 mb-4 max-w-lg mx-auto md:mx-0 leading-relaxed text-xs border-l-3 border-blue-500 pl-3">
                💡 Enthusiastic about solving problems, writing clean code, collaborating with teams, 
                and contributing to innovative software solutions.
              </p>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Link to="/projects" className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-2xl transition-all hover:scale-105 flex items-center gap-2 group text-sm">
                  View My Work <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="/CV.pdf" download="CV.pdf" className="px-5 py-2.5 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-500 transition-all flex items-center gap-2 shadow-sm hover:shadow-lg text-sm">
                  <Download size={16} /> Download CV
                </a>
                <Link to="/contact" className="px-5 py-2.5 border-2 border-gray-300 dark:border-gray-600 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all text-sm">
                  Let's Connect
                </Link>
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <img src={profilePic} alt="Kumaravel Santhorsh" className="relative w-56 h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute bottom-3 right-3 bg-green-500 w-5 h-5 rounded-full border-2 border-white dark:border-gray-800 shadow-lg" />
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[10px] px-2.5 py-0.5 rounded-full shadow-lg">
                  Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-white dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="group p-4 rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800/50 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center border border-gray-100 dark:border-gray-700">
                <div className={`inline-flex p-2.5 rounded-lg bg-gradient-to-br ${stat.color} text-white mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-1.5 text-gray-900 dark:text-white">Tech Stack & Skills</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Building my foundation as a developer</p>
            <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 dark:from-green-900/20 dark:via-blue-900/20 dark:to-purple-900/20 rounded-full text-gray-700 dark:text-gray-300 text-xs border border-gray-200 dark:border-gray-700">
              <Layers size={14} className="text-blue-600" />
              <span>🌱 Learning &nbsp;|&nbsp; 📚 Completed &nbsp;|&nbsp; 🚀 Exploring</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {learningStages.map((stage, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className={`p-1.5 rounded-lg bg-gradient-to-br ${stage.color} bg-opacity-10`}>
                    {stage.icon}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">{stage.title}</h3>
                </div>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 mb-2">{stage.description}</p>
                <div className="flex flex-wrap gap-1">
                  {stage.skills.map((skill, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-2 pt-2 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400">
                    {stage.skills.length} skills
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 px-4 py-2 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">🌱</span>
                <span className="text-[10px] text-gray-600 dark:text-gray-400">{learningStages[0].skills.length} learning</span>
              </div>
              <span className="w-px h-5 bg-gray-300 dark:bg-gray-600"></span>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">📚</span>
                <span className="text-[10px] text-gray-600 dark:text-gray-400">{learningStages[1].skills.length} completed</span>
              </div>
              <span className="w-px h-5 bg-gray-300 dark:bg-gray-600"></span>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">🚀</span>
                <span className="text-[10px] text-gray-600 dark:text-gray-400">{learningStages[2].skills.length} exploring</span>
              </div>
              <span className="w-px h-5 bg-gray-300 dark:bg-gray-600"></span>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                <span className="font-semibold">{learningStages.reduce((acc, stage) => acc + stage.skills.length, 0)}</span> total skills
              </span>
              <span className="w-px h-5 bg-gray-300 dark:bg-gray-600"></span>
              <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-1">
                <Code2 size={14} /> Full Stack in Training
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-10 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-2">
              <Star size={14} className="text-yellow-500" />
              Featured Projects
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-white">Projects I've Built While Learning</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm">
              These projects demonstrate my growth as a developer and my ability to build 
              full-stack applications with modern technologies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredProjects.map((project, idx) => (
              <div key={idx} className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`relative h-36 overflow-hidden bg-gradient-to-r ${project.gradient}`}>
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-center justify-center">
                    <div className="text-white transform group-hover:scale-110 transition-transform duration-300 bg-white/20 backdrop-blur-sm p-3 rounded-full">
                      {project.icon}
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-white text-[10px] px-2.5 py-0.5 rounded-full capitalize">
                    {project.category}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-base font-bold mb-1.5 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs mb-2.5 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="mb-2.5">
                    <h4 className="text-[10px] font-semibold mb-1 text-gray-700 dark:text-gray-300">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.map((f, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-2.5">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span key={i} className="text-[10px] px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded font-mono">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-[10px] px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3 pt-2 border-t border-gray-200 dark:border-gray-700">
                    <a href="https://github.com/Santhorsh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-xs transition-colors">
                      <Code2 size={14} /> Code
                    </a>
                    <Link to="/projects" className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-xs transition-colors">
                      <ArrowRight size={14} /> Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-2xl transition-all hover:scale-105 group text-sm">
              View All Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;