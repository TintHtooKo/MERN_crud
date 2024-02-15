import React from 'react'
import {Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateBook from './pages/createBook'
import ShowBook from './pages/ShowBook'
import EditBook from './pages/EditBook'
import DeleteBook from './pages/deleteBook'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/book/create' element={<CreateBook/>}/>
      <Route path='/book/detail/:id' element={<ShowBook/>}/>
      <Route path='/book/edit/:id' element={<EditBook/>}/>
      <Route path='/book/delete/:id' element={<DeleteBook/>}/>
    </Routes>
  )
}
