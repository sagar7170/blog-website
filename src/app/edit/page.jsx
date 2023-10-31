"use client"
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../redux/Slice';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import Link from 'next/link';

function Write() {
    const edit = useSelector(state => state.edit);
    const post = useSelector(state=>state.posts);
   console.log("post",post)
    const { index } = edit;
    const [title, setTitle] = useState(edit.title);
    const [story, setStory] = useState(edit.story);
    const [cover, setCover] = useState(edit.cover);

    const dispatch = useDispatch()
    
    const handlefile = (e) => {
        setCover(URL.createObjectURL(e.target.files[0]));
    }
   
    const handleTitleInput = (e) => {
        setTitle(e.target.value)
    }
    const handleStoryInput = (e) => {
        setStory(e.target.value)
    }

    const save = () => {
        dispatch(actions.update({ title, story, cover, index }))
    }

    return (
        <div className='flex justify-center p-4'>
            <div className='w-[100%] sm:w-[60%] flex flex-col'>
                <div className='flex p-2 mb-6'>
                    <label className='flex items-center hover:bg-blue-200 p-2  rounded-lg' htmlFor="Cover"><AddPhotoAlternateOutlinedIcon fontSize='large' color='primary' /> <h1>Change Cover Photo</h1> </label>
                    <input  type="file" className='hidden' id='Cover' onChange={handlefile} />
                </div>
                <img className={cover == '' ? 'hidden' : 'w-full h-[50%] mb-10'} src={cover} alt="" />
                <input value={title} onChange={handleTitleInput} className='h-20 p-3 border-l-2 border-gray-500 text-5xl outline-none' type="text" placeholder='Title' />
                <textarea value={story} onChange={handleStoryInput} className='outline-none text-xl p-3 overflow-hidden' type="text" placeholder='Tell your Story..' ></textarea>
                <Link  href="/">
                    <button onClick={save} className='bg-green-600 w-20 p-2 rounded-full font-bold text-white'>Update</button> 
                </Link>
            </div>
        </div>
    )
}

export default Write