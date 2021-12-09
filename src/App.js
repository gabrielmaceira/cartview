import React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { NavBar } from './components/NavBar';
import { Cart } from './components/Cart';

import { CartFuncion } from './context/context';

export default function App() {
  return (
    <CartFuncion>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting={'TODOS LOS ITEMS'} />}
          />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer greeting={'ITEM FILTRADOS'} />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:itemId" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </CartFuncion>
  );
}
