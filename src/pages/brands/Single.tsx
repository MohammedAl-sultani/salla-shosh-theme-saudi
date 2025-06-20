
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/partials/product/ProductCard';
import { Star, Filter, Grid, List } from 'lucide-react';

const BrandsSingle = () => {
  const { slug } = useParams();

  const brand = {
    name: 'آبل',
    description: 'شركة آبل الأمريكية هي شركة تقنية متعددة الجنسيات تقوم بتصميم وتطوير وبيع الإلكترونيات الاستهلاكية وبرامج الكمبيوتر والخدمات عبر الإنترنت.',
    logo: '/api/placeholder/150/80',
    banner: '/api/placeholder/1200/300',
    rating: 4.8,
    reviews: 2847,
    products: 156,
    established: '1976'
  };

  const products = [
    {
      id: 1,
      name: 'آيفون 15 برو',
      price: 4299,
      originalPrice: null,
      image: '/api/placeholder/300/300',
      rating: 4.9,
      reviews: 156,
      isNew: true,
      discount: 0
    },
    {
      id: 2,
      name: 'آيباد آير',
      price: 2199,
      originalPrice: 2499,
      image: '/api/placeholder/300/300',
      rating: 4.7,
      reviews: 89,
      isNew: false,
      discount: 12
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Brand Banner */}
      <div className="relative mb-8">
        <img
          src={brand.banner}
          alt={brand.name}
          className="w-full h-48 md:h-64 object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
          <div className="text-center text-white">
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-16 mx-auto mb-4 filter brightness-0 invert"
            />
            <h1 className="text-4xl font-bold font-cairo">{brand.name}</h1>
          </div>
        </div>
      </div>

      {/* Brand Info */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">عن العلامة التجارية</h2>
              <p className="text-gray-600 leading-relaxed">{brand.description}</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-semibold">{brand.rating}</span>
                <span className="text-gray-500">({brand.reviews} تقييم)</span>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">عدد المنتجات:</span>
                  <Badge>{brand.products}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">تأسست في:</span>
                  <span className="font-medium">{brand.established}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Products Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">منتجات {brand.name}</h2>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 ml-2" />
              فلترة
            </Button>
            <div className="flex border border-gray-200 rounded-lg">
              <Button variant="ghost" size="sm">
                <Grid className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button size="lg" variant="outline">
          تحميل المزيد من المنتجات
        </Button>
      </div>
    </div>
  );
};

export default BrandsSingle;
