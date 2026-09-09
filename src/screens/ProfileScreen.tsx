import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight, MapPin, CreditCard, Heart, ShoppingBag, HelpCircle, LogOut, Settings } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function ProfileScreen() {
  const navigate = useNavigate();
  const { favorites, getCartCount, isLoggedIn, user, logout } = useStore();
  const cartCount = getCartCount();

  // If not logged in, redirect to login
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-bg flex flex-col items-center justify-center px-5">
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-5">
          <span className="text-4xl">👤</span>
        </div>
        <h2 className="text-xl font-bold text-text">Sign In Required</h2>
        <p className="text-sm text-text-secondary mt-2 text-center">
          Please sign in to view your profile
        </p>
        <div className="flex gap-3 mt-6 w-full">
          <button
            onClick={() => navigate(-1)}
            className="flex-1 py-3.5 bg-surface rounded-2xl text-sm font-semibold text-text active:bg-elevated transition-colors"
          >
            Go Back
          </button>
          <button
            onClick={() => navigate('/login')}
            className="flex-1 py-3.5 bg-primary rounded-2xl text-sm font-semibold text-white shadow-lg shadow-primary/30 active:scale-[0.97] transition-transform"
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const menuItems = [
    {
      icon: <ShoppingBag size={18} className="text-primary" />,
      label: 'My Orders',
      subtitle: '3 active orders',
      action: () => navigate('/cart'),
      badge: cartCount > 0 ? cartCount : undefined,
    },
    {
      icon: <Heart size={18} className="text-primary" />,
      label: 'Favorites',
      subtitle: `${favorites.length} saved items`,
      action: () => navigate('/favorites'),
    },
    {
      icon: <MapPin size={18} className="text-primary" />,
      label: 'Delivery Addresses',
      subtitle: 'KNUST Campus',
      action: () => {},
    },
    {
      icon: <CreditCard size={18} className="text-primary" />,
      label: 'Payment Methods',
      subtitle: 'MoMo, Visa',
      action: () => {},
    },
    {
      icon: <Settings size={18} className="text-primary" />,
      label: 'Settings',
      subtitle: 'Notifications, Language',
      action: () => {},
    },
    {
      icon: <HelpCircle size={18} className="text-primary" />,
      label: 'Help & Support',
      subtitle: 'FAQs, Contact us',
      action: () => {},
    },
  ];

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
          <h1 className="text-xl font-bold text-text">My Profile</h1>
        </div>
      </div>

      {/* Profile Card */}
      <div className="px-5 pt-2">
        <div className="bg-surface rounded-2xl p-5 flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-alt flex items-center justify-center">
            <span className="text-2xl font-bold text-white">
              {user?.name.charAt(0).toUpperCase() || 'S'}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-bold text-text truncate">{user?.name || 'SaviDon'}</h2>
            <p className="text-sm text-text-secondary truncate">{user?.email || 'savidon@knust.edu.gh'}</p>
            <p className="text-xs text-text-muted mt-1">KNUST Student • Level 400</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          <div className="bg-surface rounded-2xl p-4 text-center">
            <p className="text-2xl font-bold text-primary">12</p>
            <p className="text-[11px] text-text-secondary mt-1">Orders</p>
          </div>
          <div className="bg-surface rounded-2xl p-4 text-center">
            <p className="text-2xl font-bold text-primary">{favorites.length}</p>
            <p className="text-[11px] text-text-secondary mt-1">Favorites</p>
          </div>
          <div className="bg-surface rounded-2xl p-4 text-center">
            <p className="text-2xl font-bold text-primary">4.9</p>
            <p className="text-[11px] text-text-secondary mt-1">Rating</p>
          </div>
        </div>

        {/* Menu Items */}
        <div className="mt-5 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={item.action}
              className="w-full bg-surface rounded-2xl p-4 flex items-center gap-3 active:bg-elevated transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-text">{item.label}</p>
                <p className="text-xs text-text-secondary mt-0.5">{item.subtitle}</p>
              </div>
              {item.badge ? (
                <span className="w-5 h-5 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center">
                  {item.badge}
                </span>
              ) : (
                <ChevronRight size={16} className="text-text-muted" />
              )}
            </button>
          ))}
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="w-full mt-4 bg-surface rounded-2xl p-4 flex items-center gap-3 active:bg-elevated transition-colors"
        >
          <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
            <LogOut size={18} className="text-red-500" />
          </div>
          <span className="text-sm font-medium text-red-500">Log Out</span>
        </button>

        {/* App Info */}
        <div className="mt-6 text-center">
          <p className="text-xs text-text-muted">SaviDon's Kitchen v1.0.0</p>
          <p className="text-[11px] text-text-muted mt-1">Made with ❤️ for KNUST 🇬🇭</p>
        </div>
      </div>
    </div>
  );
}
