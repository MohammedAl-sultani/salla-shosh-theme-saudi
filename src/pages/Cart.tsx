
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      name: 'هاتف ذكي متطور',
      price: 1299,
      quantity: 1,
      image: '/api/placeholder/100/100'
    },
    {
      id: 2,
      name: 'ساعة ذكية رياضية',
      price: 899,
      quantity: 2,
      image: '/api/placeholder/100/100'
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 50;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-md mx-auto">
          <ShoppingBag className="w-24 h-24 mx-auto text-gray-300 mb-6" />
          <h1 className="text-2xl font-bold mb-4">السلة فارغة</h1>
          <p className="text-gray-600 mb-8">لم تقم بإضافة أي منتجات إلى سلة التسوق بعد</p>
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
      <h1 className="text-3xl font-bold font-cairo mb-8">سلة التسوق</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{item.name}</h3>
                    <p className="text-primary font-bold">{item.price} ريال</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-gray-200 rounded-lg">
                      <Button variant="ghost" size="sm">
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="px-4 py-2 min-w-12 text-center">{item.quantity}</span>
                      <Button variant="ghost" size="sm">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">ملخص الطلب</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>المجموع الفرعي:</span>
                  <span>{subtotal} ريال</span>
                </div>
                <div className="flex justify-between">
                  <span>الشحن:</span>
                  <span>{shipping} ريال</span>
                </div>
                <hr />
                <div className="flex justify-between font-bold text-lg">
                  <span>المجموع:</span>
                  <span className="text-primary">{total} ريال</span>
                </div>
              </div>

              <div className="space-y-3">
                <Link to="/thank-you">
                  <Button size="lg" className="w-full btn-primary">
                    إتمام الطلب
                  </Button>
                </Link>
                <Link to="/products">
                  <Button variant="outline" size="lg" className="w-full">
                    متابعة التسوق
                  </Button>
                </Link>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2 text-green-800">
                  <Badge className="bg-green-500">شحن مجاني</Badge>
                  <span className="text-sm">للطلبات فوق 200 ريال</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
