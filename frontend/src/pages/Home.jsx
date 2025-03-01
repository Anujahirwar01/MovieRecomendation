import React from 'react'

import { Link } from 'react-router-dom'

const Home = () => {
  return(
    <div>
      <div className='bg-cover bg-center bg-[url(https://i.pinimg.com/736x/73/bc/7e/73bc7ec40362947e3565c37b6af4d7f1.jpg)] h-screen pt-8 flex justify-between flex-col w-full'>
        <img className='w-20 ml-3' src="https://i.pinimg.com/474x/7a/24/f0/7a24f00e8a47b846b16e22cabe0d4d65.jpg" alt="" />
        <div className='bg-white pb-8 py-4 px-4'>
          <h2 className='text-[30px] font-semibold'>Get Started with Movies</h2>
          <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home;