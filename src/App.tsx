import React, { useState, useEffect } from "react";
import "./App.css";
import allBackgrounds from "./helpers/allBackgrounds";
import getAllQuotes from "./helpers/getQuotes";
import QuoteBox from "./QuoteBox";

const App = (): JSX.Element => {
  const [bgIndex, setBgIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [allQuotes, setQuotes] = useState<
    Array<{ quote: string | null; author: string | null }>
  >([{ quote: null, author: null }]);

  useEffect(() => {
    getAllQuotes()
      .then(
        (quotes: {
          quotes: React.SetStateAction<{ quote: string | null; author: string | null }[]>;
        }) => {
            setQuotes(quotes.quotes);
        }
      )
  }, []);

  const background = allBackgrounds[bgIndex];
  const { quote, author } = allQuotes[quoteIndex];

  document.body.style.backgroundColor = background;
	document.body.style.transition = "all 1.5s ease";

  const handleClick = () => {
		setQuoteIndex((quoteIndex + 1) % allQuotes.length);
		setBgIndex((bgIndex + 1) % allBackgrounds.length);
	};

  return (
    <main>
      <QuoteBox 
        quote={quote}
        author={author}
        color={allBackgrounds[bgIndex]}
        setQuote={handleClick}
      />
      <p style={{ color: "white" }}>Have a great day!</p>
    </main>
  )
};

export default App;
