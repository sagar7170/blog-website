import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Avatar from '@mui/material/Avatar';
import Link from 'next/link';
import { useSelector } from 'react-redux';
function Header() {
 
  return (
    <div className='shadow-xl border-b-2'>
      <header className='flex justify-between p-3 '>
        <div className='flex space-x-2 items-center'>
         <Link href={"/"}><h1 className='font-bold text-xl'>Blogs</h1></Link> 
          {/* large screen inpute view */}
          <div className='relative sm:flex hidden'>
            <SearchIcon className='absolute top-2 left-2' />
            <input className='bg-gray-100 pl-10 pt-2 pr-2 pb-2 rounded-full' type="text" placeholder='Search' />
          </div>
        </div>
        <div className='flex space-x-2 items-center'>
          <Link href="/write">
            <h1 className='font-bold text-xl flex items-center bg-green-400 p-2 rounded-full mr-2'><EditOutlinedIcon /> Write</h1>
          </Link>
          <Avatar />
        </div>
      </header>
      {/* small screen inpute view */}
      <div className='relative flex justify-center sm:hidden'>
        <SearchIcon className='absolute top-2  left-7'/>
        <input className='bg-gray-100 pl-10 pt-2 pr-2 pb-2 rounded-full w-[90%]' type="text" placeholder='Search'/>
      </div>
    </div>
  )
}

export default Header