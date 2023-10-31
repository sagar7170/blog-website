"use client"
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { actions } from '../redux/Slice';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';

function Write() {
  const [title, setTitle] = useState('');
  const [story, setStory] = useState('');
  const [cover, setCover] = useState('');

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
    toast.success('Saved');
    dispatch(actions.write({ title, story, cover }))
  }

  return (
    <div className='flex justify-center p-4'>
      <div className='w-[100%] sm:w-[60%] flex flex-col'>
        <div className='flex p-2 mb-6'>
          <label className='flex items-center hover:bg-blue-200 p-2  rounded-lg' htmlFor="cover"><AddPhotoAlternateOutlinedIcon fontSize='large' color='primary' /> <h1>Add Cover Photo</h1> </label>
          <input type="file" className='hidden' id='cover' onChange={handlefile} />
        </div>
        <img className={cover == '' ? 'hidden' : 'w-full h-[50%] mb-10'} src={cover} alt="" />
        <input onChange={handleTitleInput} className='h-20 p-3 border-l-2 border-gray-500 text-5xl outline-none' type="text" placeholder='Title' />
        <textarea onChange={handleStoryInput} className='outline-none text-xl p-3 overflow-hidden' type="text" placeholder='Tell your story..' ></textarea>
        <Link href="/"><button onClick={save} className='bg-green-600 w-20 p-2 rounded-full font-bold text-white'>save</button> </Link>
        <Toaster/>
      </div>
    </div>
  )
}

export default Write