
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, Heart, ShoppingCart, Share2, Minus, Plus } from 'lucide-react';

const ProductSingle = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 1,
    name: 'هاتف ذكي متطور بكاميرا عالية الدقة',
    price: 1299,
    originalPrice: 1499,
    rating: 4.5,
    reviews: 128,
    description: 'هاتف ذكي متطور يوفر تجربة استخدام استثنائية مع كاميرا عالية الدقة وأداء ممتاز',
    features: [
      'شاشة OLED بحجم 6.7 بوصة',
      'كاميرا خلفية 108 ميجابكسل',
      'معالج سريع ثماني النواة',
      'ذاكرة تخزين 256 جيجابايت',
      'بطارية 5000 مللي أمبير'
    ],
    images: [
      '/api/placeholder/600/600',
      '/api/placeholder/600/600',
      '/api/placeholder/600/600',
      '/api/placeholder/600/600'
    ],
    colors: ['أسود', 'أبيض', 'أزرق', 'ذهبي'],
    sizes: ['64GB', '128GB', '256GB', '512GB']
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-96 lg:h-[600px] object-cover rounded-lg"
            />
            <Badge className="absolute top-4 right-4 bg-red-500 text-white">
              خصم 13%
            </Badge>
          </div>
          
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`border-2 rounded-lg overflow-hidden ${
                  selectedImage === index ? 'border-primary' : 'border-gray-200'
                }`}
              >
                <img
                  src={image}
                  alt={`صورة ${index + 1}`}
                  className="w-full h-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold font-cairo mb-4">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="text-sm text-gray-600 mr-2">({product.reviews} تقييم)</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-primary">{product.price} ريال</span>
              <span className="text-xl text-gray-500 line-through">{product.originalPrice} ريال</span>
              <Badge className="bg-green-100 text-green-800">توفر 200 ريال</Badge>
            </div>
          </div>

          {/* Colors */}
          <div>
            <h3 className="font-semibold mb-3">اللون:</h3>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className="px-4 py-2 border border-gray-200 rounded-lg hover:border-primary transition-colors"
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Storage */}
          <div>
            <h3 className="font-semibold mb-3">سعة التخزين:</h3>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border border-gray-200 rounded-lg hover:border-primary transition-colors"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <h3 className="font-semibold mb-3">الكمية:</h3>
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-gray-200 rounded-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="px-4 py-2 min-w-12 text-center">{quantity}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <span className="text-green-600 text-sm">متوفر في المخزون</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button size="lg" className="w-full btn-primary text-lg py-3">
              <ShoppingCart className="w-5 h-5 ml-2" />
              إضافة إلى السلة
            </Button>
            
            <div className="flex gap-3">
              <Button variant="outline" size="lg" className="flex-1">
                <Heart className="w-5 h-5 ml-2" />
                إضافة للمفضلة
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                <Share2 className="w-5 h-5 ml-2" />
                مشاركة
              </Button>
            </div>
          </div>

          {/* Product Features */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">المواصفات:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-16">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">الوصف</TabsTrigger>
            <TabsTrigger value="specifications">المواصفات</TabsTrigger>
            <TabsTrigger value="reviews">التقييمات</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium">{feature.split(':')[0] || feature}</span>
                      <span className="text-gray-600">{feature.split(':')[1] || ''}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="text-center text-gray-500">
                  لا توجد تقييمات حتى الآن. كن أول من يقيم هذا المنتج!
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductSingle;
