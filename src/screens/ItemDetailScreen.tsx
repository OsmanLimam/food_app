import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Heart, Minus, Plus, Star } from 'lucide-react';
import { useStore } from '../store/useStore';
import { allFoodItems } from '../data/foodData';
import FoodImage from '../components/FoodImage';

const ingredientEmojis: Record<string, string> = {
  'Rice': '🍚', 'Tomato': '🍅', 'Chicken': '🍗', 'Pepper': '🌶️', 'Onion': '🧅',
  'Beans': '🫘', 'Shito': '🥫', 'Spaghetti': '🍝', 'Egg': '🥚',
  'Corn': '🌽', 'Cassava': '🥔', 'Tilapia': '🐟',
  'Plantain': '🍌', 'Goat Meat': '🥩', 'Herbs': '🌿',
  'Ginger': '🫚', 'Pineapple': '🍍', 'Cloves': '🌸',
  'Hibiscus': '🌺', 'Millet': '🌾', 'Dates': '🌴', 'Milk': '🥛',
  'Banana': '🍌', 'Sugar': '🍬', 'Water': '💧', 'Ice': '🧊',
  'Sorghum': '🌾', 'Yeast': '🍞', 'Groundnuts': '🥜', 'Salt': '🧂',
  'Flour': '🌾', 'Oil': '🫗', 'Nutmeg': '🥥',
  'Palm Oil': '🌴', 'Gari': '🥣', 'Cocoyam': '🥔',
  'Kontomire': '🥬', 'Fish': '🐟', 'Yam': '🍠',
};

export default function ItemDetailScreen() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { addToCart, toggleFavorite, isFavorite } = useStore();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const food = allFoodItems.find((f) => f.id === id);

  if (!food) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <p className="text-text-secondary">Item not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(
      { id: food.id, name: food.name, price: food.price, emoji: food.emoji, image: food.image, gradient: food.gradient },
      quantity
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="min-h-screen bg-bg pb-24">
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-5 pt-4">
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 rounded-xl bg-bg/60 backdrop-blur-sm flex items-center justify-center"
        >
          <ArrowLeft size={20} className="text-white" />
        </button>
        <button
          onClick={() => toggleFavorite(food.id)}
          className="w-10 h-10 rounded-xl bg-bg/60 backdrop-blur-sm flex items-center justify-center"
        >
          <Heart
            size={20}
            className={isFavorite(food.id) ? 'text-primary fill-primary' : 'text-white'}
          />
        </button>
      </div>

      {/* Hero Image */}
      <div className="relative">
        <FoodImage emoji={food.emoji} gradient={food.gradient} name={food.name} image={food.image} size="lg" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* Content */}
      <div className="px-5 -mt-6 relative z-10">
        {/* Product Header */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h1 className="text-xl font-bold text-text leading-tight">{food.name}</h1>
            <div className="flex items-center gap-3 mt-2">
              <span className="flex items-center gap-1 text-sm text-text-secondary">
                <Star size={14} className="text-primary fill-primary" />
                <span className="font-medium">{food.rating}</span>
              </span>
              <span className="text-text-muted">•</span>
              <span className="text-sm text-text-secondary">{food.deliveryTime}</span>
            </div>
          </div>
          <span className="text-2xl font-bold text-primary">GH₵{food.price.toFixed(2)}</span>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center justify-between mt-6">
          <span className="text-sm font-medium text-text-secondary">Quantity</span>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-9 h-9 rounded-full bg-surface flex items-center justify-center active:bg-elevated transition-colors"
            >
              <Minus size={16} className="text-text" />
            </button>
            <span className="text-lg font-bold text-text w-6 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-9 h-9 rounded-full bg-primary flex items-center justify-center active:bg-primary-alt transition-colors"
            >
              <Plus size={16} className="text-white" />
            </button>
          </div>
        </div>

        {/* About */}
        <div className="mt-6">
          <h2 className="text-base font-semibold text-text mb-2">About</h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            {food.description}
          </p>
        </div>

        {/* Ingredients */}
        {food.ingredients && (
          <div className="mt-6">
            <h2 className="text-base font-semibold text-text mb-3">Ingredients</h2>
            <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
              {food.ingredients.map((ingredient, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1.5 flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-surface flex items-center justify-center text-lg">
                    {ingredientEmojis[ingredient] || '🍽️'}
                  </div>
                  <span className="text-[11px] text-text-secondary text-center w-16 truncate">
                    {ingredient}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sticky Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-bg/95 backdrop-blur-sm px-5 py-4 border-t border-divider">
        <button
          onClick={handleAddToCart}
          className={`w-full py-4 rounded-2xl text-base font-semibold transition-all active:scale-[0.98] ${
            added
              ? 'bg-green-600 text-white'
              : 'bg-primary text-white shadow-lg shadow-primary/30'
          }`}
        >
          {added ? '✓ Added to Cart' : `Add to Cart — GH₵${(food.price * quantity).toFixed(2)}`}
        </button>
      </div>
    </div>
  );
}
