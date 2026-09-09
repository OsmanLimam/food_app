import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useStore } from '../store/useStore';
import FoodImage from '../components/FoodImage';

export default function CartScreen() {
  const navigate = useNavigate();
  const { cart, updateQuantity, getCartTotal, getCartCount } = useStore();
  const total = getCartTotal();
  const count = getCartCount();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-bg flex flex-col">
        {/* Header */}
        <div className="px-5 pt-4 pb-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center"
            >
              <ArrowLeft size={20} className="text-text" />
            </button>
            <h1 className="text-xl font-bold text-text">Cart</h1>
          </div>
        </div>

        {/* Empty State */}
        <div className="flex-1 flex flex-col items-center justify-center px-5">
          <div className="w-24 h-24 rounded-full bg-surface flex items-center justify-center mb-5">
            <span className="text-4xl">🛒</span>
          </div>
          <h2 className="text-xl font-bold text-text">Your cart is empty</h2>
          <p className="text-sm text-text-secondary mt-2 text-center">
            Looks like you haven't added any Ghanaian dishes yet
          </p>
          <button
            onClick={() => navigate('/')}
            className="mt-6 px-8 py-3.5 bg-primary rounded-2xl text-sm font-semibold text-white shadow-lg shadow-primary/30 active:scale-[0.97] transition-transform"
          >
            Explore Food
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg pb-32">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-bg/95 backdrop-blur-sm px-5 pt-4 pb-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center"
          >
            <ArrowLeft size={20} className="text-text" />
          </button>
          <h1 className="text-xl font-bold text-text">Cart</h1>
        </div>
      </div>

      {/* Cart Items */}
      <div className="px-5 pt-2 space-y-3">
        {cart.map((item, index) => (
          <div
            key={item.id}
            className="animate-fade-in bg-surface rounded-2xl p-3 flex items-center gap-3"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <FoodImage emoji={item.emoji} gradient={item.gradient} name={item.name} size="sm" />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-text truncate">{item.name}</h3>
              <p className="text-xs text-text-secondary mt-0.5">
                {item.subtitle || 'Standard'}
              </p>
              <span className="text-primary font-bold text-sm mt-1 block">
                GH₵{item.price.toFixed(2)}
              </span>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="w-8 h-8 rounded-full bg-elevated flex items-center justify-center active:bg-divider transition-colors"
              >
                <Minus size={14} className="text-text" />
              </button>
              <span className="text-sm font-bold text-text w-5 text-center">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="w-8 h-8 rounded-full bg-primary flex items-center justify-center active:bg-primary-alt transition-colors"
              >
                <Plus size={14} className="text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Sticky Bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-bg/95 backdrop-blur-sm border-t border-divider px-5 py-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-xs text-text-secondary">{count} Selected Food</span>
            <p className="text-xl font-bold text-text mt-0.5">GH₵{total.toFixed(2)}</p>
          </div>
        </div>
        <button
          onClick={() => navigate('/checkout')}
          className="w-full py-4 bg-primary rounded-2xl text-base font-semibold text-white shadow-lg shadow-primary/30 active:scale-[0.98] transition-transform"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
