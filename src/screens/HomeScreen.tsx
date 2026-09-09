import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Heart, X } from 'lucide-react';
import { useStore } from '../store/useStore';
import { popularFoods, restaurantList } from '../data/foodData';
import FoodImage from '../components/FoodImage';

export default function HomeScreen() {
  const navigate = useNavigate();
  const { toggleFavorite, isFavorite, getCartCount, setMenuOpen } = useStore();
  const cartCount = getCartCount();

  return (
    <div className="min-h-screen bg-bg pb-28">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-bg/95 backdrop-blur-sm px-5 pt-4 pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMenuOpen(true)}
              className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center active:bg-elevated transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18"/>
              </svg>
            </button>
            <div>
              <p className="text-[11px] text-primary font-semibold tracking-wide">SaviDon's Kitchen</p>
              <h1 className="text-sm font-medium text-text-secondary leading-tight flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                KNUST Campus, Kumasi
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate('/search')}
              className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center active:bg-elevated transition-colors"
            >
              <Search size={18} className="text-text-secondary" />
            </button>
            <button
              onClick={() => navigate('/notifications')}
              className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center relative active:bg-elevated transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A0A0A0" strokeWidth="2">
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 01-3.46 0"/>
              </svg>
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary" />
            </button>
            <button
              onClick={() => navigate('/profile')}
              className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center active:bg-primary/30 transition-colors"
            >
              <span className="text-sm font-bold text-primary">S</span>
            </button>
          </div>
        </div>
      </div>

      {/* Promo Banner */}
      <div className="px-5 pt-3">
        <div className="bg-gradient-to-r from-primary to-primary-alt rounded-2xl p-4 flex items-center justify-between">
          <div>
            <p className="text-white/80 text-[11px] font-medium">Campus Special 🇬🇭</p>
            <h3 className="text-white font-bold text-sm mt-0.5">20% OFF</h3>
            <p className="text-white/70 text-[11px] mt-0.5">On Jollof Rice orders</p>
          </div>
          <div className="text-3xl">🍛</div>
        </div>
      </div>

      {/* Featured Restaurant */}
      <div className="px-5 pt-4">
        <div
          className="relative bg-surface rounded-2xl overflow-hidden cursor-pointer active:scale-[0.98] transition-transform"
          onClick={() => navigate('/restaurant')}
        >
          <div className="w-full h-36 bg-gradient-to-br from-orange-800 to-red-900 flex items-center justify-center relative">
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-white/5" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/5" />
            <span className="text-6xl drop-shadow-lg">🏪</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/30 to-transparent" />
          <div className="absolute bottom-3 left-4 right-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-md">Featured</span>
              <span className="text-[11px] text-white/80 flex items-center gap-0.5">★ 4.9</span>
            </div>
            <h3 className="text-base font-bold text-white">KNUST Chop Bar</h3>
            <p className="text-xs text-white/70 mt-0.5">20-25 Min • Free Delivery</p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="px-5 pt-4">
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-1">
          <button
            onClick={() => navigate('/restaurant')}
            className="flex-shrink-0 bg-surface rounded-2xl px-4 py-3 flex items-center gap-2 active:bg-elevated transition-colors"
          >
            <span className="text-lg">🍲</span>
            <span className="text-xs font-medium text-text">Restaurants</span>
          </button>
          <button
            onClick={() => navigate('/juice')}
            className="flex-shrink-0 bg-surface rounded-2xl px-4 py-3 flex items-center gap-2 active:bg-elevated transition-colors"
          >
            <span className="text-lg">🥤</span>
            <span className="text-xs font-medium text-text">Drinks</span>
          </button>
          <button
            onClick={() => navigate('/dessert')}
            className="flex-shrink-0 bg-surface rounded-2xl px-4 py-3 flex items-center gap-2 active:bg-elevated transition-colors"
          >
            <span className="text-lg">🍩</span>
            <span className="text-xs font-medium text-text">Snacks</span>
          </button>
          <button
            onClick={() => navigate('/search')}
            className="flex-shrink-0 bg-surface rounded-2xl px-4 py-3 flex items-center gap-2 active:bg-elevated transition-colors"
          >
            <span className="text-lg">🥘</span>
            <span className="text-xs font-medium text-text">Local Dishes</span>
          </button>
        </div>
      </div>

      {/* Popular Restaurants */}
      <div className="px-5 pt-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-semibold text-text">Popular Spots</h2>
          <button onClick={() => navigate('/restaurant')} className="text-xs text-primary font-medium">
            See All
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-1">
          {restaurantList.map((r) => (
            <div
              key={r.name}
              className="flex-shrink-0 w-32 cursor-pointer active:scale-[0.97] transition-transform"
              onClick={() => navigate('/restaurant')}
            >
              <div className={`w-32 h-24 rounded-2xl bg-gradient-to-br ${r.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-white/5" />
                <span className="text-4xl drop-shadow-lg">{r.emoji}</span>
              </div>
              <h3 className="text-xs font-semibold text-text mt-2 truncate">{r.name}</h3>
              <p className="text-[10px] text-text-secondary">{r.time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section Title */}
      <div className="px-5 pt-5 pb-2 flex items-center justify-between">
        <h2 className="text-base font-semibold text-text">Popular Ghanaian Dishes</h2>
        <button onClick={() => navigate('/search')} className="text-xs text-primary font-medium">
          See All
        </button>
      </div>

      {/* Food Grid */}
      <div className="px-5">
        <div className="grid grid-cols-2 gap-3">
          {popularFoods.map((food, index) => (
            <div
              key={food.id}
              className="animate-fade-in bg-surface rounded-2xl overflow-hidden cursor-pointer active:scale-[0.97] transition-transform"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => navigate(`/food/${food.id}`)}
            >
              <div className="relative">
                <FoodImage emoji={food.emoji} gradient={food.gradient} name={food.name} />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(food.id);
                  }}
                  className="absolute top-2 right-2 w-8 h-8 rounded-full bg-bg/60 backdrop-blur-sm flex items-center justify-center"
                >
                  <Heart
                    size={16}
                    className={isFavorite(food.id) ? 'text-primary fill-primary' : 'text-white'}
                  />
                </button>
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold text-text leading-tight mb-1.5 line-clamp-2">
                  {food.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold text-sm">GH₵{food.price.toFixed(2)}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] text-text-secondary flex items-center gap-0.5">
                      ★ {food.rating}
                    </span>
                    <span className="text-[11px] text-text-muted">•</span>
                    <span className="text-[11px] text-text-secondary">{food.deliveryTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-40">
        {/* Cart FAB */}
        <div className="flex justify-center -mb-5 relative z-50">
          <button
            onClick={() => navigate('/cart')}
            className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 active:scale-95 transition-transform"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white text-primary text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
        {/* Nav Bar */}
        <div className="bg-surface border-t border-divider px-6 py-3 pb-5">
          <div className="flex items-center justify-between">
            <button className="flex flex-col items-center gap-1" onClick={() => navigate('/')}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF5722" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
              </svg>
              <span className="text-[10px] font-medium text-primary">Home</span>
            </button>
            <button className="flex flex-col items-center gap-1" onClick={() => navigate('/favorites')}>
              <Heart size={22} className="text-text-muted" />
              <span className="text-[10px] font-medium text-text-muted">Favorites</span>
            </button>
            <div className="w-14" />
            <button className="flex flex-col items-center gap-1" onClick={() => navigate('/notifications')}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#757575" strokeWidth="2">
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 01-3.46 0"/>
              </svg>
              <span className="text-[10px] font-medium text-text-muted">Notifications</span>
            </button>
            <button className="flex flex-col items-center gap-1" onClick={() => navigate('/profile')}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#757575" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <span className="text-[10px] font-medium text-text-muted">Profile</span>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Drawer */}
      <MenuDrawer />
    </div>
  );
}

function MenuDrawer() {
  const navigate = useNavigate();
  const { menuOpen, setMenuOpen } = useStore();

  if (!menuOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 z-50 animate-fade-in"
        onClick={() => setMenuOpen(false)}
      />
      <div className="fixed top-0 left-0 bottom-0 w-72 bg-surface z-50 animate-slide-right p-5 overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-primary font-bold text-lg">SaviDon's Kitchen</p>
            <p className="text-xs text-text-secondary">KNUST Campus, Kumasi</p>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-9 h-9 rounded-xl bg-elevated flex items-center justify-center"
          >
            <X size={18} className="text-text" />
          </button>
        </div>

        <div className="space-y-1">
          {[
            { icon: '🏠', label: 'Home', action: () => { navigate('/'); setMenuOpen(false); } },
            { icon: '🔍', label: 'Search Food', action: () => { navigate('/search'); setMenuOpen(false); } },
            { icon: '🍲', label: 'Restaurants', action: () => { navigate('/restaurant'); setMenuOpen(false); } },
            { icon: '🥤', label: 'Local Drinks', action: () => { navigate('/juice'); setMenuOpen(false); } },
            { icon: '🍩', label: 'Snacks & Desserts', action: () => { navigate('/dessert'); setMenuOpen(false); } },
            { icon: '❤️', label: 'My Favorites', action: () => { navigate('/favorites'); setMenuOpen(false); } },
            { icon: '🛒', label: 'My Cart', action: () => { navigate('/cart'); setMenuOpen(false); } },
            { icon: '🔔', label: 'Notifications', action: () => { navigate('/notifications'); setMenuOpen(false); } },
            { icon: '👤', label: 'My Profile', action: () => { navigate('/profile'); setMenuOpen(false); } },
          ].map((item) => (
            <button
              key={item.label}
              onClick={item.action}
              className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left text-text hover:bg-elevated active:bg-elevated transition-colors"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-divider">
          <div className="bg-elevated rounded-xl p-4">
            <p className="text-xs text-text-secondary">Logged in as</p>
            <p className="text-sm font-semibold text-text mt-1">SaviDon</p>
            <p className="text-xs text-text-muted mt-0.5">savidon@knust.edu.gh</p>
          </div>
        </div>
      </div>
    </>
  );
}
