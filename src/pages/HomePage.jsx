import React, { useState } from 'react';
import { ArrowRight, Download, Mail, Github, Linkedin, Send, MapPin, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import { personalInfo, socialLinks, projects } from '../data/mock';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';
import IntroAnimation from '../components/IntroAnimation';
import QuoteModal from '../components/QuoteModal';
import QuoteSection from '../components/QuoteSection';
import AboutSection from '../components/AboutSection';
import FloatingChatbox from '../chatbox';

const HomePage = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Animation refs
  const heroRef = useScrollAnimation({ animationClass: 'animate-fade-in', delay: 200 });
  const projectsRef = useStaggeredAnimation(projects.length, 200);
  const contactRef = useScrollAnimation({ animationClass: 'animate-slide-up' });

  const iconMap = {
    Github,
    Linkedin,
    Mail
  };

  const handleIntroComplete = () => {
    setShowIntro(false);
    setShowQuoteModal(true);
  };

  const handleQuoteModalClose = () => {
    setShowQuoteModal(false);
  };

  // Contact form handlers
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
    //   await new Promise(resolve => setTimeout(resolve, 1500));
      
    //   const existingMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    //   const newMessage = {
    //     ...formData,
    //     timestamp: new Date().toISOString(),
    //     id: Date.now()
    //   };
    //   existingMessages.push(newMessage);
    //   localStorage.setItem('contactMessages', JSON.stringify(existingMessages));
      
    //   setSubmitStatus('success');
    //   setFormData({ name: '', email: '', subject: '', message: '' });
    // } catch (error) {
    //   setSubmitStatus('error');
    // } finally {
    //   setIsSubmitting(false);
    //   setTimeout(() => setSubmitStatus(null), 5000);
    // }
    const response = await fetch('https://formspree.io/f/mnnzpede', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(e.target),
    });
    if (response.ok) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setSubmitStatus('error');
    }
    } catch {
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
  };

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const [typedText, setTypedText] = useState("");
  const fullText = "Hello there! I'm";

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    if (showIntro) return; // Only run when intro is done
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 200);
    return () => clearInterval(interval);
  }, [showIntro]);

  if (showIntro) {
    return <IntroAnimation onComplete={handleIntroComplete} />;
  }

  return (
    <div className="overflow-x-hidden">
      {showQuoteModal && <QuoteModal onClose={handleQuoteModalClose} />}

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gray-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gray-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-4000"></div>
        </div>

        <div ref={heroRef} className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className={`text-2xl font-bold hover:scale-105 transition-transform duration-200 custom-hero-text ${
                  windowWidth < 440 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent' 
                    : 'text-gray-300'
                }`}>
                  {typedText}
                </p>
                <style>
                  {`
                    @media (max-width: 500px) {
                      .custom-hero-text {
                        font-size: 0.950rem;
                      }
                    }
                  `}
                </style>
                <h1 className="text-5xl md:text-7xl font-bold text-white">
                  {personalInfo.name}
                </h1>
                <p className="text-2xl md:text-3xl text-gray-300">
                  {personalInfo.title}
                </p>
                <p className="text-xl text-white font-medium">
                  {personalInfo.tagline}
                </p>
              </div>

              <p className="text-lg text-white leading-relaxed max-w-2xl">
                {personalInfo.bio}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                  className="group bg-gradient-to-r from-gray-600 to-gray-800 text-white px-8 py-4 rounded-full font-semibold hover:from-gray-500 hover:to-gray-700 transition-all duration-200 flex items-center justify-center space-x-2 hover:scale-105"
                >
                  <span>View Projects</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 animate-pulse animation-delay-500 transition-transform duration-200" />
                </button>

                <a
                  href={personalInfo.resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-2 border-gray-400 text-white px-8 py-4 animate-pulse animation-delay-500 rounded-full font-semibold hover:bg-gray-400 hover:text-gray-900 transition-all duration-200 flex items-center justify-center space-x-2 hover:scale-105"
                >
                  <Download size={20} />
                  <span>View Resume</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = iconMap[social.icon];
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-700 rounded-full shadow-lg animate-pulse animation-delay-500 hover:shadow-xl hover:scale-110 transition-all duration-200 group hover:bg-gray-600"
                      aria-label={social.name}
                    >
                      <Icon size={24} className="text-white group-hover:text-white transition-colors duration-200" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative mb-16">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gray-600 shadow-2xl">
                  <img
                    src={personalInfo.gradpic}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-gray-500 to-gray-800 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg animate-bounce">
                  💻
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-r from-gray-500 to-gray-800 rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-bounce animation-delay-1000">
                  🚀
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <QuoteSection />

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Project</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              A comprehensive showcase of my flagship development project
            </p>
          </div>

          {/* DevLink Project Showcase */}
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
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <div ref={contactRef} className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Let's Connect</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                    or simply chat about technology and development. Feel free to reach out!
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-6 bg-white rounded-lg hover:shadow-lg transition-shadow duration-200 border border-gray-200">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-gray-800" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600 mb-2">Send me a message anytime</p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-gray-800 hover:text-gray-600 font-medium transition-colors duration-200"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-white rounded-lg hover:shadow-lg transition-shadow duration-200 border border-gray-200">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-gray-800" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600 mb-2">Call for immediate assistance</p>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="text-gray-800 hover:text-gray-600 font-medium transition-colors duration-200"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-white rounded-lg border border-gray-200">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-gray-800" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Location</h4>
                      <p className="text-gray-600 mb-2">Based in Australia</p>
                      <p className="text-gray-800 font-medium">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => {
                      const Icon = iconMap[social.icon];
                      return (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white rounded-full hover:bg-gray-100 hover:text-gray-800 transition-all duration-200 hover:scale-110 group shadow-lg border border-gray-200"
                          aria-label={social.name}
                        >
                          <Icon size={24} className="group-hover:scale-110 transition-transform duration-200 text-gray-700" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3 animate-fade-in">
                    <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                    <p className="text-green-800">Message sent successfully! I'll get back to you soon.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3 animate-fade-in">
                    <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
                    <p className="text-red-800">Something went wrong. Please try again.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors duration-200"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors duration-200"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors duration-200"
                      placeholder="Subject of your message"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors duration-200 resize-vertical"
                      placeholder="Describe your message..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-lg font-semibold transition-all duration-200 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gray-800 hover:bg-gray-700 hover:scale-105 active:scale-95'
                    } text-white`}
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto animate-scale-in">
            <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            <div className="p-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">About This Project</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {selectedProject.longDescription}
                  </p>

                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-600">
                        <span className="text-gray-800 mr-2 mt-1">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Project Details</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center">
                        <span className="text-gray-600">Year: {selectedProject.year}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-600">Status: {selectedProject.status}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-800 text-white rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-200"
                >
                  <Github size={20} />
                  <span>View Code</span>
                </a>
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors duration-200"
                >
                  <ArrowRight size={20} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Chatbox */}
      <FloatingChatbox />
    </div>
  );
};

export default HomePage;