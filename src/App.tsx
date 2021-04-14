import React, { useState, useEffect } from "react";
import "./App.css";
import getAllQuotes from "./helpers/getQuotes";

const App = (): JSX.Element => {
  const [bgIndex, setBgIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [allQuotes, setQuotes] = useState<
    Array<{ quote: string | null; author: string | null }>
  >([{ quote: null, author: null }]);

  useEffect(() => {
    let mounted = true;
    getAllQuotes()
      .then(
        (quotes: {
          quotes: React.SetStateAction<{ quote: string | null; author: string | null }[]>;
        }) => {
          if (mounted) {
            setQuotes(quotes.quotes);
          }
        }
      )
      .then((mounted = false));
  }, []);

  const background = 

};

export default App;
