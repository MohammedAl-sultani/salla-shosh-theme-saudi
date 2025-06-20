
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Filter } from 'lucide-react';

const BrandsIndex = () => {
  const brands = [
    {
      id: 1,
      name: 'آبل',
      slug: 'apple',
      image: '/api/placeholder/200/120',
      productsCount: 150,
      description: 'منتجات آبل الأصلية والمتطورة'
    },
    {
      id: 2,
      name: 'سامسونج',
      slug: 'samsung',
      image: '/api/placeholder/200/120',
      productsCount: 120,
      description: 'أحدث منتجات سامسونج التقنية'
    },
    {
      id: 3,
      name: 'هواوي',
      slug: 'huawei',
      image: '/api/placeholder/200/120',
      productsCount: 85,
      description: 'تقنيات هواوي المتقدمة'
    },
    {
      id: 4,
      name: 'شاومي',
      slug: 'xiaomi',
      image: '/api/placeholder/200/120',
      productsCount: 95,
      description: 'منتجات شاومي بأسعار منافسة'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold font-cairo">العلامات التجارية</h1>
        <p className="text-gray-600">{brands.length} علامة تجارية</p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="ابحث عن علامة تجارية..."
            className="w-full pl-4 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <Button variant="outline" className="md:w-auto w-full">
          <Filter className="w-4 h-4 ml-2" />
          فلترة
        </Button>
      </div>

      {/* Brands Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {brands.map((brand) => (
          <Link key={brand.id} to={`/brand/${brand.slug}`}>
            <Card className="hover-lift group">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-24 object-contain mx-auto"
                  />
                </div>
                
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {brand.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-3">{brand.description}</p>
                
                <Badge variant="secondary">
                  {brand.productsCount} منتج
                </Badge>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12">
        <div className="flex items-center gap-2">
          <Button variant="outline">السابق</Button>
          <Button>1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">التالي</Button>
        </div>
      </div>
    </div>
  );
};

export default BrandsIndex;
