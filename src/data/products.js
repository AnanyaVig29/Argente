export const products = [
  {
    id: 1,
    name: 'Classic Linen Shirt',
    category: 'shirts',
    price: 2499,
    originalPrice: 3499,
    image: 'https://static.zara.net/assets/public/d162/72f3/baae4f2e8a23/534ffd0635cb/05070904052-p/05070904052-p.jpg?ts=1766420601592&w=1024',
    images: [
      'https://static.zara.net/assets/public/6b64/f6cf/52cc4dc395b2/bca2799a83ee/05070904052-e1/05070904052-e1.jpg?ts=1766058285794&w=750',
      'https://static.zara.net/assets/public/067d/a504/1efc443191e3/07690c42af94/05070904052-a1/05070904052-a1.jpg?ts=1766420600107&w=1125',
      'https://static.zara.net/assets/public/50bf/3e1d/7f64425f8135/e1a2d611e5b1/05070904052-a2/05070904052-a2.jpg?ts=1766420599455&w=750',
      'https://static.zara.net/assets/public/7f93/06db/c32c43028a8a/8f9ab36062de/05070904052-a3/05070904052-a3.jpg?ts=1766420603315&w=750'
    ],
    description: 'Premium linen shirt with contemporary fit',
    longDescription: 'Experience unparalleled comfort with our Classic Linen Shirt. Made from 100% premium European flax linen, this shirt offers excellent breathability and a sophisticated drape. The contemporary fit strikes the perfect balance between relaxed and refined, making it ideal for both casual and semi-formal occasions.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Beige', 'White', 'Brown'],
    stock: 45,
    rating: 4.5,
    reviewCount: 127,
    features: [
      '100% Premium European Linen',
      'Contemporary Fit',
      'Breathable & Lightweight',
      'Easy Care Machine Washable',
      'Wrinkle-Resistant Finish'
    ],
    care: 'Machine wash cold, tumble dry low, warm iron if needed'
  },
  {
    id: 2,
    name: 'Cotton Casual Shirt',
    category: 'shirts',
    price: 1899,
    originalPrice: 2499,
    image: 'https://www.simplikurta.com/cdn/shop/files/20_2_-Photoroom.png?v=1723100620',
    images: [
      'https://www.simplikurta.com/cdn/shop/files/20_2_-Photoroom.png?v=1723100620',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTDouIg20Wv9aSCZziN8zbnVb69YhwUy4SM0SCkq0Yynkr6xdXZONwiovuoPV02BcPogAByjvtbDNvdfmn6JycQ6tEe7Cn42JdNlrWmi7YXyYHdGuLKkliBBQ',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSGqkb2pNBbcdmusOfPOLJoXf9Y-f8eAc5EapcR4ADC_j6lyATCwMucnUHh4n_RdUUlXi0O3HWGa7e1nOo-DWKxLQK7f4F5GRHpuurEsXk'
    ],
    description: 'Breathable cotton shirt for everyday wear',
    longDescription: 'The perfect everyday shirt crafted from premium long-staple cotton. This casual shirt features superior breathability and softness that only gets better with each wash.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Tan', 'Cream', 'Light Brown'],
    stock: 62,
    rating: 4.7,
    reviewCount: 89,
    features: [
      'Premium Cotton Fabric',
      'Regular Fit',
      'Soft & Breathable',
      'Fade-Resistant Colors'
    ],
    care: 'Machine wash cold, hang dry recommended'
  },
  {
    id: 3,
    name: 'Premium Oxford Shirt',
    category: 'shirts',
    price: 2799,
    originalPrice: 3299,
    image: 'https://image.hm.com/assets/hm/b1/85/b1859f2c696ac0614ca5e3dbf93fcd1158b1be9c.jpg?imwidth=2160',
    images: [
      'https://image.hm.com/assets/hm/b1/85/b1859f2c696ac0614ca5e3dbf93fcd1158b1be9c.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/be/46/be4693a71ab2433d8f1a6e434e6e0de8e0a368d1.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/ca/84/ca8423bef1118e7149d56dec14cb734adc13915e.jpg?imwidth=2160'
    ],
    description: 'Sophisticated oxford weave for formal occasions',
    longDescription: 'Elevate your formal wardrobe with our Premium Oxford Shirt. The classic oxford weave provides texture and durability while maintaining a refined appearance.',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Beige', 'Khaki'],
    stock: 56,
    rating: 4.8,
    reviewCount: 145,
    features: [
      'Oxford Weave Construction',
      'Wrinkle-Free Technology',
      'Button-Down Collar',
      'Professional Finish'
    ],
    care: 'Dry clean recommended or machine wash cold'
  },
  {
    id: 4,
    name: 'Basic Cotton T-Shirt',
    category: 't-shirts',
    price: 899,
    originalPrice: 1199,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80'
    ],
    description: 'Comfortable everyday essential',
    longDescription: 'Your wardrobe staple made from premium combed cotton. Soft, comfortable, and built to last through countless wears and washes.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Beige', 'Brown', 'Cream', 'White'],
    stock: 120,
    rating: 4.6,
    reviewCount: 234,
    features: [
      'Combed Cotton Fabric',
      'Classic Crew Neck',
      'Reinforced Stitching',
      'Pre-Shrunk'
    ],
    care: 'Machine wash warm, tumble dry low'
  },
  {
    id: 5,
    name: 'V-Neck Premium Tee',
    category: 't-shirts',
    price: 1099,
    originalPrice: 1499,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80'
    ],
    description: 'Soft premium cotton with modern v-neck',
    longDescription: 'Contemporary v-neck design meets premium quality. Perfect for layering or wearing solo.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Sand', 'Taupe'],
    stock: 85,
    rating: 4.5,
    reviewCount: 98,
    features: [
      'Soft Premium Cotton',
      'Modern V-Neck Cut',
      'Slim Fit Design',
      'Durable Construction'
    ],
    care: 'Machine wash cold, lay flat to dry'
  },
  {
    id: 6,
    name: 'Henley Style T-Shirt',
    category: 't-shirts',
    price: 1299,
    originalPrice: 1799,
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80'
    ],
    description: 'Classic henley style with button detail',
    longDescription: 'A timeless henley design featuring quality button details. Versatile enough for any casual occasion.',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Beige', 'Brown'],
    stock: 78,
    rating: 4.7,
    reviewCount: 112,
    features: [
      'Classic Henley Style',
      'Quality Button Placket',
      'Comfortable Fit',
      'Versatile Design'
    ],
    care: 'Machine wash cold, tumble dry low'
  },
  {
    id: 7,
    name: 'Traditional Cotton Kurta',
    category: 'kurtas',
    price: 3299,
    originalPrice: 4299,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&q=80',
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80'
    ],
    description: 'Handcrafted traditional kurta',
    longDescription: 'Embrace tradition with our handcrafted cotton kurta. Each piece is carefully crafted by skilled artisans to bring you authentic quality and timeless style.',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Cream', 'Beige', 'Off-White'],
    stock: 32,
    rating: 4.9,
    reviewCount: 178,
    features: [
      'Handcrafted Quality',
      'Pure Cotton Fabric',
      'Traditional Design',
      'Comfortable Fit',
      'Artisan Made'
    ],
    care: 'Hand wash or gentle machine wash, line dry'
  },
  {
    id: 8,
    name: 'Embroidered Kurta',
    category: 'kurtas',
    price: 4599,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&q=80',
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80',
      'https://images.unsplash.com/photo-1622543925917-763c34f1f0e4?w=800&q=80'
    ],
    description: 'Elegant kurta with subtle embroidery',
    longDescription: 'Exquisite embroidery work adorns this elegant kurta. Perfect for festive occasions and celebrations.',
    sizes: ['M', 'L', 'XL'],
    colors: ['Beige', 'Golden Beige'],
    stock: 24,
    rating: 4.8,
    reviewCount: 92,
    features: [
      'Hand Embroidered Details',
      'Premium Fabric',
      'Festive Ready',
      'Elegant Design'
    ],
    care: 'Dry clean only'
  },
  {
    id: 9,
    name: 'Linen Blend Kurta',
    category: 'kurtas',
    price: 3799,
    originalPrice: 4799,
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&q=80'
    ],
    description: 'Comfortable linen blend for all-day wear',
    longDescription: 'Experience all-day comfort with our linen blend kurta. The perfect balance of breathability and style.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Natural', 'Sand', 'Light Brown'],
    stock: 48,
    rating: 4.6,
    reviewCount: 134,
    features: [
      'Linen Cotton Blend',
      'Breathable & Light',
      'All-Day Comfort',
      'Easy Care'
    ],
    care: 'Machine wash cold, hang dry'
  },
  {
    id: 10,
    name: 'Slim Fit Formal Shirt',
    category: 'shirts',
    price: 2199,
    originalPrice: 2999,
    image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&q=80',
      'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800&q=80',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80'
    ],
    description: 'Modern slim fit for a sharp look',
    longDescription: 'Cut to perfection, this slim fit formal shirt offers a contemporary silhouette for the modern professional.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Tan', 'Beige'],
    stock: 54,
    rating: 4.7,
    reviewCount: 103,
    features: [
      'Slim Fit Cut',
      'Non-Iron Fabric',
      'Professional Look',
      'Wrinkle Free'
    ],
    care: 'Machine wash cold, hang dry'
  },
  {
    id: 11,
    name: 'Graphic Print T-Shirt',
    category: 't-shirts',
    price: 1499,
    originalPrice: 1999,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80'
    ],
    description: 'Contemporary design with artistic graphics',
    longDescription: 'Express your style with our artistic graphic print t-shirt. Unique designs that make a statement.',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Beige', 'Cream'],
    stock: 72,
    rating: 4.4,
    reviewCount: 86,
    features: [
      'Artistic Graphics',
      'Quality Print',
      'Comfortable Fit',
      'Fade-Resistant'
    ],
    care: 'Machine wash inside out, tumble dry low'
  },
  {
    id: 12,
    name: 'Designer Kurta Set',
    category: 'kurtas',
    price: 5499,
    originalPrice: 7499,
    image: 'https://images.unsplash.com/photo-1622543925917-763c34f1f0e4?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1622543925917-763c34f1f0e4?w=800&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&q=80',
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80'
    ],
    description: 'Premium designer kurta with churidar',
    longDescription: 'Our premium designer kurta set is the epitome of elegance. Complete with matching churidar, this set is perfect for weddings and special occasions.',
    sizes: ['M', 'L', 'XL'],
    colors: ['Ivory', 'Beige', 'Gold'],
    stock: 18,
    rating: 4.9,
    reviewCount: 67,
    features: [
      'Designer Collection',
      'Complete Set with Churidar',
      'Premium Fabric',
      'Exclusive Design',
      'Wedding Ready'
    ],
    care: 'Dry clean only'
  }
];

// Product Reviews Data
export const reviews = {
  1: [
    { id: 1, name: 'Rajesh Kumar', rating: 5, date: '2026-01-20', comment: 'Excellent quality linen! Very comfortable and looks premium.' },
    { id: 2, name: 'Amit Singh', rating: 4, date: '2026-01-15', comment: 'Great shirt, slightly expensive but worth it.' },
    { id: 3, name: 'Priya Sharma', rating: 5, date: '2026-01-10', comment: 'Bought this for my husband. He loves it!' },
    { id: 4, name: 'Vikram Malhotra', rating: 5, date: '2026-01-05', comment: 'Best linen shirt I have ever owned. Highly recommended!' }
  ],
  2: [
    { id: 1, name: 'Neha Gupta', rating: 5, date: '2026-01-22', comment: 'Perfect for daily wear. Great value for money!' },
    { id: 2, name: 'Karan Kapoor', rating: 4, date: '2026-01-16', comment: 'Nice fabric, fits well. Will buy again.' }
  ],
  4: [
    { id: 1, name: 'Sanjay Reddy', rating: 5, date: '2026-01-24', comment: 'Best basic t-shirt. Ordered 3 more!' },
    { id: 2, name: 'Anjali Nair', rating: 4, date: '2026-01-19', comment: 'Soft and comfortable. Good quality.' },
    { id: 3, name: 'Rohit Sharma', rating: 5, date: '2026-01-14', comment: 'Excellent product at this price point.' }
  ],
  7: [
    { id: 1, name: 'Suresh Patel', rating: 5, date: '2026-01-18', comment: 'Beautiful kurta! The craftsmanship is amazing.' },
    { id: 2, name: 'Deepak Mehta', rating: 5, date: '2026-01-12', comment: 'Perfect for festivals. Very comfortable.' },
    { id: 3, name: 'Ramesh Iyer', rating: 5, date: '2026-01-08', comment: 'Traditional and elegant. Received many compliments!' }
  ],
  12: [
    { id: 1, name: 'Arjun Desai', rating: 5, date: '2026-01-25', comment: 'Stunning designer piece! Worth every penny.' },
    { id: 2, name: 'Varun Khanna', rating: 5, date: '2026-01-21', comment: 'Wore it to my brother\'s wedding. Everyone loved it!' },
    { id: 3, name: 'Aditya Joshi', rating: 4, date: '2026-01-17', comment: 'Beautiful set but runs slightly small. Size up!' }
  ]
};

export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'shirts', name: 'Shirts', count: products.filter(p => p.category === 'shirts').length },
  { id: 't-shirts', name: 'T-Shirts', count: products.filter(p => p.category === 't-shirts').length },
  { id: 'kurtas', name: 'Kurtas', count: products.filter(p => p.category === 'kurtas').length }
];
