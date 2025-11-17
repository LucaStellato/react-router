
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ChiSiamo from './pages/ChiSiamo'
import DefaultLayout from './pages/DefaultLayout'
import Prodotti from './pages/prodotti'
import singleProduct from './pages/singleproduct'



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/ChiSiamo' element={<ChiSiamo />}></Route>
            <Route path='/Prodotti' element={<Prodotti />}></Route>
            <Route path='/Prodotti/:id' element={<singleProduct />}></Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
