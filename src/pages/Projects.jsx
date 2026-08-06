import React, { useState } from 'react';
import { Github, ExternalLink, Database, Globe, Smartphone, Shield, Lock, ClipboardList, ShoppingCart, Wallet, CheckSquare, Search, BookOpen, Server } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  // Common image placeholders with different themes
  const projectImages = {
    api: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=200&fit=crop&crop=center",
    dashboard: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&crop=center",
    mobile: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&h=200&fit=crop&crop=center",
    ecommerce: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop&crop=center",
    inventory: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=200&fit=crop&crop=center",
    web: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=200&fit=crop&crop=center",
    healthcare: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=200&fit=crop&crop=center",
    pharmacy: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&h=200&fit=crop&crop=center",
    recipe: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=200&fit=crop&crop=center",
    task: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=200&fit=crop&crop=center",
    solana: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=400&h=200&fit=crop&crop=center",
    platform: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&crop=center",
    bookstore: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=200&fit=crop&crop=center"
  };

  const projects = [
    {
      name: "Booking Platform API",
      description: "Secure NestJS REST API with JWT authentication, service/booking management, validation, Swagger documentation, database migrations, and scalable clean architecture.",
      tech: ["NestJS", "TypeScript", "TypeORM", "PostgreSQL", "JWT", "Swagger", "Docker"],
      icon: <Lock size={24} />,
      category: "backend",
      github: "https://github.com/Santhorsh",
      demo: "#",
      features: ["JWT Authentication", "Swagger Docs", "Clean Architecture"],
      image: projectImages.api,
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      name: "Project & Team Task Management",
      description: "Full-stack project and team task management system with JWT authentication, RBAC, REST APIs, Prisma database integration, responsive UI, and CI/CD workflow.",
      tech: ["Next.js", "Node.js", "Prisma", "MySQL/PostgreSQL", "JWT", "CI/CD"],
      icon: <ClipboardList size={24} />,
      category: "fullstack",
      github: "https://github.com/Santhorsh",
      demo: "#",
      features: ["Role-Based Access", "Team Task Boards", "CI/CD Workflow", "Prisma ORM"],
      image: projectImages.dashboard,
      gradient: "from-purple-600 to-pink-600"
    },
    {
      name: "VerdantEye - Smart Plant Disease Detection",
      description: "AI-powered plant disease detection mobile/web app with REST APIs, CNN model training, testing, and personalized plant care recommendations.",
      tech: ["React Native", "React.js", "Django", "Python", "TensorFlow", "SQLite"],
      icon: <Smartphone size={24} />,
      category: "mobile",
      github: "https://github.com/Santhorsh",
      demo: "#",
      features: ["AI Disease Detection", "Personalized Care Tips", "Plant Health Tracking"],
      image: projectImages.mobile,
      gradient: "from-green-500 to-emerald-600"
    },
    {
      name: "Sales Order Management System",
      description: "System enabling creation and management of sales orders by selecting customers, auto-loading their details, adding multiple items, and calculating totals with tax in real time.",
      tech: [".NET Core Web API", "React.js", "Redux Toolkit", "SQL Server", "Tailwind CSS"],
      icon: <ShoppingCart size={24} />,
      category: "fullstack",
      github: "https://github.com/Santhorsh",
      demo: "#",
      features: ["Real-Time Tax Calculation", "Customer Auto-Load", "Multi-Item Orders"],
      image: projectImages.ecommerce,
      gradient: "from-red-500 to-orange-500"
    },
    {
      name: "Paint Shop Inventory Management System",
      description: "Comprehensive system to track inventory levels and sales, ensuring accurate stock management and reporting.",
      tech: ["Java", "MySQL", "JDBC"],
      icon: <Database size={24} />,
      category: "backend",
      github: "https://github.com/Santhorsh",
      demo: "#",
      features: ["Stock Tracking", "Sales Reports", "Low Stock Alerts"],
      image: projectImages.inventory,
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      name: "Paint Shop Web Development Project",
      description: "Web-based system to manage paint shop operations, including product listing, order handling, and inventory management.",
      tech: ["HTML", "CSS", "JavaScript", "React.js"],
      icon: <Globe size={24} />,
      category: "web",
      github: "https://github.com/Santhorsh",
      demo: "#",
      features: ["Product Catalog", "Order Management", "Inventory Tracking"],
      image: projectImages.web,
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      name: "Clinic Management System",
      description: "Web application to manage patient records, appointments, and clinic operations, improving efficiency and data organization.",
      tech: ["HTML", "CSS", "PHP", "JavaScript", "MySQL"],
      icon: <Shield size={24} />,
      category: "web",
      github: "https://github.com/Santhorsh",
      demo: "#",
      features: ["Patient Records", "Appointment Scheduling", "Billing System"],
      image: projectImages.healthcare,
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      name: "Pharmacy Management System (Nalam Care Clinic)",
      description: "System to handle pharmacy inventory and prescription management, ensuring accurate tracking and streamlined workflow.",
      tech: ["HTML", "CSS", "Python", "PHP", "MySQL"],
      icon: <Database size={24} />,
      category: "fullstack",
      github: "https://github.com/Santhorsh",
      demo: "#",
      features: ["Prescription Processing", "Inventory Control", "Expiry Tracking"],
      image: projectImages.pharmacy,
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      name: "Legendary Recipe Web Page",
      description: "Developed a responsive recipe website with recipe browsing, search functionality, and database-driven content management using PHP and MySQL, featuring a clean, user-friendly interface and responsive CSS design.",
      tech: ["HTML", "CSS", "PHP", "MySQL", "JavaScript"],
      icon: <BookOpen size={24} />,
      category: "web",
      github: "https://github.com/Santhorsh",
      demo: "#",
      features: ["Recipe Browsing", "Search Functionality", "Database Content Management"],
      image: projectImages.recipe,
      gradient: "from-orange-500 to-red-500"
    },
    {
      name: "Task Management App",
      description: "Developed a full-stack task management application featuring secure JWT authentication, task CRUD operations, responsive UI, and database integration with Prisma ORM and MySQL, delivering a scalable and user-friendly solution.",
      tech: ["Next.js", "Node.js", "TypeScript", "Prisma ORM", "MySQL", "Tailwind CSS", "JWT", "Docker"],
      icon: <CheckSquare size={24} />,
      category: "fullstack",
      github: "https://github.com/Santhorsh",
      demo: "#",
      features: ["JWT Authentication", "Task CRUD Operations", "Responsive UI", "Docker Support"],
      image: projectImages.task,
      gradient: "from-blue-500 to-purple-500"
    },
    {
      name: "Solana Wallet Tracker",
      description: "Next.js + TypeScript application that displays Solana trending tokens, wallet information, and Phantom Wallet detection using the SolanaTracker API.",
      tech: ["Next.js", "TypeScript", "Solana", "Phantom Wallet", "REST API"],
      icon: <Wallet size={24} />,
      category: "web",
      github: "https://github.com/Santhorsh/Solana-wallet-tracker",
      demo: "#",
      features: ["Trending Tokens", "Wallet Information", "Phantom Wallet Detection"],
      image: projectImages.solana,
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      name: "ABC Book Store Website",
      description: "Developed a responsive bookstore website with a modern UI, book catalogue, categories, and contact page using HTML5 and CSS3, implementing responsive layouts with Flexbox and CSS Grid.",
      tech: ["HTML5", "CSS3", "Flexbox", "CSS Grid"],
      icon: <BookOpen size={24} />,
      category: "web",
      github: "https://github.com/Santhorsh",
      demo: "#",
      features: ["Responsive Design", "Book Catalogue", "CSS Grid & Flexbox"],
      image: projectImages.bookstore,
      gradient: "from-amber-500 to-yellow-500"
    }
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          My Projects
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A showcase of my work in web development, APIs, mobile apps, and system design.
        </p>
        {/* Project Count */}
        <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            Total Projects:
          </span>
          <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
            {projects.length}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            ({filteredProjects.length} shown)
          </span>
        </div>
      </div>

      {/* FILTERS */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {['all', 'web', 'mobile', 'backend', 'fullstack'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full capitalize transition-all ${
              filter === cat
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300'
            }`}
          >
            {cat} {cat === 'all' ? `(${projects.length})` : `(${projects.filter(p => p.category === cat).length})`}
          </button>
        ))}
      </div>

      {/* PROJECT GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <div
            key={idx}
            className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* PROJECT IMAGE */}
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
              {/* Category Badge */}
              <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full capitalize">
                {project.category}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* FEATURES */}
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

              {/* TECH */}
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

              {/* ACTIONS */}
              <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  <Github size={16} /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  <ExternalLink size={16} /> Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* GITHUB FOOTER */}
      <div className="mt-16 text-center">
        <a
          href="https://github.com/Santhorsh"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
        >
          <Github size={28} />
          <div className="text-left">
            <p className="text-sm opacity-80">Check out more on</p>
            <p className="font-semibold">github.com/Santhorsh</p>
          </div>
          <ExternalLink size={20} className="opacity-70" />
        </a>
      </div>

    </div>
  );
};

export default Projects;