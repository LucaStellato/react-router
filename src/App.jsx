import { useState } from 'react'
import { useEffect } from 'react'
import { BrowserRouter, browserRouter } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
