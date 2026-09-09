import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Trash2 } from 'lucide-react';
import { useStore } from '../store/useStore';
import { allFoodItems } from '../data/foodData';
import FoodImage from '../components/FoodImage';

export default function FavoritesScreen() {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useStore();

  const favoriteItems = allFoodItems.filter((item) => favorites.includes(item.id));

  return (
    <div className="min-h-screen bg-bg pb-8">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-bg/95 backdrop-blur-sm px-5 pt-4 pb-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center"
          >
            <ArrowLeft size={20} className="text-text" />
          </button>
          <h1 className="text-xl font-bold text-text">My Favorites</h1>
        </div>
      </div>

      <div className="px-5 pt-2">
        {favoriteItems.length > 0 ? (
          <div className="grid grid-cols-2 gap-3">
            {favoriteItems.map((food, index) => (
              <div
                key={food.id}
                className="animate-fade-in bg-surface rounded-2xl overflow-hidden cursor-pointer active:scale-[0.97] transition-transform"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => navigate(`/food/${food.id}`)}
              >
                <div className="relative">
                  <FoodImage emoji={food.emoji} gradient={food.gradient} name={food.name} image={food.image} />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(food.id);
                    }}
                    className="absolute top-2 right-2 w-8 h-8 rounded-full bg-bg/60 backdrop-blur-sm flex items-center justify-center"
                  >
                    <Heart size={16} className="text-primary fill-primary" />
                  </button>
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-text leading-tight mb-1.5 line-clamp-2">
                    {food.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold text-sm">GH₵{food.price.toFixed(2)}</span>
                    <span className="text-[11px] text-text-secondary flex items-center gap-0.5">
                      ★ {food.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-24 h-24 rounded-full bg-surface flex items-center justify-center mb-5">
              <Heart size={40} className="text-text-muted" />
            </div>
            <h2 className="text-xl font-bold text-text">No favorites yet</h2>
            <p className="text-sm text-text-secondary mt-2 text-center max-w-xs">
              Tap the heart icon on any dish to save it here for quick access
            </p>
            <button
              onClick={() => navigate('/')}
              className="mt-6 px-8 py-3.5 bg-primary rounded-2xl text-sm font-semibold text-white shadow-lg shadow-primary/30 active:scale-[0.97] transition-transform"
            >
              Discover Food
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
