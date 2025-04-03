import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Posts from './pages/Posts'
import PostDetail from './pages/PostDetail'
import NavBar from './companents/NavBar'
import Login from './pages/Login'
import DashBoard from './DashBoard'
import ProtectedRoute from './companents/ProtectedRoute'
import LoginForm from './companents/LoginForm'


export default function App() {
  // const[IsAuthenticated, setAuthenticated] = useState(false)
  return (
    <>
    {/* <BrowserRouter>
    <Routes>
    <Route path='/1' element={<Main/>}/>
    <Route path='/posts' element={<Posts/>}/>
    <Route path='/posts/:id' element={<PostDetail/>}/>
    </Routes>
    </BrowserRouter> */}



{/* <BrowserRouter>
<Routes>
  <Route path='/' element={<Login setAuth={setAuthenticated}/>}/>
  <Route path='/1' element={
    <ProtectedRoute isAuth = {IsAuthenticated}>
    <Main/>
    </ProtectedRoute>
  }/>
  <Route path='/posts' element={
    <ProtectedRoute isAuth = {IsAuthenticated}>
    <Posts/>
    </ProtectedRoute>
  }/>
  <Route path='/posts/:id' element={
    <ProtectedRoute isAuth = {IsAuthenticated}>
    <PostDetail/>
    </ProtectedRoute>
  }/>
  <Route path='/dashboard' element={
    <ProtectedRoute isAuth = {IsAuthenticated}>
      <DashBoard/>
    </ProtectedRoute>
  }/>
</Routes>
</BrowserRouter> */}


<LoginForm/>


    </>
  )
}

