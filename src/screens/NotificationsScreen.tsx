import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface Notification {
  id: string;
  emoji: string;
  title: string;
  message: string;
  time: string;
  unread: boolean;
  gradient: string;
}

const notifications: Notification[] = [
  {
    id: '1',
    emoji: '🎉',
    title: 'Special Offer!',
    message: 'Get 20% off on Jollof Rice today only. Order now!',
    time: '2 min ago',
    unread: true,
    gradient: 'from-primary to-primary-alt',
  },
  {
    id: '2',
    emoji: '🛵',
    title: 'Order on the way',
    message: 'Your Waakye Special is being delivered. Arriving in 10 mins.',
    time: '15 min ago',
    unread: true,
    gradient: 'from-blue-800 to-cyan-700',
  },
  {
    id: '3',
    emoji: '⭐',
    title: 'Rate your order',
    message: 'How was your Banku & Tilapia? Share your experience!',
    time: '1 hour ago',
    unread: false,
    gradient: 'from-yellow-800 to-amber-700',
  },
  {
    id: '4',
    emoji: '🆕',
    title: 'New on the menu',
    message: 'Fresh Brukina and Asana now available at KNUST Chop Bar!',
    time: '3 hours ago',
    unread: false,
    gradient: 'from-purple-800 to-pink-700',
  },
  {
    id: '5',
    emoji: '🎁',
    title: 'Free delivery!',
    message: 'Enjoy free delivery on all orders above GH₵50 this weekend.',
    time: 'Yesterday',
    unread: false,
    gradient: 'from-green-800 to-emerald-700',
  },
  {
    id: '6',
    emoji: '🔥',
    title: 'Trending now',
    message: 'Kelewele is the most ordered dish on campus today!',
    time: 'Yesterday',
    unread: false,
    gradient: 'from-red-800 to-orange-700',
  },
];

export default function NotificationsScreen() {
  const navigate = useNavigate();

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
          <div className="flex-1">
            <h1 className="text-xl font-bold text-text">Notifications</h1>
            <p className="text-xs text-text-secondary mt-0.5">2 new notifications</p>
          </div>
          <button className="text-xs text-primary font-medium">Mark all read</button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="px-5 pt-2 space-y-3">
        {notifications.map((notif, index) => (
          <div
            key={notif.id}
            className="animate-fade-in bg-surface rounded-2xl p-4 flex items-start gap-3 cursor-pointer active:bg-elevated transition-colors"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${notif.gradient} flex items-center justify-center flex-shrink-0`}>
              <span className="text-xl">{notif.emoji}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h3 className={`text-sm font-semibold text-text ${notif.unread ? '' : 'opacity-70'}`}>
                  {notif.title}
                </h3>
                {notif.unread && (
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                )}
              </div>
              <p className="text-xs text-text-secondary mt-1 line-clamp-2">
                {notif.message}
              </p>
              <p className="text-[11px] text-text-muted mt-1.5">{notif.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
