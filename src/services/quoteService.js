// ChatGPT API Integration Service
// Replace this with your actual OpenAI API implementation

const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

/**
 * Generates an inspirational quote using ChatGPT
 * Currently returns placeholder quotes - replace with actual API call
 */
export const generateQuoteOfTheDay = async () => {
  // Placeholder implementation
  const placeholderQuotes = [
    { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" }
  ];

  // TODO: Replace this with actual ChatGPT API call when API key is available
  if (OPENAI_API_KEY) {
    try {
      const response = await fetch(OPENAI_API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'You are a motivational quote generator. Generate inspiring, professional quotes that would brighten someone\'s day. Return the quote and author in JSON format: {"quote": "...", "author": "..."}'
            },
            {
              role: 'user',
              content: `Generate a unique, inspiring quote for today that would motivate someone. Make sure it is different from previous quotes. Seed: ${Math.floor(Math.random()*100000)}`
            }
          ],
          max_tokens: 100,
          temperature: 1.0,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const content = data.choices[0].message.content;
        
        try {
          // Try to parse as JSON first
          const parsed = JSON.parse(content);
          return {
            quote: parsed.quote,
            author: parsed.author || 'AI Generated'
          };
        } catch (e) {
          // If not JSON, parse manually
          return {
            quote: content.replace(/"/g, ''),
            author: 'ChatGPT'
          };
        }
      } else {
        throw new Error('API request failed');
      }
    } catch (error) {
      console.warn('ChatGPT API error, falling back to placeholder:', error);
      // Fall back to placeholder if API fails
    }
  }

  // Return random placeholder quote
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
  const randomQuote = placeholderQuotes[Math.floor(Math.random() * placeholderQuotes.length)];
  return randomQuote;
};

/**
 * Instructions for implementing ChatGPT integration:
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
 * # Add to /app/frontend/.env
 * REACT_APP_OPENAI_API_KEY=your_openai_api_key_here
 * ```
 * 
 * The API will generate fresh, contextually relevant quotes that are:
 * - Motivational and inspiring
 * - Professional and appropriate
 * - Unique each time (with some variation)
 * - Designed to brighten the visitor's day
 */

export default {
  generateQuoteOfTheDay
};