import React, { useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate

const WishList = () => {
  const { wishlist, handleWishlistToggle } = useContext(WishlistContext);
  const navigate = useNavigate(); // ✅ Create navigate instance

  return (
    <div className="chapter-list">
      <div className="w-full flex justify-center">
        <div className="mb-8 bg-blue-950 text-3xl text-white rounded p-4 w-[600px] text-center">
          <h1><strong>Your Wishlist</strong></h1>
        </div>
      </div>

      <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {wishlist.map((chapter) => (
          <div
            key={chapter.chapter_number}
            className="chapter-card bg-white p-4 rounded shadow border border-gray-200"
          >
            <h3>Chapter {chapter.chapter_number}</h3>
            <h1 className="text-2xl mt-4 mb-4 text-red-500 font-bold">{chapter.name}</h1>
            <p><strong>Translation:</strong> {chapter.translation || 'Not Available'}</p>
            <p><strong>Verses:</strong> {chapter.verses_count}</p>
            <p><strong>Meaning:</strong> {chapter.meaning.en}</p>
            <p>{chapter.summary ? chapter.summary.en.substring(0, 150) + '...' : 'No summary available.'}</p>

            <button
              className="read-more-button mt-3 text-blue-600 hover:underline"
              onClick={() => navigate(`/chapter/${chapter.chapter_number}`)} // ✅ Navigate to full details
            >
              Read More
            </button>

            <div
              className="mt-5 cursor-pointer text-xl hover:scale-110 transition"
              onClick={() => handleWishlistToggle(chapter)}
            >
              ❌
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
