// Mock data for Sovinhou Ung's Portfolio
export const personalInfo = {
  name: "Sovinhou Ung",
  title: "Full Stack Developer",
  location: "Melbourne, VIC",
  tagline: "Turning ideas into interactive experiences",
  bio: "Proactive Computer Science graduate with practical experience in React.js, Python, TypeScript and SQL from two internships. Passionate about building efficient and user-friendly applications with a focus on collaborative development and continuous learning.",
  bio2: "I’m a Computer Science graduate with hands-on experience in full-stack development through internships at Yaarn and Focus Bear. Skilled in Java, Python, TypeScript, SQL, and React.js, I’ve built scalable applications with secure authentication, GPT integration, and responsive UI designs. I’m driven by a passion for learning, solving complex problems, and writing clean, maintainable code. I aim to grow continuously as a developer and contribute meaningfully to a forward-thinking team.",
  email: "ungsovinhou@gmail.com",
  phone: "+61 405 587 357",
  linkedin: "https://linkedin.com/in/sovinhou-ung",
  github: "https://github.com/sovinhou",
  profileImage: "/images/profile.jpg",
  gradpic: "/images/gradpic.jpg",
  userdashboard: "/images/UserDashboard.png",
  userpayment: "/images/UserPayment.png",
  userJobDescription: "/images/UserJobDescription.png",
  userJobBoard: "/images/userjobboard.png",
  resumePdf: "/resume/Sovinhou-Ung-CV.pdf"
};

export const restaurantProject = {
  userDashboard: "/images/resud1.jpg",
  chefDashboard: "/images/chef2.png",
  adminDashboard: "/images/admin1.png"

};

export const skills = {
  advanced: ["Java", "TypeScript", "C++", "C#", "Python", "HTML/CSS", ".NET", "SQL", "React.js"],
  familiar: ["XML", "Node.js", "MongoDB", "PostgresQL", "Docker"],
  tools: ["Git", "VS Code", "Figma", "PyTest", "MySQL"]
};

export const experience = [
  {
    id: 1,
    company: "Yaarn Pty Ltd",
    position: "Full Stack Developer Internship",
    location: "Brunswick St Fitzroy",
    duration: "2023",
    description: [
      "Developed a web scraping tool in Python to extract targeted data from news websites, integrating GPT for automated summaries",
      "Collaborated with UX/UI designers and senior developers to create modern, responsive frontend designs using HTML5, CSS3, and JavaScript",
      "Designed a scalable SQL database for secure user data management, implementing unit and integration tests with PyTest"
    ]
  },
  {
    id: 2,
    company: "Focus Bear Pty Ltd",
    position: "Frontend Developer Internship",
    location: "Monash Generator, Clayton",
    duration: "2023",
    description: [
      "Designed and implemented new features for Focus Bear's web dashboard, including enhanced timer logic and improved search functionality",
      "Developed a side-snapping feature to display activity summaries and remaining timers",
      "Used debugging tools to identify and fix code issues, improving performance and stability",
      "Designed intuitive UI/UX components in Figma and developed comprehensive test cases"
    ]
  }
];

export const education = [
  {
    id: 1,
    institution: "Deakin University",
    degree: "Bachelor of Computer Science",
    duration: "Jan 2021 – Nov 2023",
    location: "Burwood, VIC"
  },
  {
    id: 2,
    institution: "Monash University",
    degree: "Professional Pathways",
    duration: "March 2024 – March 2025",
    location: "Melbourne, VIC"
  }
];

// export const projects = [
//   {
//     id: 1,
//     title: "DevLink Freelancing Platform",
//     description: "A full-stack web application connecting freelancers with clients, featuring secure authentication, payment integration, and AI-generated job descriptions.",
//     longDescription: "DevLink is a comprehensive freelancing platform built with React.js and Node.js. The application features secure user authentication, integrated payment processing, and utilizes GPT for generating compelling job descriptions. The platform includes database management for user profiles, job postings, and transaction history.",
//     techStack: ["React.js", "Node.js", "MongoDB", "Stripe API", "GPT Integration", "JWT Authentication"],
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
//     githubUrl: "https://github.com/sovinhou/devlink-platform",
//     liveUrl: "https://devlink-platform.vercel.app",
//     features: [
//       "Secure user authentication and authorization",
//       "Real-time job posting and application system",
//       "Integrated payment processing with Stripe",
//       "AI-powered job description generation",
//       "Responsive design optimized for all devices"
//     ],
//     status: "Completed",
//     year: "2023"
//   }
// ];

export const testimonials = [
  {
    id: 1,
    name: "Joe Gibbs",
    position: "Senior Developer",
    company: "Yaarn Pty Ltd",
    content: "Sovinhou demonstrated exceptional problem-solving skills and quickly adapted to our development workflow. His work on the web scraping tool exceeded our expectations.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Jeremy Naguel",
    position: "Product Manager",
    company: "Focus Bear Pty Ltd",
    content: "His attention to detail and ability to create intuitive user interfaces made a significant impact on our dashboard's user experience. A valuable team member.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  }
];

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" }
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/sovinhou",
    icon: "Github"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/sovinhou-ung",
    icon: "Linkedin"
  },
  {
    name: "Email",
    url: "mailto:ungsovinhou@gmail.com",
    icon: "Mail"
  }
];
