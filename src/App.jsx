import { useState } from 'react'
import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePageLayout from './pages/HomePageLayout'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePageLayout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
