import React, { useState } from 'react';

interface FoodImageProps {
  emoji: string;
  gradient: string;
  name: string;
  image?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function FoodImage({ emoji, gradient, name, image, className = '', size = 'md' }: FoodImageProps) {
  const [imgError, setImgError] = useState(false);
  const sizeClasses = {
    sm: 'w-16 h-16 text-2xl',
    md: 'w-full h-36 text-5xl',
    lg: 'w-full h-52 text-7xl',
  };

  // Fallback to emoji if image fails to load
  if (image && !imgError) {
    return (
      <div className={`relative overflow-hidden ${sizeClasses[size]} ${className}`}>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={() => setImgError(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
    );
  }

  // Fallback: gradient background with emoji
  return (
    <div
      className={`relative bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden ${sizeClasses[size]} ${className}`}
      aria-label={name}
    >
      <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-white/5" />
      <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white/5" />
      <span className="relative drop-shadow-lg">{emoji}</span>
    </div>
  );
}
