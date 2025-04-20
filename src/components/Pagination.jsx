import React from 'react'

function Pagination({pageNext, pagePrev, pageNo}) {
  return (
    <div className='bg-blue-950 p-4 h-[50px] w-full mt-8 flex items-center justify-between'>
      <div className='text-white px-8' onClick={pagePrev}><i class="fa-solid fa-arrow-left"></i></div>
      <div className='text-white'>{pageNo}</div>
      <div className='text-white px-8' onClick={pageNext}><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination
