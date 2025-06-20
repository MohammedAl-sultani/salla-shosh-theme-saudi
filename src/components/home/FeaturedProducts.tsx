
import React from 'react';
import ProductCard from '@/components/partials/product/ProductCard';

const products = [
  {
    id: 1,
    name: 'هاتف ذكي متطور',
    price: 1299,
    originalPrice: 1499,
    image: '/api/placeholder/300/300',
    rating: 4.5,
    reviews: 128,
    isNew: true,
    discount: 13
  },
  {
    id: 2,
    name: 'ساعة ذكية رياضية',
    price: 899,
    originalPrice: null,
    image: '/api/placeholder/300/300',
    rating: 4.8,
    reviews: 94,
    isNew: false,
    discount: 0
  },
  {
    id: 3,
    name: 'سماعات لاسلكية',
    price: 299,
    originalPrice: 399,
    image: '/api/placeholder/300/300',
    rating: 4.3,
    reviews: 67,
    isNew: false,
    discount: 25
  },
  {
    id: 4,
    name: 'جهاز كمبيوتر محمول',
    price: 2999,
    originalPrice: 3299,
    image: '/api/placeholder/300/300',
    rating: 4.6,
    reviews: 89,
    isNew: true,
    discount: 9
  }
];

const FeaturedProducts = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-cairo mb-4">المنتجات المميزة</h2>
        <p className="text-gray-600">اختيارنا الأفضل من المنتجات عالية الجودة</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
