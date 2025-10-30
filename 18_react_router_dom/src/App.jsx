import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import NavBar from './components/NavBar'
import NotFound from './pages/NotFound'
import Mens from './pages/Mens'
import Kids from './pages/Kids'
import Women from './pages/Women'
import Courses from './pages/Courses'
import CoursesDetails from './pages/CoursesDetails'

const App = () => {
  return (
    <div className='h-screen bg-black w-screen'>
      
      <NavBar></NavBar> 
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:courseId' element={<CoursesDetails/>}/>
        <Route path='/products' element={<Product />} >
        <Route path='men' element={<Mens/>}/>
          <Route path='men' element={<Mens />} />
          <Route path='women' element={<Women />} />
          <Route path='kids' element={<Kids />} />
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      
    </div>
  )
}

export default App
