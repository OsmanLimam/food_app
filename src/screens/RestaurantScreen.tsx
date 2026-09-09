import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Clock, MapPin } from 'lucide-react';
import { restaurant, popularFoods, juiceItems, dessertItems } from '../data/foodData';
import FoodImage from '../components/FoodImage';

type Tab = 'food' | 'juice' | 'dessert';

export default function RestaurantScreen() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>('food');

  const tabs: { key: Tab; label: string }[] = [
    { key: 'food', label: 'Food Items' },
    { key: 'juice', label: 'Drinks' },
    { key: 'dessert', label: 'Snacks' },
  ];

  const getMenuItems = () => {
    switch (activeTab) {
      case 'food': return popularFoods.slice(0, 4);
      case 'juice': return juiceItems;
      case 'dessert': return dessertItems;
    }
  };

  return (
    <div className="min-h-screen bg-bg pb-8">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-bg/95 backdrop-blur-sm px-5 pt-4 pb-3">
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center"
        >
          <ArrowLeft size={20} className="text-text" />
        </button>
      </div>

      {/* Restaurant Card */}
      <div className="px-5">
        <div className="bg-surface rounded-2xl overflow-hidden">
          <div className="w-full h-40 bg-gradient-to-br from-orange-800 to-red-900 flex items-center justify-center relative">
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-white/5" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/5" />
            <span className="text-6xl drop-shadow-lg">{restaurant.emoji}</span>
          </div>
          <div className="p-4">
            <h1 className="text-lg font-bold text-text">{restaurant.name}</h1>
            <p className="text-sm text-text-secondary flex items-center gap-1 mt-1">
              <MapPin size={13} /> {restaurant.address}
            </p>
            <div className="flex items-center gap-3 mt-3">
              <span className="flex items-center gap-1 bg-elevated px-2.5 py-1 rounded-lg text-xs font-medium text-text">
                <Star size={12} className="text-primary fill-primary" /> {restaurant.rating}
              </span>
              <span className="flex items-center gap-1 bg-elevated px-2.5 py-1 rounded-lg text-xs font-medium text-text">
                <Clock size={12} className="text-text-secondary" /> {restaurant.deliveryTime}
              </span>
              <span className="bg-primary/10 text-primary px-2.5 py-1 rounded-lg text-xs font-medium">
                {restaurant.deliveryFee}
              </span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mt-5 bg-surface rounded-xl p-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                if (tab.key === 'juice') {
                  navigate('/juice');
                } else if (tab.key === 'dessert') {
                  navigate('/dessert');
                } else {
                  setActiveTab(tab.key);
                }
              }}
              className={`flex-1 py-2.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === tab.key && tab.key === 'food'
                  ? 'bg-primary text-white'
                  : 'text-text-secondary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="mt-4 space-y-3">
          {getMenuItems().map((item, index) => (
            <div
              key={item.id}
              className="animate-fade-in bg-surface rounded-2xl p-3 flex items-center gap-3 cursor-pointer active:bg-elevated transition-colors"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => navigate(`/food/${item.id}`)}
            >
              <FoodImage emoji={item.emoji} gradient={item.gradient} name={item.name} size="sm" />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-text truncate">{item.name}</h3>
                <p className="text-xs text-text-secondary mt-0.5 line-clamp-1">{item.description}</p>
                <div className="flex items-center gap-3 mt-1.5">
                  <span className="text-xs text-text-secondary flex items-center gap-1">
                    <Star size={11} className="text-primary fill-primary" /> {item.rating}
                  </span>
                  <span className="text-xs text-text-secondary">{item.deliveryTime}</span>
                </div>
              </div>
              <span className="bg-primary text-white text-xs font-bold px-2.5 py-1.5 rounded-lg flex-shrink-0">
                GH₵{item.price.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
