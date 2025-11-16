
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ChiSiamo from './pages/ChiSiamo'
import DefaultLayout from './pages/DefaultLayout'
import Prodotti from './pages/prodotti'



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/ChiSiamo' element={<ChiSiamo />}></Route>
            <Route path='/Prodotti' element={<Prodotti />}></Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
