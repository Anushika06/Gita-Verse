import React, { useState, useEffect } from 'react';

function Verse() {
  const [verseOfTheDay, setVerseOfTheDay] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const currentDate = new Date();
  const chapter = 2; 
  const verseNumber = currentDate.getDate(); 

  useEffect(() => {
    const fetchVerse = async () => {
      try {
        const response = await fetch(`https://vedicscriptures.github.io/slok/${chapter}/${verseNumber}`);
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const result = await response.json();
        console.log('Fetched Verse Data:', result);
        setVerseOfTheDay(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching verse:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchVerse();
  }, [chapter, verseNumber]); 

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="w-full flex justify-center mt-8">
      <div className="bg-amber-300 rounded-2xl w-[85vw] p-7 shadow-lg text-center">
      <div className="w-full flex justify-center">
        <div className="mb-8 bg-blue-950 text-3xl text-white rounded p-3 w-[600px] text-center">
          <h1><strong>Verse of the Day</strong></h1>
        </div>
      </div>
        <h2 className="text-2xl text-red-700 font-bold mb-6">
          <span className="font-bold"></span>
          {verseOfTheDay.slok || 'Verse not available.'}
        </h2>
        
   
        <h3 className="text-yellow-950 mb-6">
          <span className="font-bold">Transliteration: </span>
          {verseOfTheDay.transliteration || 'Not Available'}
        </h3>

        <p className="text-yellow-950 mb-6">
          <span className="font-bold">Translation (Swami Gambirananda): </span>
          {verseOfTheDay.gambir?.et || 'Not Available'}
        </p>

 
        <p className="text-yellow-950 mb-6">
          <span className="font-bold">Sanskrit Commentary (Sri Madhavacharya): </span>
          {verseOfTheDay.madhav?.sc || 'Not Available'}
        </p>
      </div>
    </div>
  );
}

export default Verse;
