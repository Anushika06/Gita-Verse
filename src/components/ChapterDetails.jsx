import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ChapterDetails = () => {
  const { id } = useParams(); 
  const [chapter, setChapter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChapterDetails = async () => {
      try {
        const response = await fetch(`https://vedicscriptures.github.io/chapter/${id}`);
        const data = await response.json();
        setChapter(data);
      } catch (error) {
        console.error('Error fetching chapter details:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchChapterDetails();
  }, [id]);

  if (loading) return <div>Loading chapter details...</div>;

  return (
    <div className="chapter-details p-6">
      <div className="bg-yellow-300 text-black p-6 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-4 text-red-900 italic">{chapter.name}</h2>
        <div className="mb-4">
          <p className="text-lg">
            <strong>Translation:</strong> {chapter.translation || 'Not Available'}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-lg">
            <strong>Verses Count:</strong> {chapter.verses_count}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-lg">
            <strong>Meaning:</strong> {chapter.meaning.en}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-lg">
            <strong>Summary:</strong> {chapter.summary ? chapter.summary.en : 'No summary available.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChapterDetails;
