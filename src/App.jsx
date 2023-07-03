import React, { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './Pages/Login'
import Products from './Pages/Products'
import Signup from './Pages/Signup'
import Pages4o4 from './pages/pages4o4'
import NavigationBar from './components/NavigationBar'
import FooterSection from './components/FooterSection'
import CategoryvPage from './Pages/CategoryvPage'
import ProductPages from './Pages/ProductPages'





function App() {
  const { user, setUser } = useState(true)
  return (
    <>
      <NavigationBar />



      {
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path="/products/:productID" element={<ProductPages />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/products/category/:CategoryName' element={<CategoryvPage />} />
          <Route path='*' element={<Pages4o4 />} />
        </Routes>
      }

      <FooterSection />


    </>
  )
}

export default App
