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
    image: 'https://image.qwenlm.ai/generated-images/84ba83a9-cdea-469d-96da-2bade65a1c77/_result.png',
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
    image: 'https://image.qwenlm.ai/generated-images/3f007656-a862-4cff-86b1-8ef3dee0662b/_result.png',
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
    image: 'https://image.qwenlm.ai/generated-images/b6ac4fa4-c666-4a55-ae73-2d83a4087b0f/_result.png',
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
    image: 'https://image.qwenlm.ai/generated-images/eb34d2da-fd84-45a8-8f27-d3e3abdb40b6/_result.png',
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
    image: 'https://image.qwenlm.ai/generated-images/1c02503b-7593-429d-83f9-be612b947c5d/_result.png',
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
    image: 'https://image.qwenlm.ai/generated-images/a39041b3-da51-4f81-b3da-53fd6880d40d/_result.png',
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
    image: 'https://image.qwenlm.ai/generated-images/fb40edfe-facd-4289-82b6-5b8682861b39/_result.png',
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
    image: 'https://image.qwenlm.ai/generated-images/84ba83a9-cdea-469d-96da-2bade65a1c77/_result.png',
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
    image: 'https://image.qwenlm.ai/generated-images/85de3292-415d-40f2-8682-7462142de1f2/_result.png',
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
    image: 'https://image.qwenlm.ai/generated-images/827f9771-5ce4-4524-bf0a-3dd8c01b6025/_result.png',
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
    image: 'https://image.qwenlm.ai/generated-images/85de3292-415d-40f2-8682-7462142de1f2/_result.png',
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
    image: 'https://image.qwenlm.ai/generated-images/827f9771-5ce4-4524-bf0a-3dd8c01b6025/_result.png',
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
    image: 'https://image.qwenlm.ai/generated-images/85de3292-415d-40f2-8682-7462142de1f2/_result.png',
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
    image: 'https://image.qwenlm.ai/generated-images/827f9771-5ce4-4524-bf0a-3dd8c01b6025/_result.png',
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
    image: 'https://image.qwenlm.ai/generated-images/9dd3be2e-cd77-4590-9ef1-db713789fc58/_result.png',
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
    image: 'https://image.qwenlm.ai/generated-images/1c02503b-7593-429d-83f9-be612b947c5d/_result.png',
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
    image: 'https://image.qwenlm.ai/generated-images/9dd3be2e-cd77-4590-9ef1-db713789fc58/_result.png',
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
    image: 'https://image.qwenlm.ai/generated-images/85de3292-415d-40f2-8682-7462142de1f2/_result.png',
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
  image: 'https://image.qwenlm.ai/generated-images/84ba83a9-cdea-469d-96da-2bade65a1c77/_result.png',
  gradient: 'from-orange-800 to-red-900',
  address: 'KNUST Campus, Kumasi',
  rating: 4.9,
  deliveryTime: '20-25 Min',
  deliveryFee: 'Free Delivery',
};

export const allFoodItems = [...popularFoods, ...juiceItems, ...dessertItems];

export const restaurantList = [
  { name: 'KNUST Chop Bar', time: '20-25 Min', emoji: '🏪', gradient: 'from-orange-800 to-red-900', image: 'https://image.qwenlm.ai/generated-images/84ba83a9-cdea-469d-96da-2bade65a1c77/_result.png' },
  { name: 'Africa Hall Food', time: '15-20 Min', emoji: '🍲', gradient: 'from-purple-800 to-pink-900', image: 'https://image.qwenlm.ai/generated-images/3f007656-a862-4cff-86b1-8ef3dee0662b/_result.png' },
  { name: 'Unity Hall Kitchen', time: '25-30 Min', emoji: '🥘', gradient: 'from-green-800 to-emerald-900', image: 'https://image.qwenlm.ai/generated-images/b6ac4fa4-c666-4a55-ae73-2d83a4087b0f/_result.png' },
];
