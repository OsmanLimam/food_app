export interface FoodItem {
  id: string;
  name: string;
  price: number;
  emoji: string;
  image: string;
  gradient: string;
  rating: number;
  deliveryTime: string;
  description?: string;
  ingredients?: string[];
  category: 'food' | 'juice' | 'dessert';
  restaurant?: string;
}

export interface Restaurant {
  id: string;
  name: string;
  emoji: string;
  image: string;
  gradient: string;
  address: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: string;
}

export const popularFoods: FoodItem[] = [
  {
    id: 'jollof-rice',
    name: 'Jollof Rice & Chicken',
    price: 35.00,
    emoji: '🍛',
    image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=500&h=500&fit=crop',
    gradient: 'from-red-900 to-orange-800',
    rating: 4.9,
    deliveryTime: '20-25 Min',
    description: 'Smoky, spicy West African jollof rice cooked in rich tomato stew, served with perfectly grilled chicken and shito. A true Ghanaian classic!',
    ingredients: ['Rice', 'Tomato', 'Chicken', 'Pepper', 'Onion'],
    category: 'food',
  },
  {
    id: 'waakye',
    name: 'Waakye Special',
    price: 25.00,
    emoji: '🫘',
    image: 'https://images.unsplash.com/photo-1516714435131-44d6b6f00e3d?w=500&h=500&fit=crop',
    gradient: 'from-purple-900 to-red-900',
    rating: 4.8,
    deliveryTime: '15-20 Min',
    description: 'Traditional Ghanaian rice and beans dish served with shito, spaghetti, gari, boiled egg, and fried fish. The ultimate campus meal!',
    ingredients: ['Rice', 'Beans', 'Shito', 'Spaghetti', 'Egg'],
    category: 'food',
  },
  {
    id: 'banku-tilapia',
    name: 'Banku & Tilapia',
    price: 45.00,
    emoji: '🐟',
    image: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=500&h=500&fit=crop',
    gradient: 'from-blue-900 to-teal-800',
    rating: 4.9,
    deliveryTime: '25-30 Min',
    description: 'Fermented corn and cassava dough served with grilled tilapia and hot pepper sauce. A Ghanaian classic!',
    ingredients: ['Corn', 'Cassava', 'Tilapia', 'Pepper', 'Tomato'],
    category: 'food',
  },
  {
    id: 'fufu-soup',
    name: 'Fufu & Light Soup',
    price: 40.00,
    emoji: '🥣',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=500&h=500&fit=crop',
    gradient: 'from-amber-900 to-yellow-800',
    rating: 4.7,
    deliveryTime: '25-30 Min',
    description: 'Pounded cassava and plantain served in aromatic light soup with tender goat meat and tripe. Comfort food at its finest!',
    ingredients: ['Cassava', 'Plantain', 'Goat Meat', 'Pepper', 'Herbs'],
    category: 'food',
  },
  {
    id: 'kelewele',
    name: 'Kelewele',
    price: 15.00,
    emoji: '🍌',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&h=500&fit=crop',
    gradient: 'from-yellow-800 to-orange-700',
    rating: 4.8,
    deliveryTime: '10-15 Min',
    description: 'Spicy fried ripe plantain cubes seasoned with ginger, pepper, and anise. The perfect street food snack!',
    ingredients: ['Plantain', 'Ginger', 'Pepper', 'Anise', 'Salt'],
    category: 'food',
  },
  {
    id: 'red-red',
    name: 'Red Red & Fried Plantain',
    price: 20.00,
    emoji: '🫕',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&h=500&fit=crop',
    gradient: 'from-red-800 to-rose-900',
    rating: 4.6,
    deliveryTime: '15-20 Min',
    description: 'Black-eyed beans stewed in rich palm oil with spices, served with sweet fried plantain and gari.',
    ingredients: ['Beans', 'Palm Oil', 'Plantain', 'Gari', 'Pepper'],
    category: 'food',
  },
  {
    id: 'kenkey-fish',
    name: 'Kenkey & Fish',
    price: 30.00,
    emoji: '🌽',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=500&h=500&fit=crop',
    gradient: 'from-green-900 to-emerald-800',
    rating: 4.7,
    deliveryTime: '20-25 Min',
    description: 'Fermented corn dough wrapped in corn husks, served with fried fish, shito, and fresh pepper sauce.',
    ingredients: ['Corn', 'Fish', 'Shito', 'Pepper', 'Onion'],
    category: 'food',
  },
  {
    id: 'ampesi',
    name: 'Ampesi & Kontomire',
    price: 22.00,
    emoji: '🥬',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&h=500&fit=crop',
    gradient: 'from-green-800 to-lime-900',
    rating: 4.5,
    deliveryTime: '15-20 Min',
    description: 'Boiled plantain and cocoyam served with kontomire (taro leaf) stew, palm oil, and boiled egg.',
    ingredients: ['Plantain', 'Cocoyam', 'Kontomire', 'Palm Oil', 'Egg'],
    category: 'food',
  },
];

export const juiceItems: FoodItem[] = [
  {
    id: 'sobolo',
    name: 'Sobolo (Hibiscus)',
    price: 8.00,
    emoji: '🌺',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&h=500&fit=crop',
    gradient: 'from-rose-900 to-pink-800',
    rating: 4.9,
    deliveryTime: '10-15 Min',
    description: 'Refreshing chilled hibiscus drink infused with ginger, cloves, and pineapple. A Ghanaian favorite!',
    ingredients: ['Hibiscus', 'Ginger', 'Pineapple', 'Cloves', 'Sugar'],
    category: 'juice',
  },
  {
    id: 'brukina',
    name: 'Brukina',
    price: 10.00,
    emoji: '🥛',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&h=500&fit=crop',
    gradient: 'from-violet-900 to-purple-800',
    rating: 4.8,
    deliveryTime: '10-15 Min',
    description: 'Creamy millet and date drink blended with milk and banana. Nutritious and delicious!',
    ingredients: ['Millet', 'Dates', 'Milk', 'Banana', 'Sugar'],
    category: 'juice',
  },
  {
    id: 'asana',
    name: 'Asana (Corn Drink)',
    price: 7.00,
    emoji: '🌽',
    image: 'https://images.unsplash.com/photo-1622597467836-f3285f2139b4?w=500&h=500&fit=crop',
    gradient: 'from-yellow-900 to-amber-800',
    rating: 4.7,
    deliveryTime: '10-15 Min',
    description: 'Traditional fermented corn drink with a unique sweet and tangy flavor. Served ice cold.',
    ingredients: ['Corn', 'Ginger', 'Sugar', 'Water', 'Ice'],
    category: 'juice',
  },
  {
    id: 'coconut-water',
    name: 'Fresh Coconut Water',
    price: 12.00,
    emoji: '🥥',
    image: 'https://images.unsplash.com/photo-1536759808333-930a33517524?w=500&h=500&fit=crop',
    gradient: 'from-emerald-900 to-green-800',
    rating: 4.9,
    deliveryTime: '10-15 Min',
    description: 'Fresh young coconut water served in the shell. Naturally sweet and hydrating.',
    ingredients: ['Coconut', 'Ice'],
    category: 'juice',
  },
  {
    id: 'pito',
    name: 'Pito (Local Beer)',
    price: 6.00,
    emoji: '🍺',
    image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=500&h=500&fit=crop',
    gradient: 'from-orange-900 to-red-800',
    rating: 4.6,
    deliveryTime: '15-20 Min',
    description: 'Traditional Ghanaian fermented millet beer. Served cold in a calabash. A northern favorite!',
    ingredients: ['Millet', 'Sorghum', 'Yeast', 'Water'],
    category: 'juice',
  },
  {
    id: 'lamugbee',
    name: 'Lamugbee',
    price: 9.00,
    emoji: '🍹',
    image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?w=500&h=500&fit=crop',
    gradient: 'from-cyan-900 to-blue-800',
    rating: 4.7,
    deliveryTime: '10-15 Min',
    description: 'Refreshing millet and ginger drink from Northern Ghana. Sweet, spicy, and served cold.',
    ingredients: ['Millet', 'Ginger', 'Sugar', 'Water', 'Ice'],
    category: 'juice',
  },
];

export const dessertItems: FoodItem[] = [
  {
    id: 'bofrot',
    name: 'Bofrot (Puff Puff)',
    price: 8.00,
    emoji: '🍩',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&h=500&fit=crop',
    gradient: 'from-amber-800 to-yellow-700',
    rating: 4.8,
    deliveryTime: '10-15 Min',
    description: 'Golden fried dough balls, crispy outside and soft inside. A beloved Ghanaian street snack.',
    ingredients: ['Flour', 'Sugar', 'Yeast', 'Oil', 'Nutmeg'],
    category: 'dessert',
  },
  {
    id: 'tatale',
    name: 'Tatale (Plantain Pancakes)',
    price: 10.00,
    emoji: '🥞',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&h=500&fit=crop',
    gradient: 'from-orange-800 to-amber-700',
    rating: 4.7,
    deliveryTime: '10-15 Min',
    description: 'Sweet ripe plantain pancakes spiced with ginger and pepper. Perfect as a dessert or snack.',
    ingredients: ['Plantain', 'Ginger', 'Flour', 'Pepper', 'Oil'],
    category: 'dessert',
  },
  {
    id: 'togbei',
    name: 'Togbei (Roasted Groundnut)',
    price: 5.00,
    emoji: '🥜',
    image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=500&h=500&fit=crop',
    gradient: 'from-stone-800 to-amber-900',
    rating: 4.6,
    deliveryTime: '5-10 Min',
    description: 'Crunchy roasted groundnuts seasoned with salt. A classic Ghanaian snack enjoyed anytime.',
    ingredients: ['Groundnuts', 'Salt', 'Pepper'],
    category: 'dessert',
  },
  {
    id: 'ice-kenkey',
    name: 'Ice Kenkey',
    price: 7.00,
    emoji: '🍧',
    image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=500&h=500&fit=crop',
    gradient: 'from-pink-800 to-rose-700',
    rating: 4.9,
    deliveryTime: '10-15 Min',
    description: 'Frozen fermented corn drink blended with sugar and served ice cold. Perfect for hot days!',
    ingredients: ['Corn', 'Sugar', 'Ginger', 'Ice', 'Milk'],
    category: 'dessert',
  },
];

export const restaurant: Restaurant = {
  id: 'knust-chop-bar',
  name: 'KNUST Chop Bar',
  emoji: '🏪',
  image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&h=500&fit=crop',
  gradient: 'from-orange-800 to-red-900',
  address: 'KNUST Campus, Kumasi',
  rating: 4.9,
  deliveryTime: '20-25 Min',
  deliveryFee: 'Free Delivery',
};

export const allFoodItems = [...popularFoods, ...juiceItems, ...dessertItems];

export const restaurantList = [
  { name: 'KNUST Chop Bar', time: '20-25 Min', emoji: '🏪', gradient: 'from-orange-800 to-red-900', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&h=500&fit=crop' },
  { name: 'Africa Hall Food', time: '15-20 Min', emoji: '🍲', gradient: 'from-purple-800 to-pink-900', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&h=500&fit=crop' },
  { name: 'Unity Hall Kitchen', time: '25-30 Min', emoji: '🥘', gradient: 'from-green-800 to-emerald-900', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=500&fit=crop' },
];
