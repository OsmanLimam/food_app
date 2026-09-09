export interface FoodItem {
  id: string;
  name: string;
  price: number;
  image: string;
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
  image: string;
  address: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: string;
}

export const IMAGES = {
  buddhaBowl: 'https://image.qwenlm.ai/generated-images/1610faee-ef07-42c7-aa82-b28e6ab54de3/_result.png',
  tortilla: 'https://image.qwenlm.ai/generated-images/edf08af1-7972-4618-9061-3284ee653c87/_result.png',
  tacos: 'https://image.qwenlm.ai/generated-images/3653af8a-92e2-4312-a128-014bca8b1276/_result.png',
  friedShrimps: 'https://image.qwenlm.ai/generated-images/fdbe6e0e-c51d-4486-9429-1c8bad068566/_result.png',
  riceShrimp: 'https://image.qwenlm.ai/generated-images/31656c42-7652-422c-91c4-20dd4ee10067/_result.png',
  orangeJuice: 'https://image.qwenlm.ai/generated-images/039b2ef9-248c-466a-839c-50b0121a72f7/_result.png',
  cheesecake: 'https://image.qwenlm.ai/generated-images/9cdba3dc-57a0-4375-bf41-7bc10fe8d7aa/_result.png',
  burger: 'https://image.qwenlm.ai/generated-images/97d7d9cb-55b8-4248-b4ab-f6168a654e19/_result.png',
  noodles: 'https://image.qwenlm.ai/generated-images/1d2c8897-10ed-4eb7-a4dd-564829e7b71b/_result.png',
  strawberryJuice: 'https://image.qwenlm.ai/generated-images/97b5dc9c-3b4c-4f33-9b9a-d4763e96f450/_result.png',
};

export const popularFoods: FoodItem[] = [
  {
    id: 'buddha-bowl',
    name: 'Buddha Bowl Rice',
    price: 22.50,
    image: IMAGES.buddhaBowl,
    rating: 4.8,
    deliveryTime: '20-25 Min',
    description: 'A nourishing bowl packed with wholesome grains, fresh vegetables, and plant-based protein.',
    ingredients: ['Brown Rice', 'Avocado', 'Chickpeas', 'Kale', 'Tahini'],
    category: 'food',
  },
  {
    id: 'tortilla-wrap',
    name: 'Tortilla Wrap',
    price: 18.99,
    image: IMAGES.tortilla,
    rating: 4.7,
    deliveryTime: '15-20 Min',
    description: 'Fresh tortilla filled with grilled chicken, crisp vegetables, and our signature sauce.',
    ingredients: ['Tortilla', 'Chicken', 'Lettuce', 'Tomato', 'Sauce'],
    category: 'food',
  },
  {
    id: 'mexican-tacos',
    name: 'Mexican Tacos',
    price: 15.99,
    image: IMAGES.tacos,
    rating: 4.9,
    deliveryTime: '20-25 Min',
    description: 'Authentic Mexican tacos with seasoned beef, fresh salsa, and homemade guacamole.',
    ingredients: ['Corn Tortilla', 'Beef', 'Salsa', 'Guacamole', 'Cilantro'],
    category: 'food',
  },
  {
    id: 'fried-shrimps',
    name: 'Fried Shrimps',
    price: 29.99,
    image: IMAGES.friedShrimps,
    rating: 4.8,
    deliveryTime: '25-30 Min',
    description: 'Crispy golden fried shrimps served with tangy cocktail sauce and fresh lemon.',
    ingredients: ['Shrimps', 'Breadcrumbs', 'Lemon', 'Cocktail Sauce', 'Herbs'],
    category: 'food',
  },
  {
    id: 'rice-shrimp',
    name: 'Rice With Green Peas And Shrimps',
    price: 45.00,
    image: IMAGES.riceShrimp,
    rating: 4.9,
    deliveryTime: '25-30 Min',
    description: 'This Shrimp, Peas and Rice dish is a family favorite! It\'s quick to cook and requires no chopping, easy prep!',
    ingredients: ['Green Peas', 'Shrimp', 'Arugula', 'Rice', 'Garlic'],
    category: 'food',
  },
  {
    id: 'stir-fried-spicy',
    name: 'Stir-Fried Spicy and Herb',
    price: 19.99,
    image: IMAGES.noodles,
    rating: 4.7,
    deliveryTime: '20-25 Min',
    description: 'Fiery stir-fried noodles with aromatic herbs, fresh vegetables, and tender chicken.',
    ingredients: ['Noodles', 'Chicken', 'Chili', 'Herbs', 'Vegetables'],
    category: 'food',
  },
  {
    id: 'noodles-chicken',
    name: 'Noodles With Chicken',
    price: 17.99,
    image: IMAGES.noodles,
    rating: 4.6,
    deliveryTime: '15-20 Min',
    description: 'Savory noodles topped with grilled chicken, green onions, and a rich broth.',
    ingredients: ['Noodles', 'Chicken', 'Green Onion', 'Broth', 'Sesame'],
    category: 'food',
  },
];

export const juiceItems: FoodItem[] = [
  {
    id: 'orange-juice',
    name: 'Fresh Orange Juice',
    price: 5.99,
    image: IMAGES.orangeJuice,
    rating: 4.8,
    deliveryTime: '20-25 Min',
    description: 'Freshly squeezed orange juice, packed with vitamin C.',
    ingredients: ['Oranges', 'Ice'],
    category: 'juice',
  },
  {
    id: 'strawberry-juice',
    name: 'Strawberry Fresh Juice',
    price: 4.99,
    image: IMAGES.strawberryJuice,
    rating: 4.8,
    deliveryTime: '20-25 Min',
    description: 'Sweet and refreshing strawberry juice made from ripe berries.',
    ingredients: ['Strawberries', 'Ice', 'Honey'],
    category: 'juice',
  },
  {
    id: 'cranberry-juice',
    name: 'Fresh Cranberry Juice',
    price: 3.99,
    image: IMAGES.orangeJuice,
    rating: 4.8,
    deliveryTime: '20-25 Min',
    description: 'Tart and refreshing cranberry juice with a hint of sweetness.',
    ingredients: ['Cranberries', 'Apple Juice', 'Ice'],
    category: 'juice',
  },
];

export const dessertItems: FoodItem[] = [
  {
    id: 'cheesecake',
    name: 'Cheesecake with Blueberry Sauce',
    price: 5.99,
    image: IMAGES.cheesecake,
    rating: 4.9,
    deliveryTime: '15-20 Min',
    description: 'Creamy New York style cheesecake topped with fresh blueberry sauce.',
    ingredients: ['Cream Cheese', 'Graham Cracker', 'Blueberries', 'Sugar'],
    category: 'dessert',
  },
  {
    id: 'granola-berries',
    name: 'Granola and Berries',
    price: 4.99,
    image: IMAGES.buddhaBowl,
    rating: 4.7,
    deliveryTime: '10-15 Min',
    description: 'Crunchy granola topped with fresh seasonal berries and honey drizzle.',
    ingredients: ['Granola', 'Mixed Berries', 'Honey', 'Yogurt'],
    category: 'dessert',
  },
  {
    id: 'mousse',
    name: 'Mousse Cold Whipping Cream',
    price: 3.99,
    image: IMAGES.cheesecake,
    rating: 4.6,
    deliveryTime: '10-15 Min',
    description: 'Light and airy chocolate mousse made with cold whipping cream.',
    ingredients: ['Whipping Cream', 'Chocolate', 'Vanilla', 'Cocoa'],
    category: 'dessert',
  },
];

export const restaurant: Restaurant = {
  id: 'burger-king',
  name: 'Burger King',
  image: IMAGES.burger,
  address: '123 Food Street, Downtown',
  rating: 4.9,
  deliveryTime: '20-25 Min',
  deliveryFee: 'Free Delivery',
};

export const allFoodItems = [...popularFoods, ...juiceItems, ...dessertItems];
