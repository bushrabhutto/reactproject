import React, { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Signup1 from './Pages/signup1'
import Products from './Pages/Products'
import Loginp from './Pages/Loginp'
import Pages4o4 from './pages/pages4o4'
import NavigationBar from './components/NavigationBar'
import FooterSection from './components/FooterSection'
import CategoryvPage from './Pages/CategoryvPage'
import Seperatepro from './Pages/seperatepro'
import Sidepage from './components/Sidepage,jsx'
import Login from './components/login'





function App() {
  const { user, setUser } = useState(true)
  return (
    <>
      <NavigationBar />



      {user ? (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Products" element={<ProductsPages />} />
          <Route path="/Products/:productID" element={<Sidepage />} />

          <Route path="/products/category/:categoryName" element={<CategoryvPage />} />

        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Signup" element={<SignupPage />} />
          <Route path="/Login" element={<Loginp />} />
          <Route path="*" element={<Navigate to="/Login" replace={true} />} />
        </Routes>

      )}


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Products" element={<ProductsPages />} />
        <Route path="/Products/:productID" element={<Seperatepro />} />
        <Route path="/products/category/:categoryName" element={<CategoryvPage />} />
        <Route path="/Signup" element={<Signuppage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<Navigate to="/Login" replace={true} />} />
      </Routes>



      <FooterSection />


    </>
  )
}

export default App
