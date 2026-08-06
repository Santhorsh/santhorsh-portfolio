import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Send, Calendar, Code2, Award, Target, Users } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { 
      icon: <Mail size={24} />, 
      label: 'Email', 
      value: 'ksanthorsh@gmail.com', 
      href: 'mailto:ksanthorsh@gmail.com',
      bg: 'from-blue-500 to-blue-600'
    },
    { 
      icon: <Phone size={24} />, 
      label: 'Phone', 
      value: '+94 70 461 1523', 
      href: 'tel:+94704611523',
      bg: 'from-green-500 to-green-600'
    },
    { 
      icon: <MapPin size={24} />, 
      label: 'Location', 
      value: 'Colombo, Sri Lanka', 
      href: null,
      bg: 'from-red-500 to-red-600'
    }
  ];

  const socialLinks = [
    { 
      icon: <Github size={22} />, 
      label: 'GitHub', 
      href: 'https://github.com/Santhorsh',
      color: 'hover:bg-gray-700'
    },
    { 
      icon: <Linkedin size={22} />, 
      label: 'LinkedIn', 
      href: 'https://linkedin.com/in/Santhorsh',
      color: 'hover:bg-blue-700'
    },
    { 
      icon: <Mail size={22} />, 
      label: 'Email', 
      href: 'mailto:ksanthorsh@gmail.com',
      color: 'hover:bg-red-600'
    }
  ];

  const quickResponse = [
    "💬 Usually responds within 24 hours",
    "📅 Available for freelance projects",
    "🌍 Open to remote opportunities",
    "🎯 Looking for internship positions"
  ];

  const engineeringHighlights = [
    {
      icon: <Code2 size={28} />,
      title: "Full Stack Developer",
      desc: "Building scalable web applications with modern technologies"
    },
    {
      icon: <Award size={28} />,
      title: "10+ Projects",
      desc: "Diverse portfolio spanning web, mobile, and backend development"
    },
    {
      icon: <Target size={28} />,
      title: "Problem Solver",
      desc: "Passionate about solving complex technical challenges"
    },
    {
      icon: <Users size={28} />,
      title: "Team Player",
      desc: "Collaborative developer with strong communication skills"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-4 animate-pulse">
          ✦ Let's Connect ✦
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
          Get In Touch
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
          Have an opportunity, project, or just want to say hi? I'd love to hear from you.
        </p>
      </div>

      {/* Engineering Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {engineeringHighlights.map((item, idx) => (
          <div
            key={idx}
            className="group bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center"
          >
            <div className="inline-flex p-3 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h4 className="font-semibold text-sm text-gray-900 dark:text-white">{item.title}</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {contactInfo.map((item, idx) => (
          <div
            key={idx}
            className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
          >
            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.bg} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
              {item.icon}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{item.label}</p>
            {item.href ? (
              <a
                href={item.href}
                className="font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item.value}
              </a>
            ) : (
              <p className="font-semibold text-gray-900 dark:text-white">{item.value}</p>
            )}
          </div>
        ))}
      </div>

      {/* Main Contact Section */}
      <div className="grid lg:grid-cols-5 gap-8">
        {/* Left Column - Contact Info (3 columns) */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Contact Information
              </span>
            </h2>
            
            <div className="space-y-4">
              {contactInfo.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-700 dark:hover:to-gray-700 transition-all duration-300">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${item.bg} text-white shadow-md`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-semibold text-gray-900 dark:text-white hover:text-blue-600 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-gray-900 dark:text-white">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <span className="text-gray-700 dark:text-gray-300">Connect with me</span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 px-2 py-0.5 rounded-full">Social</span>
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 ${social.color} hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Response Cards */}
          <div className="grid grid-cols-2 gap-4">
            {quickResponse.map((text, idx) => (
              <div
                key={idx}
                className="group bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 border-2 border-transparent"
              >
                <p className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - CV Download (2 columns) */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-xl h-full flex flex-col justify-center relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Calendar size={28} />
                </div>
                <h2 className="text-2xl font-bold">Open for Opportunities</h2>
              </div>
              
              <div className="space-y-2 mb-6">
                <p className="text-blue-100 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white/60 rounded-full"></span>
                  Looking for Software Engineering Internships
                </p>
                <p className="text-blue-100 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white/60 rounded-full"></span>
                  Available for Full Stack Development Projects
                </p>
                <p className="text-blue-100 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white/60 rounded-full"></span>
                  Open to Remote & Hybrid Opportunities
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="/CV.pdf"
                  download="CV.pdf"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-2xl transition-all hover:scale-105 group"
                >
                  <Download size={18} className="group-hover:animate-bounce" /> 
                  Download CV
                </a>
                <a
                  href="mailto:ksanthorsh@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/30 transition-all border border-white/30"
                >
                  <Send size={18} /> 
                  Send Direct Message
                </a>
              </div>

              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-sm text-blue-200 text-center">
                  ✦ I'll respond within 24 hours ✦
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-full shadow-md border border-blue-200 dark:border-gray-700">
          <Send size={20} className="text-blue-600 animate-pulse" />
          <span className="text-gray-700 dark:text-gray-300 font-medium">
            I look forward to hearing from you!
          </span>
          <span className="text-2xl">🚀</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;