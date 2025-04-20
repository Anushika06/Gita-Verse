import React, { useState, useEffect, useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';
import Pagination from './Pagination';
import { useNavigate } from 'react-router-dom'; // ✅ Import navigate

const ChapterList = () => {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const chaptersPerPage = 6;

  const { wishlist, handleWishlistToggle } = useContext(WishlistContext);
  const navigate = useNavigate(); // ✅ Initialize navigate

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await fetch('https://vedicscriptures.github.io/chapters');
        const result = await response.json();
        setChapters(result);
      } catch (error) {
        console.error('Error fetching chapters:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchChapters();
  }, []);

  const isInWishlist = (chapter) =>
    wishlist.some((item) => item.chapter_number === chapter.chapter_number);

  const indexOfLastChapter = page * chaptersPerPage;
  const indexOfFirstChapter = indexOfLastChapter - chaptersPerPage;
  const currentChapters = chapters.slice(indexOfFirstChapter, indexOfLastChapter);

  const pageNext = () => {
    if (page < Math.ceil(chapters.length / chaptersPerPage)) {
      setPage((prev) => prev + 1);
    }
  };

  const pagePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="chapter-list">
      <div className="w-full flex justify-center">
        <div className="mb-8 bg-blue-950 text-3xl text-white rounded p-4 w-[600px] text-center">
          <h1><strong>Chapters of the Bhagavad Gita</strong></h1>
        </div>
      </div>

      <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {currentChapters.map((chapter) => (
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
              onClick={() => navigate(`/chapter/${chapter.chapter_number}`)} // ✅ navigate to details
            >
              Read More
            </button>

            <div
              className="mt-5 cursor-pointer text-xl hover:scale-110 transition"
              onClick={() => handleWishlistToggle(chapter)}
            >
              {isInWishlist(chapter) ? '❌' : '❤️'}
            </div>
          </div>
        ))}
      </div>

      <Pagination pageNext={pageNext} pagePrev={pagePrev} pageNo={page} />
    </div>
  );
};

export default ChapterList;
