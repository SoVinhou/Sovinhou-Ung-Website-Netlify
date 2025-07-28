import React, { useEffect, useRef } from 'react';
import { Code, Award, Users, Lightbulb } from 'lucide-react';
import { personalInfo, skills, experience, education } from '../data/mock';

const About = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
      timelineItems.forEach((item) => observer.observe(item));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
              About Me
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed animate-fade-in animation-delay-200">
              {personalInfo.bio}
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
              What Drives Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <Code className="text-blue-600" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Clean Code</h3>
                <p className="text-gray-600">Writing maintainable, efficient, and scalable code that stands the test of time.</p>
              </div>

              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                  <Users className="text-green-600" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaboration</h3>
                <p className="text-gray-600">Working closely with teams to deliver exceptional user experiences and solutions.</p>
              </div>

              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                  <Lightbulb className="text-purple-600" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">Constantly learning new technologies and finding creative solutions to complex problems.</p>
              </div>

              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                  <Award className="text-orange-600" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600">Striving for quality in every project and continuous improvement in all aspects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
              Technical Skills
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Advanced</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.advanced.map((skill, index) => (
                    <span
                      key={skill}
                      className={`px-3 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200 animate-fade-in`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Familiar</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.familiar.map((skill, index) => (
                    <span
                      key={skill}
                      className={`px-3 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium hover:bg-green-200 transition-colors duration-200 animate-fade-in`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((tool, index) => (
                    <span
                      key={tool}
                      className={`px-3 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors duration-200 animate-fade-in`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
              My Journey
            </h2>
            
            <div ref={timelineRef} className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-blue-200"></div>
              
              {/* Experience Items */}
              <div className="space-y-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-8">Experience</h3>
                {experience.map((exp, index) => (
                  <div key={exp.id} className={`timeline-item relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform md:-translate-x-2 z-10"></div>
                    
                    <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-semibold text-gray-900">{exp.position}</h4>
                          <span className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                            {exp.duration}
                          </span>
                        </div>
                        <p className="text-blue-600 font-medium mb-1">{exp.company}</p>
                        <p className="text-gray-500 text-sm mb-4">{exp.location}</p>
                        <ul className="text-gray-600 text-sm space-y-2">
                          {exp.description.map((desc, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-blue-600 mr-2 mt-1">•</span>
                              {desc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Education Items */}
                <h3 className="text-2xl font-semibold text-gray-900 mb-8 mt-16">Education</h3>
                {education.map((edu, index) => (
                  <div key={edu.id} className={`timeline-item relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-green-600 rounded-full transform md:-translate-x-2 z-10"></div>
                    
                    <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-semibold text-gray-900">{edu.degree}</h4>
                          <span className="text-sm text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full">
                            {edu.duration}
                          </span>
                        </div>
                        <p className="text-green-600 font-medium mb-1">{edu.institution}</p>
                        <p className="text-gray-500 text-sm">{edu.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;