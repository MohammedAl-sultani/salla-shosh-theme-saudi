
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Package, Clock, Truck } from 'lucide-react';

const ThankYouPage = () => {
  const orderNumber = 'ORD-2024-001234';
  const orderDate = new Date().toLocaleDateString('ar-SA');

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold font-cairo text-green-700 mb-2">
            تم تأكيد طلبك بنجاح!
          </h1>
          <p className="text-lg text-gray-600">
            شكراً لك على ثقتك بنا. سنقوم بمعالجة طلبك في أسرع وقت ممكن.
          </p>
        </div>

        {/* Order Details */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6 text-right">
              <div>
                <h3 className="font-semibold mb-2">رقم الطلب</h3>
                <p className="text-primary font-mono text-lg">{orderNumber}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">تاريخ الطلب</h3>
                <p className="text-gray-600">{orderDate}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Order Status Steps */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-6">حالة الطلب</h3>
            <div className="flex justify-between items-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white mb-2">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <span className="text-sm text-green-600 font-medium">تم التأكيد</span>
              </div>
              
              <div className="flex-1 h-0.5 bg-gray-200 mx-4"></div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 mb-2">
                  <Package className="w-6 h-6" />
                </div>
                <span className="text-sm text-gray-400">قيد التحضير</span>
              </div>
              
              <div className="flex-1 h-0.5 bg-gray-200 mx-4"></div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 mb-2">
                  <Truck className="w-6 h-6" />
                </div>
                <span className="text-sm text-gray-400">قيد التوصيل</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Estimated Delivery */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Clock className="w-6 h-6 text-blue-500" />
            <h3 className="font-semibold text-blue-800">موعد التسليم المتوقع</h3>
          </div>
          <p className="text-blue-700 text-lg font-medium">
            خلال 2-3 أيام عمل
          </p>
          <p className="text-blue-600 text-sm mt-2">
            سيتم إرسال رسالة نصية عند شحن الطلب
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/customer/orders">
            <Button size="lg" className="btn-primary">
              تتبع الطلب
            </Button>
          </Link>
          <Link to="/products">
            <Button variant="outline" size="lg">
              متابعة التسوق
            </Button>
          </Link>
        </div>

        {/* Contact Info */}
        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-3">هل تحتاج مساعدة؟</h3>
          <p className="text-gray-600 mb-4">
            فريق خدمة العملاء لدينا متاح للمساعدة في أي استفسار
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline">
              اتصل بنا: 966-50-123-4567
            </Button>
            <Button variant="outline">
              البريد الإلكتروني: support@shoshshop.com
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
