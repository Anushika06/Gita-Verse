import React from 'react';

function Pagination({ pageNext, pagePrev, pageNo}) {
  return (
    <div className='bg-blue-950 p-4 h-[50px] w-full mt-8 flex items-center justify-between'>
      <div
        className={`text-white px-8 cursor-pointer ${pageNo === 1 ? 'opacity-50 pointer-events-none' : ''}`}
        onClick={pagePrev}
      >
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div className='text-white'>{pageNo}</div>
      <div
        className={`text-white px-8 cursor-pointer ${pageNo === 3 ? 'opacity-50 pointer-events-none' : ''}`}
        onClick={pageNext}
      >
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}

export default Pagination;
