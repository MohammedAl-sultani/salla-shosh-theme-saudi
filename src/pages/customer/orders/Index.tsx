
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Package, Eye, Truck, CheckCircle } from 'lucide-react';

const CustomerOrdersIndex = () => {
  const orders = [
    {
      id: 'ORD-2024-001234',
      date: '2024-01-15',
      status: 'تم التوصيل',
      statusColor: 'bg-green-500',
      total: 1549,
      items: 2,
      image: '/api/placeholder/60/60'
    },
    {
      id: 'ORD-2024-001233',
      date: '2024-01-10',
      status: 'قيد التوصيل',
      statusColor: 'bg-blue-500',
      total: 899,
      items: 1,
      image: '/api/placeholder/60/60'
    },
    {
      id: 'ORD-2024-001232',
      date: '2024-01-05',
      status: 'قيد التحضير',
      statusColor: 'bg-yellow-500',
      total: 299,
      items: 1,
      image: '/api/placeholder/60/60'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'تم التوصيل':
        return <CheckCircle className="w-5 h-5" />;
      case 'قيد التوصيل':
        return <Truck className="w-5 h-5" />;
      default:
        return <Package className="w-5 h-5" />;
    }
  };

  if (orders.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-md mx-auto">
          <Package className="w-24 h-24 mx-auto text-gray-300 mb-6" />
          <h1 className="text-2xl font-bold mb-4">لا توجد طلبات</h1>
          <p className="text-gray-600 mb-8">لم تقم بإجراء أي طلبات بعد</p>
          <Link to="/products">
            <Button size="lg" className="btn-primary">
              ابدأ التسوق
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold font-cairo mb-8">طلباتي</h1>

      <div className="space-y-6">
        {orders.map((order) => (
          <Card key={order.id} className="hover-lift">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={order.image}
                    alt="صورة الطلب"
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg">طلب #{order.id}</h3>
                      <Badge className={`${order.statusColor} text-white`}>
                        {getStatusIcon(order.status)}
                        <span className="mr-2">{order.status}</span>
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>تاريخ الطلب: {new Date(order.date).toLocaleDateString('ar-SA')}</span>
                      <span>عدد الأصناف: {order.items}</span>
                      <span className="font-semibold text-primary">{order.total} ريال</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Link to={`/customer/orders/${order.id}`}>
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 ml-2" />
                      عرض التفاصيل
                    </Button>
                  </Link>
                  
                  {order.status === 'تم التوصيل' && (
                    <Button size="sm" className="btn-primary">
                      إعادة الطلب
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
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

export default CustomerOrdersIndex;
