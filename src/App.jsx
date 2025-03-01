
import './App.css'
import React, { useState } from 'react';

import HomePage from './components/HomePage'
import VideoPage from './components/VideoPage'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

function App() {
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/room/:id',
    element: <VideoPage/>
  }
])

  return (
    <>
    <RouterProvider router={router}/>

    
    
     
    
    </>
  )
}

export default App
