import React, { createContext, useContext, useState, useEffect } from 'react';
import { generateQuoteOfTheDay } from '../services/quoteService';

const QuoteContext = createContext();

export const useQuote = () => {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
};

export const QuoteProvider = ({ children }) => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchQuote = async () => {
    setIsLoading(true);
    
    try {
      const quoteData = await generateQuoteOfTheDay();
      setQuote(quoteData.quote);
      setAuthor(quoteData.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
      // Fallback quote
      setQuote("The only way to do great work is to love what you do.");
      setAuthor("Steve Jobs");
    }
    
    setIsLoading(false);
  };

  useEffect(() => {
    // Initialize with first quote
    fetchQuote();
  }, []);

  const value = {
    quote,
    author,
    isLoading,
    refreshQuote: fetchQuote
  };

  return (
    <QuoteContext.Provider value={value}>
      {children}
    </QuoteContext.Provider>
  );
};

export default QuoteContext;