import React from 'react'
import { useSelector } from 'react-redux';
import SinglePost from './SinglePost';

function Allpost() {
    const post = useSelector(state=>state.posts);
  return (
    <div className='flex justify-center items-center flex-col  p-4 sm:p-0 space-y-4'>
        {
            post.map((e,index)=>(
                <SinglePost key={index} cover={e.cover} title = {e.title} story = {e.story} index = {index}/>
            ))
        }
    </div>
  )
}

export default Allpost