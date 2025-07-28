// Resume AI Chat Service - Direct OpenAI API Integration
// No backend required - calls OpenAI API directly from frontend

const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

const RESUME_CONTEXT = `
You are an AI assistant representing a software developer. Here is their complete resume information:

Name: Sovinhou Ung
Location: Melbourne, Australia

EDUCATION:
- Monash Professional Pathways, Melbourne (Mar 2024 – Mar 2025): Professional Year ICT
- Deakin University, Burwood (Mar 2021 – Oct 2023): Bachelor of Computer Science
- Relevant Coursework: Object Oriented Development, Data Structures & Algorithms, Advanced Algorithms, Frontend Development, Backend Development

SKILLS:
- Programming: Java, Python, JavaScript, TypeScript, C#, C, HTML/CSS, GraphQL, SQL, PostgreSQL
- Software & Tools: .NET, React.js, Node.js, MongoDB, Firebase, Docker, AWS

WORK EXPERIENCE:
Focus Bear Pty Ltd: Frontend Developer Intern (Nov 2024 – Feb 2025)
- Engineered an intelligent activity suggestion system using historical user behaviour data to enhance user's experience and engagement through relevant and personalised suggestions
- Redesigned and launched a modernised web dashboard interface, introducing a side snapping summary panel and background timer, improving task visibility and increasing average session time
- Resolved over 100 critical and minor frontend bugs using advanced debugging tools, which reduced UI crashes and errors by more than 50%, significantly improving reliability
- Crafted responsive and intuitive UI/UX components in Figma and implemented them in React, collaborated in writing unit and integration test cases, achieving high test coverage pre-deployment

Yaarn Pty Ltd: Full Stack Developer Intern (Jul 2023 – Sep 2023)
- Built a Python scraper extracting article metadata (authors, titles, summaries) from all news sites with GPT integrated to auto-generate summaries, and deployed a scalable SQL database to manage and secure scraped website data for more than 5,000 records, ensuring uptime and reliable access
- Wrote and executed more than 100 unit and integration tests using PyTest, catching and resolving backend issues before deployment, significantly improving system reliability
- Developed an interactive user interface to complement backend scraping services and designed the introduction page, enabling seamless access and navigation of aggregated content across devices

PROJECTS:
DevLink Freelancing Web Application
- Architected and delivered a full-stack freelancing marketplace using React.js and Node.js, integrating Firebase, Stripe, OpenAI GPT, and SendGrid APIs to connect freelancers with employers
- Engineered secure Stripe payment processing with Payment Intents for AUD transactions and developed intelligent OpenAI GPT-powered job description generation to assist user
- Implemented Firebase auth (email/password, Google OAuth) with email verification, real-time Firestore for dynamic job filtering, and automated SendGrid notifications using custom templates
- Optimised application performance with React Router client-side routing, component-based architecture, and responsive cross-platform design

Please answer questions about this person's background, skills, experience, and projects in a friendly and professional manner. Be specific about their achievements and technical capabilities. 
State your answer is first person, as if you are the AI assistant representing the software developer.
`;

/**
 * Generates session ID for chat tracking
 */
const generateSessionId = () => {
  return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
};

/**
 * Chat with AI about resume information
 * @param {string} message - User's question
 * @param {string} sessionId - Optional session ID for tracking
 * @returns {Promise<Object>} AI response with session ID
 */
export const chatWithAI = async (message, sessionId = null) => {
  // Placeholder responses for fallback
  const placeholderResponses = [
    "Thanks for your interest! I'm a software developer with experience in React.js, Node.js, and Python. Feel free to ask me about my projects or skills!",
    "I have worked as a Frontend Developer Intern at Focus Bear and Full Stack Developer Intern at Yaarn. Would you like to know more about my experience?",
    "I've built several projects including DevLink, a freelancing marketplace. What specific aspect would you like to know about?"
  ];

  const currentSessionId = sessionId || generateSessionId();

  // Use real OpenAI API if key is available
  if (OPENAI_API_KEY) {
    try {
      console.log("Making OpenAI API call...");
      
      const response = await fetch(OPENAI_API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: [
            {
              role: 'system',
              content: RESUME_CONTEXT
            },
            {
              role: 'user',
              content: message
            }
          ],
          max_tokens: 500,
          temperature: 0.7,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const aiResponse = data.choices[0].message.content;
        
        console.log(`AI Response received: ${aiResponse.length} characters`);
        
        return {
          response: aiResponse,
          session_id: currentSessionId,
          success: true
        };
      } else {
        const errorData = await response.json();
        throw new Error(`API request failed: ${errorData.error?.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.warn('OpenAI API error, falling back to placeholder:', error);
      // Fall back to placeholder if API fails
    }
  }

  // Return placeholder response if no API key or API fails
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
  
  // Simple keyword-based responses for better fallback experience
  const lowerMessage = message.toLowerCase();
  let placeholderResponse;
  
  if (lowerMessage.includes('experience') || lowerMessage.includes('work')) {
    placeholderResponse = "I have professional experience as a Frontend Developer Intern at Focus Bear (Nov 2024 – Feb 2025) and Full Stack Developer Intern at Yaarn (Jul 2023 – Sep 2023). I've worked on user interfaces, debugging, testing, and full-stack development projects.";
  } else if (lowerMessage.includes('project') || lowerMessage.includes('devlink')) {
    placeholderResponse = "My main project is DevLink, a full-stack freelancing marketplace built with React.js and Node.js. It features Firebase authentication, Stripe payments, OpenAI integration, and real-time job filtering. Would you like to know more about its specific features?";
  } else if (lowerMessage.includes('skill') || lowerMessage.includes('technology')) {
    placeholderResponse = "I'm proficient in Java, Python, JavaScript, TypeScript, C#, HTML/CSS, React.js, Node.js, MongoDB, Firebase, Docker, and AWS. I also have experience with .NET, GraphQL, SQL, and PostgreSQL.";
  } else if (lowerMessage.includes('education') || lowerMessage.includes('university')) {
    placeholderResponse = "I completed my Bachelor of Computer Science at Deakin University (2021-2023) and I'm currently doing Professional Year ICT at Monash Professional Pathways (2024-2025). My coursework included algorithms, data structures, and full-stack development.";
  } else {
    placeholderResponse = placeholderResponses[Math.floor(Math.random() * placeholderResponses.length)];
  }

  return {
    response: placeholderResponse,
    session_id: currentSessionId,
    success: true
  };
};

/**
 * Get API health status
 */
export const getAPIStatus = () => {
  return {
    status: OPENAI_API_KEY ? "configured" : "fallback",
    message: OPENAI_API_KEY ? "Resume AI Chat API Ready" : "Using placeholder responses"
  };
};

/**
 * Instructions for implementing OpenAI integration:
 * 
 * 1. Sign up for OpenAI API access at https://platform.openai.com/
 * 2. Get your API key from the dashboard
 * 3. Add your API key to your environment variables:
 *    - Create a .env file in your frontend directory
 *    - Add: REACT_APP_OPENAI_API_KEY=your_actual_api_key_here
 * 4. The function above will automatically use the real API once the key is available
 * 
 * Environment Variable Setup:
 * ```
 * # Add to /frontend/.env
 * REACT_APP_OPENAI_API_KEY=your_openai_api_key_here
 * ```
 * 
 * The API will generate contextually relevant responses about:
 * - Professional experience and internships
 * - Technical skills and technologies
 * - Educational background
 * - Project details and achievements
 * - Specific questions about the developer's background
 * 
 * Fallback responses are provided for when the API key is not available.
 */

export default {
  chatWithAI,
  getAPIStatus
};