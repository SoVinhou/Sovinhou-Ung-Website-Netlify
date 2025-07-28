import React, { useState, useEffect } from 'react';

const IntroAnimation = ({ onComplete }) => {
  const [currentLanguage, setCurrentLanguage] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  const greetings = [
    { text: 'Hello', language: 'English' },
    { text: 'Bonjour', language: 'Français' },
    { text: 'Hola', language: 'Español' },
    { text: '你好', language: 'Chinese' },
    { text: 'こんにちは', language: 'Japanese' },
    { text: '안녕하세요', language: 'Korean' },
    { text: 'Привет', language: 'Russian' }
  ];

  useEffect(() => {
    const typeText = async () => {
      for (let langIndex = 0; langIndex < greetings.length; langIndex++) {
        setCurrentLanguage(langIndex);
        const text = greetings[langIndex].text;
        
        // Type each character
        for (let i = 0; i <= text.length; i++) {
          setDisplayText(text.substring(0, i));
          await new Promise(resolve => setTimeout(resolve, 80));
        }
        
        // Pause at full text
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Clear text (except for last greeting)
        if (langIndex < greetings.length - 1) {
          for (let i = text.length; i >= 0; i--) {
            setDisplayText(text.substring(0, i));
            await new Promise(resolve => setTimeout(resolve, 10));
          }
          await new Promise(resolve => setTimeout(resolve, 100));
        }
      }
      
      // Final pause before fade out
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsCompleted(true);
      
      // Trigger fade out and completion
      setTimeout(() => {
        onComplete();
      }, 1000);
    };

    typeText();
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center transition-opacity duration-1000 ${
      isCompleted ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gray-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gray-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Main greeting display */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
            {displayText}
            <span className="animate-pulse">|</span>
          </h1>
          <p className="text-xl text-gray-300">
            {greetings[currentLanguage].language}
          </p>
        </div>

        {/* Loading dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce animation-delay-200"></div>
          <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce animation-delay-400"></div>
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;