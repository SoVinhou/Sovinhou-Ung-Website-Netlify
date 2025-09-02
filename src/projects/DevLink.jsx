import React, { useState } from 'react';
import { ArrowRight, Github} from 'lucide-react';
import { personalInfo} from '../data/mock';

const DevLink = () => {

    return (
        <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                
                {/* Project Header */}
                <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white p-8">
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">DevLink Web Application</h3>
                    <p className="text-gray-300 text-lg">Freelancing Platform</p>
                    </div>
                    <div className="flex space-x-4">
                    <a
                        href="https://github.com/SoVinhou/DevLink-Web-App"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-full transition-colors duration-200"
                    >
                        <Github size={20} />
                        <span>View Code</span>
                    </a>
                    <a
                        href="https://www.youtube.com/watch?v=blwlXa7b5PU"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-full transition-colors duration-200"
                    >
                        <ArrowRight size={20} />
                        <span>Live Demo</span>
                    </a>
                    </div>
                </div>
                </div>

                {/* Main Content Area */}
                <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    
                    {/* About DevLink Section */}
                    <div className="lg:col-span-2 space-y-6">
                    <div className="animate-slide-up">
                        <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                        ABOUT THE PROJECT
                        </h4>
                        
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border-l-4 border-gray-500">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            DevLink is a comprehensive freelancing platform that bridges the gap between talented developers and businesses seeking quality software solutions.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Built with modern technologies, it features secure authentication, real-time messaging, integrated payments, and AI-powered job matching.
                        </p>
                        
                        {/* Tech Stack */}
                        <div className="mt-6">
                            <h5 className="text-sm font-semibold text-gray-900 mb-3">Technologies Used:</h5>
                            <div className="flex flex-wrap gap-2">
                            {['React.js', 'Node.js', 'Firebase Database', 'Stripe API', 'GPT Integration'].map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-gray-800 text-white text-xs rounded-full font-medium">
                                {tech}
                                </span>
                            ))}
                            </div>
                        </div>
                        
                        {/* Key Features */}
                        <div className="mt-6">
                            <h5 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h5>
                            <ul className="text-sm text-gray-600 space-y-1">
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-gray-600 rounded-full mr-2"></span>
                                Secure user authentication and authorization
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-gray-600 rounded-full mr-2"></span>
                                Email verification, password reset, account creation, and Google Sign-In integration
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-gray-600 rounded-full mr-2"></span>
                                Real-time job posting & application system
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-gray-600 rounded-full mr-2"></span>
                                Integrated payment processing with Stripe
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-gray-600 rounded-full mr-2"></span>
                                AI-powered job description generation
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-gray-600 rounded-full mr-2"></span>
                                Email and newsletter subscription
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-gray-600 rounded-full mr-2"></span>
                                Database management implementation using Firebase
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>

                    {/* Vertical Separator */}
                    <div className="lg:col-span-1 flex justify-center">
                    <div className="hidden lg:block w-px bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 h-full relative">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gray-800 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                    </div>
                    {/* Mobile separator */}
                    <div className="lg:hidden w-full h-px bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 relative">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gray-800 rounded-full border-2 border-white shadow-lg"></div>
                    </div>
                    </div>

                    {/* Video and Description Section */}
                    <div className="lg:col-span-2 space-y-6">
                    <div className="animate-slide-up animation-delay-200">
                        
                        {/* YouTube Video Box */}
                        <div className="mb-6">
                        <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            PROJECT DEMO
                        </h4>
                        
                        <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                            <div className="aspect-video flex items-center justify-center relative animate-bounce animation-delay-500">
                            <iframe
                                className="w-full h-full rounded-xl shadow-2xl border-2 border-gray-700"
                                src="https://www.youtube.com/embed/blwlXa7b5PU?si=9gmnoE9emwMMzOzM"
                                title="DevLink Platform Walkthrough"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            </div>
                        </div>

                        </div>

                        {/* Project Description */}
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border-2 border-gray-500">
                        <h5 className="text-lg font-semibold text-gray-900 mb-4">Project Overview</h5>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            DevLink revolutionizes the freelancing experience by providing a seamless platform where developers can showcase their skills and clients can find the perfect match for their projects. The platform leverages AI to generate compelling job descriptions and provides a secure environment for transactions.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            The application demonstrates advanced full-stack development skills including database design, API development, user authentication, payment processing, and modern React.js frontend development with responsive design principles.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>

                {/* Project Screenshots Section */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
                    PROJECT GALLERY
                    </h4>

                    <div className="grid grid-row-1 md:grid-row-3 gap-8">
                    {/* Screenshot 1 */}
                    <div className="group hover:scale-105 transition-all duration-300 animate-slide-up">
                        <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[95%] h-[90%] bg-gray-900 bg-opacity-20 rounded-lg mb-3 mx-auto flex items-center justify-center">
                                <img
                                src={personalInfo.userdashboard}
                                alt="User Dashboard"
                                className="w-full h-full object-cover rounded-lg shadow-lg border-2 border-gray-600"
                                />
                            </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <h5 className="text-lg font-bold text-gray-900 mb-2">User Dashboard</h5>
                            <p className="text-md text-gray-600">Users can sign up with an email and password or seamlessly authenticate using their Google account. Core features include login/logout functionality, password reset, email verification, and newsletter subscription. All user data is securely stored and managed in the database.</p>
                        </div>
                        </div>
                    </div>

                    <div className="group hover:scale-105 transition-all duration-300 animate-slide-up">
                        <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[95%] h-[90%] bg-gray-900 bg-opacity-20 rounded-lg mb-3 mx-auto flex items-center justify-center">
                                <img
                                src={personalInfo.userJobBoard}
                                alt="User Job Board"
                                className="w-full h-full object-cover rounded-lg shadow-lg border-2 border-gray-600"
                                />
                            </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <h5 className="text-lg font-bold text-gray-900 mb-2">Jobs Board</h5>
                            <p className="text-md text-gray-600">This section displays all jobs posted by users, allowing freelancers to showcase their listings and enabling potential employees to search for relevant opportunities. Admin users have the ability to manage and remove job postings. All job data is securely stored in the database.</p>
                        </div>
                        </div>
                    </div>

                    <div className="group hover:scale-105 transition-all duration-300 animate-slide-up">
                        <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[95%] h-[90%] bg-gray-900 bg-opacity-20 rounded-lg mb-3 mx-auto flex items-center justify-center">
                                <img
                                src={personalInfo.userpayment}
                                alt="User Payment"
                                className="w-full h-full object-cover rounded-lg shadow-lg border-2 border-gray-600"
                                />
                            </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <h5 className="text-lg font-bold text-gray-900 mb-2">Payment Page</h5>
                            <p className="text-md text-gray-600">Integrated with Stripe, the platform enables users and freelancers to securely make payments for posting or promoting jobs directly through the website.</p>
                        </div>
                        </div>
                    </div>

                    <div className="group hover:scale-105 transition-all duration-300 animate-slide-up">
                        <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[95%] h-[90%] bg-gray-900 bg-opacity-20 rounded-lg mb-3 mx-auto flex items-center justify-center">
                                <img
                                src={personalInfo.userJobDescription}
                                alt="User Job Lists"
                                className="w-full h-full object-cover rounded-lg shadow-lg border-2 border-gray-600"
                                />
                            </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <h5 className="text-lg font-bold text-gray-900 mb-2">Job Listing</h5>
                            <p className="text-md text-gray-600">Users can post job listings directly on the platform, with the option to auto-generate professional job descriptions using AI powered by the GPT-3.5 Turbo model. This feature streamlines the posting process, ensuring high-quality, well-structured descriptions tailored to the job type, saving users time and effort.</p>
                        </div>
                        </div>
                    </div>

                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default DevLink;
