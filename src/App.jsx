import { useState, useRef } from 'react'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import Picture from './components/Picture';
import Verse from './components/Verse';
import ChapterList from './components/ChapterList';
import WishList from './components/WishList';
import { WishlistProvider } from './context/WishlistContext';
import Quotes from './components/Quotes';
import AboutGita from './components/AboutGita';

function App() {
  const [wishlist, setWishlist] = useState([]);
  const chapterListRef = useRef(null); 

  const addToWishlist = (chapter) => {
    const exists = wishlist.find((item) => item.chapter_number === chapter.chapter_number);
    if (!exists) {
      setWishlist([...wishlist, chapter]);
    }
  };

  const removeFromWishlist = (chapter) => {
    setWishlist(wishlist.filter((item) => item.chapter_number !== chapter.chapter_number));
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <NavBar />
          <Picture scrollToChapters={() => chapterListRef.current?.scrollIntoView({ behavior: 'smooth' })} />
          <Verse />
          <div ref={chapterListRef}>
            <ChapterList
              wishlist={wishlist}
              addToWishlist={addToWishlist}
              removeFromWishlist={removeFromWishlist}
            />
          </div>
        </>
      )
    },
    {
      path: '/quotes',
      element: (
        <>
          <NavBar />
          <Quotes />
        </>
      )
    },
    {
      path: '/aboutgita',
      element: (
        <>
          <NavBar />
          <AboutGita />
        </>
      )
    },
    {
      path: '/wishlist',
      element: (
        <>
          <NavBar />
          <WishList wishlist={wishlist} />
        </>
      )
    }
  ]);

  return (
    <div className="w-full">
      <WishlistProvider>
        <RouterProvider router={router} />
      </WishlistProvider>
    </div>
  );
}

export default App;
