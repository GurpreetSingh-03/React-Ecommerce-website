import React, { useState } from 'react'
import Navbar from './Navbar'
import Products from './Products'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchItems from './SearchItems'
import ProductDetails from './ProductDetails'
import Cart from './Cart'
import { items } from './Data'

function App() {
  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Navbar cart={cart} setData={setData} />
        <Routes>
          <Route path='/' element={<Products cart={cart} setCart={setCart} items={data} />} />
          <Route path='/products/:id' element={<ProductDetails cart={cart} setCart={setCart} />} />
          <Route path='/search/:term' element={<SearchItems cart={cart} setCart={setCart} />} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App