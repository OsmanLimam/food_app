import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, SlidersHorizontal, Star } from 'lucide-react';
import { dessertItems } from '../data/foodData';
import { useStore } from '../store/useStore';
import FoodImage from '../components/FoodImage';

export default function DessertScreen() {
  const navigate = useNavigate();
  const { addToCart } = useStore();

  return (
    <div className="min-h-screen bg-bg pb-8">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-bg/95 backdrop-blur-sm px-5 pt-4 pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center"
            >
              <ArrowLeft size={20} className="text-text" />
            </button>
            <h1 className="text-xl font-bold text-text">Snacks & Desserts</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center">
              <Search size={18} className="text-text-secondary" />
            </button>
            <button className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center">
              <SlidersHorizontal size={18} className="text-text-secondary" />
            </button>
          </div>
        </div>
      </div>

      {/* Dessert Grid */}
      <div className="px-5 pt-2 grid grid-cols-2 gap-3">
        {dessertItems.map((item, index) => (
          <div
            key={item.id}
            className="animate-fade-in bg-surface rounded-2xl overflow-hidden cursor-pointer active:scale-[0.97] transition-transform"
            style={{ animationDelay: `${index * 80}ms` }}
            onClick={() => navigate(`/food/${item.id}`)}
          >
            <div className="relative">
              <FoodImage emoji={item.emoji} gradient={item.gradient} name={item.name} image={item.image} />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart({ id: item.id, name: item.name, price: item.price, emoji: item.emoji, image: item.image, gradient: item.gradient });
                }}
                className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-md"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
              </button>
            </div>
            <div className="p-3">
              <h3 className="text-sm font-semibold text-text leading-tight line-clamp-2">{item.name}</h3>
              <div className="flex items-center justify-between mt-2">
                <span className="text-primary font-bold text-sm">GH₵{item.price.toFixed(2)}</span>
                <span className="text-[11px] text-text-secondary flex items-center gap-0.5">
                  <Star size={11} className="text-primary fill-primary" /> {item.rating}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
