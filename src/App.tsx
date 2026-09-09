import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import ItemDetailScreen from './screens/ItemDetailScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import JuiceScreen from './screens/JuiceScreen';
import DessertScreen from './screens/DessertScreen';
import CartScreen from './screens/CartScreen';
import CheckoutScreen from './screens/CheckoutScreen';

export default function App() {
  return (
    <BrowserRouter>
      <div className="max-w-md mx-auto min-h-screen bg-bg relative">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/food/:id" element={<ItemDetailScreen />} />
          <Route path="/restaurant" element={<RestaurantScreen />} />
          <Route path="/juice" element={<JuiceScreen />} />
          <Route path="/dessert" element={<DessertScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/checkout" element={<CheckoutScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
