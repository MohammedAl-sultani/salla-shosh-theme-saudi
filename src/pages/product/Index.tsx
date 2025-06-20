
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Grid, List } from 'lucide-react';
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
  // Add more products here...
];

const categories = [
  'جميع الفئات',
  'الإلكترونيات',
  'الأزياء',
  'المنزل والحديقة',
  'الرياضة',
  'الجمال والعناية'
];

const ProductIndex = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('جميع الفئات');

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-cairo mb-4">جميع المنتجات</h1>
        <p className="text-gray-600">اكتشف مجموعتنا الواسعة من المنتجات عالية الجودة</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">تصفية المنتجات</h3>
              
              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">الفئات</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-right py-2 px-3 rounded transition-colors ${
                        selectedCategory === category
                          ? 'bg-primary text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">نطاق السعر</h4>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <Input placeholder="من" type="number" />
                    <Input placeholder="إلى" type="number" />
                  </div>
                  <Button variant="outline" className="w-full">تطبيق</Button>
                </div>
              </div>

              {/* Brands */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">الماركات</h4>
                <div className="space-y-2">
                  {['سامسونج', 'آبل', 'هواوي', 'شاومي'].map((brand) => (
                    <label key={brand} className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>{brand}</span>
                    </label>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <div className="flex items-center gap-4">
              <span className="text-gray-600">عرض 1-12 من 48 منتج</span>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <Input placeholder="البحث في المنتجات..." className="pr-10" />
                <Search className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>

              {/* Sort */}
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="ترتيب حسب" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">الأحدث</SelectItem>
                  <SelectItem value="price-low">السعر: من الأقل إلى الأعلى</SelectItem>
                  <SelectItem value="price-high">السعر: من الأعلى إلى الأقل</SelectItem>
                  <SelectItem value="rating">الأعلى تقييماً</SelectItem>
                </SelectContent>
              </Select>

              {/* View Mode */}
              <div className="flex border rounded">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
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
      </div>
    </div>
  );
};

export default ProductIndex;
