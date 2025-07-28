import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Mail, Github, Linkedin } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/mock';

const Landing = () => {
  const iconMap = {
    Github,
    Linkedin,
    Mail
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-blue-600 font-medium text-lg animate-fade-in">
                  Hi, I'm
                </p>
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 animate-slide-up">
                  {personalInfo.name}
                </h1>
                <p className="text-2xl md:text-3xl text-gray-600 animate-slide-up animation-delay-200">
                  {personalInfo.title}
                </p>
                <p className="text-xl text-blue-600 font-medium animate-slide-up animation-delay-400">
                  {personalInfo.tagline}
                </p>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl animate-fade-in animation-delay-600">
                {personalInfo.bio}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-800">
                <Link
                  to="/projects"
                  className="group bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 hover:scale-105"
                >
                  <span>View Projects</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>

                <a
                  href={personalInfo.resumePdf}
                  download
                  className="group border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2 hover:scale-105"
                >
                  <Download size={20} />
                  <span>Download Resume</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 animate-fade-in animation-delay-1000">
                {socialLinks.map((social) => {
                  const Icon = iconMap[social.icon];
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 group"
                      aria-label={social.name}
                    >
                      <Icon size={24} className="text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center animate-fade-in animation-delay-400">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg animate-bounce">
                  💻
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-bounce animation-delay-1000">
                  🚀
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-105 transition-transform duration-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">2+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Technologies</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Dedication</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;