
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/partials/product/ProductCard';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingBag } from 'lucide-react';

const CustomerWishlist = () => {
  const wishlistItems = [
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
    }
  ];

  if (wishlistItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-md mx-auto">
          <Heart className="w-24 h-24 mx-auto text-gray-300 mb-6" />
          <h1 className="text-2xl font-bold mb-4">قائمة الأمنيات فارغة</h1>
          <p className="text-gray-600 mb-8">لم تقم بإضافة أي منتجات إلى قائمة أمنياتك بعد</p>
          <Link to="/products">
            <Button size="lg" className="btn-primary">
              تسوق الآن
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold font-cairo">قائمة أمنياتي</h1>
        <p className="text-gray-600">{wishlistItems.length} منتج</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlistItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/products">
          <Button size="lg" variant="outline">
            <ShoppingBag className="w-5 h-5 ml-2" />
            إضافة المزيد من المنتجات
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CustomerWishlist;
