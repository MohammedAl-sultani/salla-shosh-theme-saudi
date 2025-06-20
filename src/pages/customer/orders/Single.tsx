
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Package, Truck, CheckCircle, Clock } from 'lucide-react';

const CustomerOrdersSingle = () => {
  const { id } = useParams();

  const order = {
    id: 'ORD-2024-001234',
    date: '2024-01-15',
    status: 'قيد التوصيل',
    total: 1549,
    shipping: 50,
    tax: 99,
    subtotal: 1400,
    trackingNumber: 'TRK123456789',
    estimatedDelivery: '2024-01-18',
    shippingAddress: {
      name: 'أحمد محمد',
      phone: '+966501234567',
      address: 'شارع الملك فهد، الرياض 12345',
      city: 'الرياض',
      country: 'المملكة العربية السعودية'
    },
    items: [
      {
        id: 1,
        name: 'هاتف ذكي متطور',
        price: 1299,
        quantity: 1,
        image: '/api/placeholder/100/100'
      },
      {
        id: 2,
        name: 'غطاء واقي للهاتف',
        price: 99,
        quantity: 1,
        image: '/api/placeholder/100/100'
      }
    ]
  };

  const orderSteps = [
    { name: 'تم التأكيد', completed: true, icon: CheckCircle },
    { name: 'قيد التحضير', completed: true, icon: Package },
    { name: 'قيد التوصيل', completed: true, icon: Truck, active: true },
    { name: 'تم التوصيل', completed: false, icon: CheckCircle }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
        <Link to="/customer/profile" className="hover:text-primary">حسابي</Link>
        <ArrowRight className="w-4 h-4" />
        <Link to="/customer/orders" className="hover:text-primary">طلباتي</Link>
        <ArrowRight className="w-4 h-4" />
        <span>طلب #{order.id}</span>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Order Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Order Header */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">طلب #{order.id}</CardTitle>
                  <p className="text-gray-600 mt-2">
                    تاريخ الطلب: {new Date(order.date).toLocaleDateString('ar-SA')}
                  </p>
                </div>
                <Badge className="bg-blue-500 text-white">
                  <Truck className="w-4 h-4 ml-2" />
                  {order.status}
                </Badge>
              </div>
            </CardHeader>
          </Card>

          {/* Order Progress */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-6">حالة الطلب</h3>
              <div className="flex justify-between items-center">
                {orderSteps.map((step, index) => (
                  <React.Fragment key={step.name}>
                    <div className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        step.completed ? 'bg-green-500 text-white' : 
                        step.active ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-400'
                      }`}>
                        <step.icon className="w-6 h-6" />
                      </div>
                      <span className={`text-sm mt-2 ${step.active ? 'font-semibold' : ''}`}>
                        {step.name}
                      </span>
                    </div>
                    {index < orderSteps.length - 1 && (
                      <div className={`flex-1 h-0.5 mx-4 ${
                        orderSteps[index + 1].completed ? 'bg-green-500' : 'bg-gray-200'
                      }`}></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Order Items */}
          <Card>
            <CardHeader>
              <CardTitle>عناصر الطلب</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 pb-4 border-b border-gray-100 last:border-b-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-gray-600">الكمية: {item.quantity}</p>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-primary">{item.price} ريال</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Order Summary */}
          <Card>
            <CardHeader>
              <CardTitle>ملخص الطلب</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span>المجموع الفرعي:</span>
                <span>{order.subtotal} ريال</span>
              </div>
              <div className="flex justify-between">
                <span>الشحن:</span>
                <span>{order.shipping} ريال</span>
              </div>
              <div className="flex justify-between">
                <span>الضريبة:</span>
                <span>{order.tax} ريال</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg">
                <span>المجموع:</span>
                <span className="text-primary">{order.total} ريال</span>
              </div>
            </CardContent>
          </Card>

          {/* Shipping Info */}
          <Card>
            <CardHeader>
              <CardTitle>معلومات الشحن</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="font-semibold">{order.shippingAddress.name}</p>
                <p className="text-gray-600">{order.shippingAddress.phone}</p>
              </div>
              <div>
                <p className="text-gray-600">{order.shippingAddress.address}</p>
                <p className="text-gray-600">{order.shippingAddress.city}, {order.shippingAddress.country}</p>
              </div>
              
              {order.trackingNumber && (
                <div className="pt-3 border-t">
                  <p className="text-sm text-gray-600">رقم التتبع:</p>
                  <p className="font-mono text-sm font-semibold">{order.trackingNumber}</p>
                </div>
              )}
              
              <div className="pt-3 border-t">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span className="text-gray-600">موعد التسليم المتوقع:</span>
                </div>
                <p className="font-semibold text-blue-600">
                  {new Date(order.estimatedDelivery).toLocaleDateString('ar-SA')}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="space-y-3">
            <Button className="w-full btn-primary">
              تتبع الطلب
            </Button>
            <Button variant="outline" className="w-full">
              تحميل الفاتورة
            </Button>
            <Button variant="outline" className="w-full">
              إعادة الطلب
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerOrdersSingle;
