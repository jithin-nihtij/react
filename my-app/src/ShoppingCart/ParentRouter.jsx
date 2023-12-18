// ParentRouter.jsx

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
  const [bg, setbg] = useState(false);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const changeMode = () => {
    setbg(!bg);
  };

  return (
    <div>
      <shopContext.Provider value={{ data, setdata, cart, addToCart, setCart, bg, changeMode }}>
        <BrowserRouter>
          <ShopNav size={cart.length} bg={bg} setbg={setbg} />
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
