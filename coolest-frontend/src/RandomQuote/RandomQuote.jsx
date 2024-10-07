import { useState } from "react";
import "./RandomQuote.css";

const quotes = [
  "The journey of a thousand miles begins with one step.",
  "Believe you can and you're halfway there.",
  "Do not watch the clock; do what it does. Keep going.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "Life is 10% what happens to us and 90% how we react to it.",
];

function RandomQuote() {
  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="quote-container">
      <h2>Random Quote Generator</h2>
      <p className="quote-text">{quote}</p>
      <button onClick={getRandomQuote} >Get New Quote</button>
    </div>
  );
}

export default RandomQuote;