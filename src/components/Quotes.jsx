import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const [chapter, setChapter] = useState(1);
  const [verse, setVerse] = useState(1);
  const [slokData, setSlokData] = useState(null);
  const [error, setError] = useState(null);

  const fetchSlok = async (ch, sl) => {
    try {
      const res = await fetch(`https://vedicscriptures.github.io/slok/${ch}/${sl}`);
      if (!res.ok) throw new Error("Slok not found");
      const data = await res.json();
      setSlokData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setSlokData(null);
    }
  };

  useEffect(() => {
    fetchSlok(chapter, verse);
  }, [chapter, verse]);

  const nextVerse = () => {
    if (verse < 18) { 
      setVerse((prev) => prev + 1);
    } else if (chapter < 18) {
      setChapter((prev) => prev + 1);
      setVerse(1);
    }
  };

  const prevVerse = () => {
    if (verse > 1) {
      setVerse((prev) => prev - 1);
    } else if (chapter > 1) {
      setChapter((prev) => prev - 1);
      setVerse(1);
    }
  };

  return (
    <div className="p-8 flex flex-col items-center bg-black min-h-screen">
      {error ? (
        <p className="text-red-400">{error}</p>
      ) : slokData ? (
        <div className="w-[60vw] bg-yellow-500 rounded-xl shadow p-6 text-center border border-white">
          <h2 className=" text-black mb-4">
            Chapter {slokData.chapter}, Verse {slokData.verse}
          </h2>
          <p className="text-2xl font-serif mb-4 text-red-900 whitespace-pre-line font-bold italic">{slokData.slok}</p>
          <p className="text-black mb-4">
            <strong>Translation (Swami Sivananda):</strong><br />
            {slokData?.siva?.et || 'Not available'}
          </p>
          <p className="text-black mt-6">
            <strong>Hindi Commentary (Chinmayananda or Tejomayananda):</strong><br />
            <br></br>
            {slokData?.chinmay?.hc || slokData?.tej?.ht || 'Not available'}
          </p>
          <div className="flex justify-center gap-10 mt-6 text-2xl text-red-950">
        <button onClick={prevVerse}>
          <i className="fa-solid fa-arrow-left cursor-pointer"></i>
        </button>
        <button onClick={nextVerse}>
          <i className="fa-solid fa-arrow-right cursor-pointer"></i>
        </button>
      </div>
        </div>
        
      ) : (
        <p className="text-white">Loading...</p>
      )}
    </div>
  );
};

export default Quotes;
