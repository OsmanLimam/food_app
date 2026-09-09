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
import FavoritesScreen from './screens/FavoritesScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import ProfileScreen from './screens/ProfileScreen';

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
          <Route path="/favorites" element={<FavoritesScreen />} />
          <Route path="/notifications" element={<NotificationsScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
