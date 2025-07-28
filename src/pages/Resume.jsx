import React from 'react';
import { Download, MapPin, Phone, Mail, Github, Linkedin, Award, Briefcase, GraduationCap, Code } from 'lucide-react';
import { personalInfo, skills, experience, education } from '../data/mock';

const Resume = () => {
  const handleDownload = () => {
    // In a real app, this would trigger a PDF download
    alert('Resume download functionality will be implemented with PDF generation.');
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-12 bg-white shadow-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <h1 className="text-4xl font-bold text-gray-900 mb-2 animate-slide-up">
                  {personalInfo.name}
                </h1>
                <p className="text-xl text-blue-600 font-semibold mb-4 animate-fade-in animation-delay-200">
                  {personalInfo.title}
                </p>
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-600">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone size={16} className="mr-2" />
                    <span>{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail size={16} className="mr-2" />
                    <span>{personalInfo.email}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleDownload}
                className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-200 hover:scale-105 animate-slide-up animation-delay-400"
              >
                <Download size={20} />
                <span>Download PDF</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Sidebar */}
            <div className="md:col-span-1 bg-gray-900 text-white p-8">
              {/* Profile Image */}
              <div className="text-center mb-8">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
                />
              </div>

              {/* Contact Info */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-blue-300">Contact</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <Mail size={16} className="mr-3 text-blue-300" />
                    <span className="break-all">{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone size={16} className="mr-3 text-blue-300" />
                    <span>{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-3 text-blue-300" />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-blue-300">Connect</h3>
                <div className="space-y-3">
                  <a
                    href="https://github.com/sovinhou"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm hover:text-blue-300 transition-colors duration-200"
                  >
                    <Github size={16} className="mr-3" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/sovinhou-ung"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm hover:text-blue-300 transition-colors duration-200"
                  >
                    <Linkedin size={16} className="mr-3" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-blue-300 flex items-center">
                  <Code size={20} className="mr-2" />
                  Technical Skills
                </h3>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3 text-gray-300">Advanced</h4>
                  <div className="space-y-2">
                    {skills.advanced.map((skill) => (
                      <div key={skill} className="text-sm">
                        <div className="flex justify-between mb-1">
                          <span>{skill}</span>
                          <span className="text-blue-300">●●●●●</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3 text-gray-300">Familiar</h4>
                  <div className="space-y-2">
                    {skills.familiar.map((skill) => (
                      <div key={skill} className="text-sm">
                        <div className="flex justify-between mb-1">
                          <span>{skill}</span>
                          <span className="text-blue-300">●●●○○</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2 p-8">
              {/* Career Objective */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="mr-2 text-blue-600" size={24} />
                  Career Objective
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {personalInfo.bio}
                </p>
              </div>

              {/* Experience */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Briefcase className="mr-2 text-blue-600" size={24} />
                  Work Experience
                </h3>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={exp.id} className="border-l-4 border-blue-200 pl-6 pb-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">{exp.position}</h4>
                        <span className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                          {exp.duration}
                        </span>
                      </div>
                      <p className="text-blue-600 font-medium mb-1">{exp.company}</p>
                      <p className="text-gray-500 text-sm mb-4">{exp.location}</p>
                      <ul className="text-gray-700 text-sm space-y-2">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-blue-600 mr-2 mt-1 flex-shrink-0">•</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <GraduationCap className="mr-2 text-blue-600" size={24} />
                  Education
                </h3>
                <div className="space-y-4">
                  {education.map((edu) => (
                    <div key={edu.id} className="border-l-4 border-green-200 pl-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">{edu.degree}</h4>
                        <span className="text-sm text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full">
                          {edu.duration}
                        </span>
                      </div>
                      <p className="text-green-600 font-medium mb-1">{edu.institution}</p>
                      <p className="text-gray-500 text-sm">{edu.location}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Projects */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Code className="mr-2 text-blue-600" size={24} />
                  Featured Projects
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-200 pl-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">DevLink Freelancing Web Application</h4>
                    <div className="text-gray-700 text-sm space-y-2">
                      <p>• Designed and developed a full-stack web application with React.js, secure authentication, and payment integration</p>
                      <p>• Implemented database management, job posting features, and GPT-generated job descriptions</p>
                      <p>• Optimized performance, debugged issues, and ensured a user-friendly experience</p>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">React.js</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Node.js</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">MongoDB</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">GPT Integration</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;