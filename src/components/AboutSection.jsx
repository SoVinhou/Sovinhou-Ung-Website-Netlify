import React from 'react';
import { GraduationCap, Award, Code, Database, Globe, Smartphone } from 'lucide-react';
import { personalInfo, skills, education } from '../data/mock';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutSection = () => {
  const aboutRef = useScrollAnimation({ animationClass: 'animate-slide-up' });
  const bubblesRef = useScrollAnimation({ animationClass: 'animate-scale-in', delay: 300 });

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Globe className="text-black-600" size={24} />,
      skills: ['React.js', 'TypeScript', 'HTML/CSS', 'JavaScript']
    },
    {
      title: 'Backend',
      icon: <Database className="text-black-600" size={24} />,
      skills: ['Python', 'Java', 'C++', 'C#', '.NET', 'SQL']
    },
    {
      title: 'Mobile',
      icon: <Smartphone className="text-black-600" size={24} />,
      skills: ['React Native', 'iOS', 'Android']
    },
    {
      title: 'Tools',
      icon: <Code className="text-black-600" size={24} />,
      skills: ['Git', 'Docker', 'AWS', 'MongoDB', 'PostgreSQL', 'Firebase']
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div ref={aboutRef} className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
          <hr className="border-t-2 border-gray-600 w-full mx-auto mb-6" />
          <p className="text-xl text-gray-700 leading-relaxed">
            {personalInfo.bio2}
          </p>
        </div>

        {/* Bubbles Container */}
        <div ref={bubblesRef} className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Qualifications Bubble */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl p-8 shadow-2xl border border-gray-200 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 group">
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-bounce animation-delay-2000 rounded-full opacity-80 group-hover:scale-110 transition-transform duration-300"></div>
                <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-bounce animation-delay-2000 rounded-full opacity-60 group-hover:scale-110 transition-transform duration-300"></div>
                
                <div className="relative z-10">
                  {/* Header with Profile Image */}
                  <div className="flex items-center space-x-6 mb-8">
                    <div className="relative">
                      <img
                        src={personalInfo.profileImage}
                        alt={personalInfo.name}
                        className="w-24 h-24 rounded-full border-4 border-[#303842] shadow-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-gray-500 to-black rounded-full flex items-center justify-center">
                        <GraduationCap className="text-white" size={16} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">Qualifications</h3>
                      <p className="text-gray-600">Education & Certifications</p>
                    </div>
                  </div>

                  {/* Education List */}
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <div key={edu.id} className="flex items-start space-x-4 p-4 bg-white/50 rounded-xl backdrop-blur-sm border border-gray-200/50">
                        <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-black rounded-full flex items-center justify-center flex-shrink-0">
                          <Award className="text-white" size={20} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">{edu.degree}</h4>
                          <p className="text-gray-700 font-medium text-sm">{edu.institution}</p>
                          <p className="text-gray-500 text-sm">{edu.duration}</p>
                        </div>
                      </div>
                    ))}

                    {/* Achievement Badge */}
                    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl p-4 text-white text-center">
                      <div className="text-2xl font-bold mb-1">Distinction</div>
                      <div className="text-sm opacity-90">Academic Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Bubble */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl p-8 shadow-2xl border border-gray-200 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 group">
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-bounce animation-delay-3000 rounded-full opacity-80 group-hover:scale-110 transition-transform duration-300"></div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-bounce animation-delay-3000 rounded-full opacity-60 group-hover:scale-110 transition-transform duration-300"></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-full flex items-center justify-center">
                      <Code className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">Technical Skills</h3>
                      <p className="text-gray-600">Technologies & Tools</p>
                    </div>
                  </div>

                  {/* Skills Categories */}
                  <div className="space-y-6">
                    {skillCategories.map((category, index) => (
                      <div key={index} className="p-4 bg-white/60 rounded-xl backdrop-blur-sm border border-gray-200/50 hover:bg-white/80 transition-colors duration-300">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                            {category.icon}
                          </div>
                          <h4 className="font-semibold text-gray-900">{category.title}</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}

                    {/* Proficiency Indicator */}
                    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl p-4 text-white">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Overall Proficiency</span>
                        <span className="text-2xl font-bold">92%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-white rounded-full h-2 w-11/12 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;