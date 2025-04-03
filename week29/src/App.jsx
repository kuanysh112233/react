import React from 'react';
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Search from './components/Search';
import MoveiList from './components/MoveiList';
import MoveiDateil from './components/MoveiDateil';
import { useState } from 'react';


export default function App() {
const[movies,setMovies]=useState([])
console.log(movies);

  return (
    <>
    <BrowserRouter>
    <div>
      <h1>Movie Search App</h1>
      <Search onSearch={setMovies}/>
      <Routes>
        <Route path='/' element={<MoveiList movies={movies}/>}/>
        <Route path='/movies/:id' element={<MoveiDateil/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}


