import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, EyeOff, Mail, Lock, User, Phone } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function LoginScreen() {
  const navigate = useNavigate();
  const { login } = useStore();
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (isSignup) {
      if (!name.trim() || !email.trim() || !phone.trim() || !password.trim()) {
        setError('Please fill in all fields');
        return;
      }
      if (password.length < 6) {
        setError('Password must be at least 6 characters');
        return;
      }
    } else {
      if (!email.trim() || !password.trim()) {
        setError('Please fill in all fields');
        return;
      }
    }

    // Simulate auth
    login({
      name: isSignup ? name : email.split('@')[0] || 'SaviDon',
      email: email || 'savidon@knust.edu.gh',
      phone: phone || '0551537532',
    });
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      {/* Header */}
      <div className="px-5 pt-4 pb-3">
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center"
        >
          <ArrowLeft size={20} className="text-text" />
        </button>
      </div>

      {/* Logo */}
      <div className="px-5 pt-4 pb-6 text-center">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-alt mx-auto flex items-center justify-center mb-4 shadow-lg shadow-primary/30">
          <span className="text-4xl">🍛</span>
        </div>
        <h1 className="text-2xl font-bold text-text">
          {isSignup ? 'Create Account' : 'Welcome Back'}
        </h1>
        <p className="text-sm text-text-secondary mt-1">
          {isSignup
            ? 'Sign up to order delicious Ghanaian food'
            : 'Sign in to your SaviDon\'s Kitchen account'}
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="px-5 flex-1">
        <div className="space-y-3">
          {isSignup && (
            <div className="relative">
              <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-surface rounded-xl pl-10 pr-4 py-3.5 text-sm text-text placeholder-text-muted outline-none focus:ring-1 focus:ring-primary/50"
              />
            </div>
          )}

          <div className="relative">
            <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-surface rounded-xl pl-10 pr-4 py-3.5 text-sm text-text placeholder-text-muted outline-none focus:ring-1 focus:ring-primary/50"
            />
          </div>

          {isSignup && (
            <div className="relative">
              <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
              <input
                type="tel"
                placeholder="Phone Number (e.g. 0551537532)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-surface rounded-xl pl-10 pr-4 py-3.5 text-sm text-text placeholder-text-muted outline-none focus:ring-1 focus:ring-primary/50"
              />
            </div>
          )}

          <div className="relative">
            <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-surface rounded-xl pl-10 pr-10 py-3.5 text-sm text-text placeholder-text-muted outline-none focus:ring-1 focus:ring-primary/50"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showPassword ? (
                <EyeOff size={18} className="text-text-muted" />
              ) : (
                <Eye size={18} className="text-text-muted" />
              )}
            </button>
          </div>
        </div>

        {error && (
          <p className="text-xs text-red-500 mt-3 text-center">{error}</p>
        )}

        {!isSignup && (
          <div className="flex justify-end mt-3">
            <button type="button" className="text-xs text-primary font-medium">
              Forgot Password?
            </button>
          </div>
        )}

        <button
          type="submit"
          className="w-full mt-6 py-4 bg-primary rounded-2xl text-base font-semibold text-white shadow-lg shadow-primary/30 active:scale-[0.98] transition-transform"
        >
          {isSignup ? 'Sign Up' : 'Sign In'}
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-divider" />
          <span className="text-xs text-text-muted">or continue with</span>
          <div className="flex-1 h-px bg-divider" />
        </div>

        {/* Social */}
        <div className="grid grid-cols-3 gap-3">
          <button
            type="button"
            className="bg-surface rounded-xl py-3 flex items-center justify-center active:bg-elevated transition-colors"
          >
            <span className="text-lg">📧</span>
          </button>
          <button
            type="button"
            className="bg-surface rounded-xl py-3 flex items-center justify-center active:bg-elevated transition-colors"
          >
            <span className="text-lg">🔵</span>
          </button>
          <button
            type="button"
            className="bg-surface rounded-xl py-3 flex items-center justify-center active:bg-elevated transition-colors"
          >
            <span className="text-lg">🍎</span>
          </button>
        </div>

        {/* Toggle */}
        <div className="text-center mt-8">
          <span className="text-sm text-text-secondary">
            {isSignup ? 'Already have an account? ' : "Don't have an account? "}
          </span>
          <button
            type="button"
            onClick={() => {
              setIsSignup(!isSignup);
              setError('');
            }}
            className="text-sm text-primary font-semibold"
          >
            {isSignup ? 'Sign In' : 'Sign Up'}
          </button>
        </div>
      </form>
    </div>
  );
}
