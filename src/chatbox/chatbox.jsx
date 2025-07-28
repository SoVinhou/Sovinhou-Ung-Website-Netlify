import React, { useState, useEffect, useRef } from 'react';
import { personalInfo } from '../data/mock';
import './chatbox.css';
import { chatWithAI } from '../services/chatBotServer';

function Chatbox() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      content: "Hi! I'm an AI assistant that can answer questions about my background, skills, and experience. Feel free to ask me anything!"
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Check if mobile device and track viewport height for keyboard
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    // Listen for viewport height changes (keyboard open/close)
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Auto scroll to bottom
  useEffect(() => {
    scrollToBottom();
  }, [messages, isInputFocused]);

  // Focus input when chat opens
  useEffect(() => {
    if (isChatOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
    }
  }, [isChatOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');

    // Add user message to chat
    setMessages(prev => [...prev, {
      type: 'user',
      content: userMessage
    }]);

    setIsLoading(true);

    try {
      // Use the chatService instead of direct backend call
      const result = await chatWithAI(userMessage, sessionId);

      if (result.success) {
        setSessionId(result.session_id);
        setMessages(prev => [...prev, {
          type: 'ai',
          content: result.response
        }]);
      } else {
        throw new Error('AI service error');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        type: 'ai',
        content: 'Sorry, I encountered an error. Please try again.'
      }]);
    } finally {
      setIsLoading(false);
      // On mobile, blur input after sending to close keyboard
      if (isMobile && inputRef.current) {
        inputRef.current.blur();
      }
      setIsInputFocused(false);
    }
  };

  // const sendMessage = async () => {
  //   if (!inputMessage.trim() || isLoading) return;

  //   const userMessage = inputMessage.trim();
  //   setInputMessage('');
    
  //   // Add user message to chat
  //   setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
  //   setIsLoading(true);

  //   try {
  //     const response = await fetch(`http://localhost:8001/api/chat`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         message: userMessage,
  //         session_id: sessionId
  //       }),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Failed to send message');
  //     }

  //     const data = await response.json();
      
  //     // Set session ID if first message
  //     if (!sessionId) {
  //       setSessionId(data.session_id);
  //     }
      
  //     // Add AI response to chat
  //     setMessages(prev => [...prev, { type: 'ai', content: data.response }]);
  //   } catch (error) {
  //     console.error('Error sending message:', error);
  //     setMessages(prev => [...prev, { 
  //       type: 'ai', 
  //       content: 'Sorry, I encountered an error. Please try again.' 
  //     }]);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    // On mobile, reset input focus state
    if (isMobile) setIsInputFocused(false);
  };

  const formatMessage = (content) => {
    return content.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < content.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <>
      {/* Mobile Close Button - positioned in top right when chat is open */}
      {isMobile && isChatOpen && (
        <button
          onClick={() => setIsChatOpen(false)}
          className="mobile-close-button"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      {/* Chat Button with Floating Bubbles */}
      <div className={`chat-button-container ${isMobile ? 'mobile' : 'desktop'} ${isMobile && isChatOpen ? 'chat-open' : ''}`}>
        {/* Floating Bubbles */}
        {!isChatOpen && (
          <div className="floating-bubbles">
            <div className="bubble bubble-1"></div>
            <div className="bubble bubble-2"></div>
            <div className="bubble bubble-3"></div>
            <div className="bubble bubble-4"></div>
            <div className="bubble bubble-5"></div>
            <div className="bubble bubble-6"></div>
          </div>
        )}

        {/* Learn More Message */}
        {!isChatOpen && (
          <div className={`learn-more-message ${isMobile ? 'mobile' : 'desktop'}`}>
            <div className="message-bubble">
              <span>{isMobile ? 'Click Me!' : 'Learn more about me!'}</span>
              <div className="message-arrow"></div>
            </div>
          </div>
        )}

        {/* Only show chat button when not mobile or when chat is closed */}
        {(!isMobile || !isChatOpen) && (
          <button
            onClick={toggleChat}
            className={`chat-button ${isChatOpen ? 'active' : ''} ${isMobile ? 'mobile' : 'desktop'}`}
          >
            {isChatOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <div className="button-content">
                <div className="ai-icon">🤖</div>
                {!isMobile && <span className="button-text">Click me!</span>}
              </div>
            )}
          </button>
        )}
      </div>

      {/* Chat Window */}
      <div
        className={`chat-window ${isChatOpen ? 'open' : ''} ${isMobile ? 'mobile' : 'desktop'}${isInputFocused ? ' input-focused' : ''}`}
        style={isMobile ? { height: isInputFocused ? `${viewportHeight}px` : '100vh', transition: 'height 0.3s' } : {}}
      >
        <div className="chat-header">
          <div className="header-info">
            <div className="ai-avatar">
              <img
                src={personalInfo.profileImage}
              />
            </div>
            <div className="header-text">
              <h3>AI Resume Assistant</h3>
              <p>Ask me about my skills & experience</p>
            </div>
          </div>
        </div>

        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.type}`}>
              <div className="message-content">
                {formatMessage(message.content)}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="message ai">
              <div className="message-content">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input-container">
          <div className="chat-input-wrapper" style={isMobile ? { position: 'relative' } : {}}>
            <textarea
              ref={inputRef}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me..."
              className="chat-input"
              rows="1"
              disabled={isLoading}
              onFocus={() => {
                setIsInputFocused(true);
                setTimeout(scrollToBottom, 200);
              }}
              onBlur={() => setIsInputFocused(false)}
              style={isMobile ? { minHeight: '40px', fontSize: '16px', background: '#fff', zIndex: 2 } : {}}
            />
            {/* Custom placeholder for mobile to ensure visibility */}
            {isMobile && !inputMessage && !isLoading && (
              <span
                className="custom-placeholder"
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#aaa',
                  pointerEvents: 'none',
                  fontSize: '16px',
                  zIndex: 1
                }}
              >Ask me...</span>
            )}
            <button
              onClick={sendMessage}
              disabled={!inputMessage.trim() || isLoading}
              className="send-button"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="chat-footer">
            <h>🤖 Powered by GPT-4o Model</h>
          </div>
        </div>

      </div>

      {/* Chat Overlay for mobile */}
      {isChatOpen && isMobile && (
        <div
          className="chat-overlay"
          onClick={(e) => {
            // Only close if clicking on the overlay itself, not on chat content
            if (e.target === e.currentTarget) {
              setIsChatOpen(false);
              setIsInputFocused(false);
            }
          }}
        ></div>
      )}
    </>
  );
}

export default Chatbox;