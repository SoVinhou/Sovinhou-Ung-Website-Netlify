import React, { useState } from 'react';
import { ArrowRight, Github} from 'lucide-react';
import { personalInfo, restaurantProject } from '../data/mock';

const RestaurantSystem = () => {

    return (
        <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                
                {/* Project Header */}
                <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white p-8">
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">Restaurant Menu & Ordering System</h3>
                    <p className="text-gray-300 text-lg">Online Ordering Platform</p>
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
                            This web application is a full-stack platform featuring React.js frontend, FastAPI backend, and MongoDB database, it's designed to streamline dining experiences by connecting customers, chefs, and admins in a seamless, real-time ecosystem. 
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Built with modern technologies, it supports QR-code-based menu browsing, dual payment workflows, and multi-role interfaces, ensuring operational efficiency and enhanced customer satisfaction.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The system has been deployed and actively used at Seng Lip Tmey 2, a restaurant in Cambodia.
                        </p>
                        
                        {/* Tech Stack */}
                        <div className="mt-6">
                            <h5 className="text-sm font-semibold text-gray-900 mb-3">Technologies Used:</h5>
                            <div className="flex flex-wrap gap-2">
                                {[
                                'React.js', 
                                'Tailwind CSS', 
                                'Shadcn/UI Components', 
                                'Axios', 
                                'Sonner', 
                                'FastAPI', 
                                'Python', 
                                'MongoDB (Motor)', 
                                'Pydantic', 
                                'Kubernetes'
                                ].map((tech) => (
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
                                Uses and store information inside MangoDB
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-gray-600 rounded-full mr-2"></span>
                                QR-code optimized customer interface with dynamic menu browsing
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-gray-600 rounded-full mr-2"></span>
                                Advanced shopping cart with real-time updates and quantity management
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-gray-600 rounded-full mr-2"></span>
                                Dual payment workflows: cash and ABA bank transfer with verification
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-gray-600 rounded-full mr-2"></span>
                                Multi-role interfaces: Customer, Chef, Admin dashboards
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-gray-600 rounded-full mr-2"></span>
                                Real-time order tracking and status updates
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-gray-600 rounded-full mr-2"></span>
                                Promotional marketing system with animated sliders and calls-to-action
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-gray-600 rounded-full mr-2"></span>
                                Backend and frontend optimizations for performance and scalability
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-gray-600 rounded-full mr-2"></span>
                                Mobile-first responsive design with animations and micro-interactions
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-gray-600 rounded-full mr-2"></span>
                                Secure authentication and role-based access control
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
                                src="https://www.youtube.com/embed/R54y6uXKCVA?si=pi9zepyWfMVMdyuo"
                                title="Restaurant Online Ordering Platform Walkthrough"
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
                            This project transforms restaurant operations by digitizing the ordering process, enabling real-time communication between customers, chefs, and admins. Customers can browse menus, place orders, and track progress, while chefs manage pending orders, and admins oversee payment verification and workflow control.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            The platform demonstrates expertise in full-stack development, complex business logic, secure payment handling, responsive design, and modern UI/UX practices, resulting in a production-ready system currently enhancing both operational efficiency and customer experience at Seng Lip Tmey 2 in Cambodia.
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
                                src={restaurantProject.userDashboard}
                                alt="User Dashboard"
                                className="w-full h-full object-cover rounded-lg shadow-lg border-2 border-gray-600"
                                />
                            </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <h5 className="text-lg font-bold text-gray-900 mb-2">User Dashboard</h5>
                            <p className="text-md text-gray-600">Customers can browse and order food, with payments available via bank transfer or cash, the two primary payment methods in Cambodia.</p>
                        </div>
                        </div>
                    </div>

                    <div className="group hover:scale-105 transition-all duration-300 animate-slide-up">
                        <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[95%] h-[90%] bg-gray-900 bg-opacity-20 rounded-lg mb-3 mx-auto flex items-center justify-center">
                                <img
                                src={restaurantProject.chefDashboard}
                                alt="Chef DashBoard"
                                className="w-full h-full object-cover rounded-lg shadow-lg border-2 border-gray-600"
                                />
                            </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <h5 className="text-lg font-bold text-gray-900 mb-2">Chef Dashboard</h5>
                            <p className="text-md text-gray-600">Customer orders are displayed for chefs, who can accept or reject them, with the system notifying customers of updates in real time.</p>
                        </div>
                        </div>
                    </div>

                    <div className="group hover:scale-105 transition-all duration-300 animate-slide-up">
                        <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[95%] h-[90%] bg-gray-900 bg-opacity-20 rounded-lg mb-3 mx-auto flex items-center justify-center">
                                <img
                                src={restaurantProject.adminDashboard}
                                alt="Admin Dashboard"
                                className="w-full h-full object-cover rounded-lg shadow-lg border-2 border-gray-600"
                                />
                            </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <h5 className="text-lg font-bold text-gray-900 mb-2">Admin Dashboard</h5>
                            <p className="text-md text-gray-600">Admins can view customer bank transfer screenshots and verify payments before sending orders to chefs.</p>
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

export default RestaurantSystem;