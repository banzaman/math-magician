import { useEffect, useState } from 'react';
import { API_URL, HEADERS_LIST } from '../api/apiSettings';

const Quote = () => {
  const [dailyQuote, setDailyQuote] = useState({
    quote: null, author: null, isLoading: false, hasError: false,
  });

  useEffect(() => {
    const fetchQuote = async (quoteType = 'inspirational') => {
      setDailyQuote((prev) => ({
        ...prev,
        isLoading: true,
        hasError: false,
      }));

      const fetchUrl = `${API_URL}${quoteType}`;
      const request = new Request(
        fetchUrl, {
          method: 'GET',
          'Content-Type': 'application/json',
          headers: HEADERS_LIST,
        },
      );

      try {
        const response = await fetch(request);
        const [json] = await response.json();
        const { quote, author } = json;
        setDailyQuote((prev) => ({
          ...prev,
          quote,
          author,
          hasError: false,
        }));
      } catch (error) {
        setDailyQuote((prev) => ({
          ...prev,
          hasError: true,
        }));
      }

      setDailyQuote((prev) => ({
        ...prev,
        isLoading: false,
      }));
    };

    fetchQuote();
  }, []);

  const {
    isLoading, hasError, quote, author,
  } = dailyQuote;

  return (
    <div className="quote">
      <h2>Today&apos;s Quote</h2>
      {isLoading && <p>Daily Quote is Loading...</p>}
      {hasError && <p>An Error ocurrs while loading the Daily Quote.</p>}
      {!isLoading && !hasError && (
      <>
        <q>
          {quote}
        </q>
        <p>
          {author}
        </p>
      </>
      ) }
    </div>
  );
};

export default Quote;
