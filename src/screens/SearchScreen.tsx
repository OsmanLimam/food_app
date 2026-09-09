import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, X, Star, Clock } from 'lucide-react';
import { allFoodItems, popularFoods } from '../data/foodData';
import { restaurant } from '../data/foodData';

type Category = 'all' | 'food' | 'restaurants';

export default function SearchScreen() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<Category>('all');

  const categories: { key: Category; label: string }[] = [
    { key: 'all', label: 'Asian Food' },
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
              placeholder="Search"
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
          <button className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A0A0A0" strokeWidth="2">
              <line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/>
              <line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/>
              <line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/>
              <line x1="17" y1="16" x2="23" y2="16"/>
            </svg>
          </button>
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
            className="bg-surface rounded-2xl p-4 flex items-center gap-4 cursor-pointer active:bg-elevated transition-colors"
            onClick={() => navigate('/restaurant')}
          >
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-16 h-16 rounded-xl object-cover"
            />
            <div className="flex-1">
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
            <span className="bg-primary/10 text-primary text-xs font-bold px-2.5 py-1 rounded-lg">
              {restaurant.deliveryFee}
            </span>
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
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                />
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
                  ${item.price.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-20 h-20 rounded-full bg-surface flex items-center justify-center mb-4">
              <Search size={32} className="text-text-muted" />
            </div>
            <h3 className="text-lg font-semibold text-text">No food found</h3>
            <p className="text-sm text-text-secondary mt-1 text-center">
              Try a different search term or category
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
