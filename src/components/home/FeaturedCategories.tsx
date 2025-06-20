
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  { id: 1, name: 'الأزياء', image: '/api/placeholder/300/200', count: '250+ منتج' },
  { id: 2, name: 'الإلكترونيات', image: '/api/placeholder/300/200', count: '180+ منتج' },
  { id: 3, name: 'المنزل والحديقة', image: '/api/placeholder/300/200', count: '320+ منتج' },
  { id: 4, name: 'الرياضة', image: '/api/placeholder/300/200', count: '150+ منتج' },
  { id: 5, name: 'الجمال والعناية', image: '/api/placeholder/300/200', count: '200+ منتج' },
  { id: 6, name: 'الكتب', image: '/api/placeholder/300/200', count: '100+ منتج' },
];

const FeaturedCategories = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-cairo mb-4">تسوق حسب الفئة</h2>
        <p className="text-gray-600">اكتشف مجموعة واسعة من الفئات المختلفة</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category) => (
          <Link key={category.id} to={`/products?category=${category.id}`}>
            <Card className="group hover-lift card-shadow">
              <CardContent className="p-4 text-center">
                <div className="relative overflow-hidden rounded-lg mb-3">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-24 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
