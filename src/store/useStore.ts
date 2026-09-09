import { create } from 'zustand';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  emoji: string;
  gradient: string;
  quantity: number;
  subtitle?: string;
}

interface AppState {
  // Cart
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;

  // Favorites
  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;

  // Order
  orderPlaced: boolean;
  setOrderPlaced: (val: boolean) => void;

  // Menu drawer
  menuOpen: boolean;
  setMenuOpen: (val: boolean) => void;
}

export const useStore = create<AppState>((set, get) => ({
  cart: [],
  addToCart: (item, quantity = 1) => {
    set((state) => {
      const existing = state.cart.find((c) => c.id === item.id);
      if (existing) {
        return {
          cart: state.cart.map((c) =>
            c.id === item.id ? { ...c, quantity: c.quantity + quantity } : c
          ),
        };
      }
      return { cart: [...state.cart, { ...item, quantity }] };
    });
  },
  removeFromCart: (id) => {
    set((state) => ({ cart: state.cart.filter((c) => c.id !== id) }));
  },
  updateQuantity: (id, quantity) => {
    if (quantity <= 0) {
      set((state) => ({ cart: state.cart.filter((c) => c.id !== id) }));
    } else {
      set((state) => ({
        cart: state.cart.map((c) => (c.id === id ? { ...c, quantity } : c)),
      }));
    }
  },
  clearCart: () => set({ cart: [] }),
  getCartTotal: () => {
    return get().cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },
  getCartCount: () => {
    return get().cart.reduce((sum, item) => sum + item.quantity, 0);
  },

  favorites: [],
  toggleFavorite: (id) => {
    set((state) => ({
      favorites: state.favorites.includes(id)
        ? state.favorites.filter((f) => f !== id)
        : [...state.favorites, id],
    }));
  },
  isFavorite: (id) => get().favorites.includes(id),

  orderPlaced: false,
  setOrderPlaced: (val) => set({ orderPlaced: val }),

  menuOpen: false,
  setMenuOpen: (val) => set({ menuOpen: val }),
}));
