import Link from 'next/link';
import React from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../redux/Slice';

function SinglePost({ cover, title, story, index }) {
  const dispatch = useDispatch();
  const getpost = () => {
    dispatch(actions.getpost({ cover, title, story, index }))
  }
  return (
    <Link href='/Blog'>
      <div className='w-screen flex justify-center p-2 rounded-lg'>
        <div onClick={getpost} className='flex items-center justify-between p-3 shadow-2xl hover:scale-95 ease-in-out duration-100 w-full sm:w-[70%]' >
          <div className=''>
            <h1 className='sm:text-xl text-base font-bold sm:mb-5 line-clamp-0'>{title}</h1>
            <h1 className='sm:line-clamp-4 line-clamp-2 sm:text-base text-xs'>{story}
            </h1>
          </div>
          <img className='sm:w-64 w-32 rounded-lg' src={cover} alt="" />
        </div>
      </div>
    </Link>
  )
}

export default SinglePost