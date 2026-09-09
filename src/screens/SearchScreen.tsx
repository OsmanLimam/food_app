import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, X, Star, Clock } from 'lucide-react';
import { allFoodItems, popularFoods, restaurant } from '../data/foodData';
import FoodImage from '../components/FoodImage';

type Category = 'all' | 'food' | 'restaurants';

export default function SearchScreen() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<Category>('all');

  const categories: { key: Category; label: string }[] = [
    { key: 'all', label: 'Local Dishes' },
    { key: 'food', label: 'Foods' },
    { key: 'restaurants', label: 'Restaurants' },
  ];

  const filteredItems = useMemo(() => {
    if (category === 'restaurants') return [];
    const items = category === 'food' ? popularFoods : allFoodItems;
    if (!query.trim()) return items;
    return items.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, category]);

  return (
    <div className="min-h-screen bg-bg pb-8">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-bg/95 backdrop-blur-sm px-5 pt-4 pb-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center flex-shrink-0"
          >
            <ArrowLeft size={20} className="text-text" />
          </button>
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              placeholder="Search Ghanaian dishes..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-surface rounded-xl pl-10 pr-10 py-3 text-sm text-text placeholder-text-muted outline-none focus:ring-1 focus:ring-primary/50"
              autoFocus
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <X size={16} className="text-text-muted" />
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex gap-2 mt-3">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                category === cat.key
                  ? 'bg-primary text-white'
                  : 'bg-surface text-text-secondary'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="px-5 pt-4">
        {category === 'restaurants' ? (
          <div
            className="bg-surface rounded-2xl overflow-hidden cursor-pointer active:bg-elevated transition-colors"
            onClick={() => navigate('/restaurant')}
          >
            <div className="w-full h-24 bg-gradient-to-br from-orange-800 to-red-900 flex items-center justify-center relative">
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-white/5" />
              <span className="text-4xl drop-shadow-lg">{restaurant.emoji}</span>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold text-text">{restaurant.name}</h3>
              <p className="text-xs text-text-secondary mt-0.5">{restaurant.address}</p>
              <div className="flex items-center gap-3 mt-1.5">
                <span className="text-xs text-text-secondary flex items-center gap-1">
                  <Star size={12} className="text-primary fill-primary" /> {restaurant.rating}
                </span>
                <span className="text-xs text-text-secondary flex items-center gap-1">
                  <Clock size={12} /> {restaurant.deliveryTime}
                </span>
              </div>
            </div>
          </div>
        ) : filteredItems.length > 0 ? (
          <div className="space-y-3">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="animate-fade-in bg-surface rounded-2xl p-3 flex items-center gap-3 cursor-pointer active:bg-elevated transition-colors"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => navigate(`/food/${item.id}`)}
              >
                <FoodImage emoji={item.emoji} gradient={item.gradient} name={item.name} size="sm" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-text truncate">{item.name}</h3>
                  <p className="text-xs text-text-secondary mt-0.5 line-clamp-1">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-3 mt-1.5">
                    <span className="text-xs text-text-secondary flex items-center gap-1">
                      <Star size={12} className="text-primary fill-primary" /> {item.rating}
                    </span>
                    <span className="text-xs text-text-secondary flex items-center gap-1">
                      <Clock size={12} /> {item.deliveryTime}
                    </span>
                  </div>
                </div>
                <span className="bg-primary text-white text-xs font-bold px-2.5 py-1.5 rounded-lg flex-shrink-0">
                  GH₵{item.price.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-20 h-20 rounded-full bg-surface flex items-center justify-center mb-4">
              <span className="text-3xl">🍽️</span>
            </div>
            <h3 className="text-lg font-semibold text-text">No food found</h3>
            <p className="text-sm text-text-secondary mt-1 text-center">
              Try searching for Jollof, Waakye, or Banku
            </p>
            <button
              onClick={() => { setQuery(''); setCategory('all'); }}
              className="mt-4 px-6 py-2.5 bg-primary rounded-xl text-sm font-medium text-white"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
