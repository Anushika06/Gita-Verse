import React, { useState, useEffect } from 'react';

const images = [
  "https://swarajya.gumlet.io/swarajya/2023-01/42f34cb1-f9c1-4852-b612-d3a8fee9df18/bhagavadgita_6.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkxtQxHJJIWXNXjAdZFo5rghYtIdhw9vnws-yllobBOJYyvyd6yNbTlo8dI3xAvwOrecRYP81SRySxE49hXHeRMBMRkgFXJIUf7hXvt8OKQ2H8wfgdea1xs8Yu0aiWpPE30HAaM2VArFxI/s880/gita-880x575.jpg",
  "https://www.bhagavad-gita.us/wp-content/uploads/2012/10/gita-02.jpg"
];

function Picture({ scrollToChapters }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center mt-8">
      <div
        className="relative h-[70vh] w-[50vw] rounded-2xl overflow-hidden shadow-xl border-4 border-yellow-500 bg-contain bg-no-repeat bg-center transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      >
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="text-yellow-400 text-4xl font-bold bg-black/60 px-4 py-2 rounded-xl mb-4">
            Experience the Gita
          </h1>
          <button
            className="bg-yellow-400 hover:bg-white cursor-pointer text-black font-semibold px-6 py-2 rounded shadow-lg transition duration-300"
            onClick={scrollToChapters}
          >
            Read Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Picture;
