import React, { useState } from 'react';

const SubmitForm = () => {
  const [chapter, setChapter] = useState(1);
  const [verse, setVerse] = useState(1);
  const [feedback, setFeedback] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChapterChange = (e) => {
    const value = Math.min(18, Math.max(1, Number(e.target.value)));
    setChapter(value);
  };

  const handleVerseChange = (e) => {
    const value = Math.min(78, Math.max(1, Number(e.target.value)));
    setVerse(value);
  };

  const handleFeedbackChange = (e) => setFeedback(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!feedback) {
      alert("Please provide feedback before submitting.");
      return;
    }
    setIsSubmitted(true);
  };

  const handleSubmitAnotherFeedback = () => {
    setIsSubmitted(false);
    setChapter(1);
    setVerse(1);
    setFeedback('');
  };

  return (
    <div className="p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-white italic">Your feedback is valuable!</h1>
      <br />
      {isSubmitted ? (
        <div className="text-center bg-blue-900 p-6 rounded-xl shadow text-white">
          <p className="text-xl">Feedback Submitted!</p>
          <button
            onClick={handleSubmitAnotherFeedback}
            className="mt-4 bg-yellow-300 text-black px-4 py-2 rounded-lg cursor-pointer"
          >
            <strong>Submit Another Feedback</strong>
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-3xl bg-blue-900 rounded-xl shadow p-6 text-center border border-white">
          <div className="mb-4">
            <label htmlFor="chapter" className="block text-white">Chapter Number (1-18):</label>
            <input
              id="chapter"
              type="number"
              value={chapter}
              onChange={handleChapterChange}
              className="w-full p-2 mt-2 bg-gray-800 text-white rounded-lg"
              min="1"
              max="18"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="verse" className="block text-white">Verse Number (1-78):</label>
            <input
              id="verse"
              type="number"
              value={verse}
              onChange={handleVerseChange}
              className="w-full p-2 mt-2 bg-gray-800 text-white rounded-lg"
              min="1"
              max="78"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="feedback" className="block text-white">Your Feedback:</label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={handleFeedbackChange}
              className="w-full p-2 mt-2 bg-gray-800 text-white rounded-lg"
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-950 text-white px-6 py-2 rounded-lg mt-4 cursor-pointer"
          >
            <strong>Submit Feedback</strong>
          </button>
        </form>
      )}
    </div>
  );
};

export default SubmitForm;
