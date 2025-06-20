
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bell, Package, Heart, Star, Gift, Settings } from 'lucide-react';

const CustomerNotifications = () => {
  const notifications = [
    {
      id: 1,
      type: 'order',
      title: 'تم شحن طلبك',
      message: 'طلبك رقم #ORD-2024-001234 في الطريق إليك',
      time: '2024-01-15T10:30:00',
      read: false,
      icon: Package
    },
    {
      id: 2,
      type: 'offer',
      title: 'عرض خاص لك',
      message: 'خصم 25% على منتجاتك المفضلة - صالح لمدة 24 ساعة',
      time: '2024-01-14T15:45:00',
      read: false,
      icon: Gift
    },
    {
      id: 3,
      type: 'wishlist',
      title: 'انخفض سعر منتج في قائمة أمنياتك',
      message: 'هاتف ذكي متطور أصبح بسعر 1299 ريال بدلاً من 1499',
      time: '2024-01-13T09:15:00',
      read: true,
      icon: Heart
    },
    {
      id: 4,
      type: 'review',
      title: 'تقييم منتجك',
      message: 'شاركنا رأيك في المنتج الذي اشتريته مؤخراً',
      time: '2024-01-12T14:20:00',
      read: true,
      icon: Star
    }
  ];

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'order':
        return 'bg-blue-100 text-blue-800';
      case 'offer':
        return 'bg-green-100 text-green-800';
      case 'wishlist':
        return 'bg-purple-100 text-purple-800';
      case 'review':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatTime = (time: string) => {
    const date = new Date(time);
    const now = new Date();
    const diffHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffHours < 1) return 'الآن';
    if (diffHours < 24) return `منذ ${diffHours} ساعة`;
    return date.toLocaleDateString('ar-SA');
  };

  if (notifications.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-md mx-auto">
          <Bell className="w-24 h-24 mx-auto text-gray-300 mb-6" />
          <h1 className="text-2xl font-bold mb-4">لا توجد إشعارات</h1>
          <p className="text-gray-600">ستظهر إشعاراتك هنا عند توفرها</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold font-cairo">الإشعارات</h1>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            تحديد الكل كمقروء
          </Button>
          <Button variant="ghost" size="sm">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => {
          const IconComponent = notification.icon;
          
          return (
            <Card key={notification.id} className={`${!notification.read ? 'ring-2 ring-blue-100' : ''}`}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${getNotificationColor(notification.type)}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold">{notification.title}</h3>
                      <div className="flex items-center gap-2">
                        {!notification.read && (
                          <Badge className="bg-blue-500 text-white">جديد</Badge>
                        )}
                        <span className="text-sm text-gray-500">
                          {formatTime(notification.time)}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-3">{notification.message}</p>
                    
                    {!notification.read && (
                      <Button size="sm" variant="outline">
                        تحديد كمقروء
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Load More */}
      <div className="text-center mt-8">
        <Button variant="outline">
          تحميل المزيد من الإشعارات
        </Button>
      </div>
    </div>
  );
};

export default CustomerNotifications;
