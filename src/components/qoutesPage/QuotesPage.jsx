// QuotePage.js
import  { useState } from 'react';
import quotesData from '../../quotes'; // Assuming quotes.js is in the same directory

const QuotesPage = () => {
    const [quotes, setQuotes] = useState(quotesData);
    const [selectedQuote, setSelectedQuote] = useState(quotes[0].body); // Set initial value to 'Quote 1'
  
    const getRandomQuote = () => {
      const currentIndex = quotes.findIndex((quote) => quote.body === selectedQuote);
      const nextIndex = (currentIndex + 1) % quotes.length;
      setSelectedQuote(quotes[nextIndex].body);
    };

  return (
    <div>
      <h1>Random Quote</h1>
      <div onClick={() => getRandomQuote()} className="quote-container">
        <p>{selectedQuote}</p>
      </div>
    </div>
  );
};

export default QuotesPage;
