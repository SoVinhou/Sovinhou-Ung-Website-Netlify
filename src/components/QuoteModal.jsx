import React, { useState, useEffect } from 'react';
import { X, Sparkles, RefreshCw } from 'lucide-react';
import { useQuote } from '../contexts/QuoteContext';

const QuoteModal = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { quote, author, isLoading, refreshQuote } = useQuote();

  useEffect(() => {
    // Show modal after intro completes
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
    setTimeout(() => {
      if (onClose) onClose();
    }, 300);
  };

  const handleRefresh = () => {
    refreshQuote();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-gradient-to-br from-gray-900 via-gray-700 to-gray-800 rounded-2xl max-w-md w-full p-8 shadow-2xl animate-scale-in relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-400 to-gray-700 rounded-full -translate-y-16 translate-x-16 opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gray-400 to-gray-700 rounded-full translate-y-12 -translate-x-12 opacity-60"></div>
        
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-200 z-10"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="text-center mb-6 relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full mb-4">
            <Sparkles className="text-white" size={28} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Quote of the Day</h2>
          <p className="text-white">A little inspiration to brighten your day!</p>
        </div>

        {/* Quote Content */}
        <div className="text-center mb-6 relative z-10">
          {isLoading ? (
            <div className="flex flex-col items-center space-y-4">
              <div className="w-8 h-8 border-3 border-gray-200 border-t-gray-600 rounded-full animate-spin"></div>
              <p className="text-white">Generating your inspiring quote...</p>
            </div>
          ) : (
            <div className="space-y-4">
              <blockquote className="text-lg text-white leading-relaxed italic">
                "{quote}"
              </blockquote>
              <cite className="text-white font-semibold">— {author}</cite>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 relative z-10">
          <button
            onClick={handleRefresh}
            disabled={isLoading}
            className="flex-1 flex items-center justify-center space-x-2 bg-gray-800 text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <RefreshCw size={18} className={isLoading ? 'animate-spin' : ''} />
            <span>New Quote</span>
          </button>
          
          <button
            onClick={closeModal}
            className="flex-1 bg-gray-100 text-black py-3 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200"
          >
            Continue
          </button>
        </div>

        {/* Footer note */}
        <p className="text-xs text-white text-center mt-4 relative z-10">
          💡 Quote generated by AI (GPT 3.5 Turbo Model)
        </p>
      </div>
    </div>
  );
};

export default QuoteModal;