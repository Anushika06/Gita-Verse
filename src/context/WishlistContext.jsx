import { createContext, useState, useEffect } from 'react';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const handleWishlistToggle = (chapter) => {
    const exists = wishlist.some((item) => item.chapter_number === chapter.chapter_number);
    if (exists) {
      setWishlist((prev) =>
        prev.filter((item) => item.chapter_number !== chapter.chapter_number)
      );
    } else {
      setWishlist((prev) => [...prev, chapter]);
    }
  };

  return (
    <WishlistContext.Provider value={{ wishlist, handleWishlistToggle }}>
      {children}
    </WishlistContext.Provider>
  );
};
