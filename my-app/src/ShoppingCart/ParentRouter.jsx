import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShopNav from './ShopNav';
import Cart from './Cart';
import Home from './Home';
import ProductData from './data';

const shopContext = createContext();

function ParentRouter() {
  const [data, setdata] = useState(ProductData);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <div>
      <shopContext.Provider value={{ data, setdata, cart, addToCart }}>
        <BrowserRouter>
          <ShopNav size={cart.length} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </shopContext.Provider>
    </div>
  );
}

export default ParentRouter;

export { shopContext };
