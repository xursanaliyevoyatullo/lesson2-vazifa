import React from 'react'
import Home from './Home'
import Create from './Create'
import Update from './Update'

//routers
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/edit/:id' element={<Update/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App