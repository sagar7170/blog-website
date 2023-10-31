"use client"
import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';
import { actions } from '../redux/Slice';
function Blog() {
    const blog = useSelector(state => state.postdetail)
    const {cover,title,story,index} = blog
    const dispatch = useDispatch();
    const edit = ()=>{
        dispatch(actions.edit({cover,title,story,index}))
    }
    return (
        <div className='flex flex-col items-center justify-center pt-3'>
           <div className='sm:w-[60%] p-2 space-y-5'>
            <Link href="/edit">
           <h1 onClick={edit} className=' flex flex-initial items-center bg-green-400 w-28 rounded-full p-2 hover:bg-green-300 cursor-pointer'><EditIcon />Edit Blog</h1>
           </Link>
            <h1 className='text-3xl font-semibold '>{blog.title}</h1>
            <img src={blog.cover} alt="" />
            <h1>{blog.story}</h1>
           </div>
        </div>
    )
}

export default Blog