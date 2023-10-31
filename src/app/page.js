"use client"
import React from 'react'
import Header from './Components/Header'
import { Provider } from 'react-redux'
import { reduxstore } from './redux/Store'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import Allpost from './Components/Allpost'
function page() {

  return (
     <div>
       <Header/>
       <Allpost/>
     </div>
  )
}

export default page