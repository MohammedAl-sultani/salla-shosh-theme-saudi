
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock } from 'lucide-react';

const SpecialOffers = () => {
  return (
    <section className="bg-gradient-to-l from-accent/10 to-primary/10 py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-accent">
                <Clock className="w-5 h-5" />
                <span className="text-sm font-medium">عرض محدود</span>
              </div>
              
              <h2 className="text-4xl font-bold font-cairo">
                خصم يصل إلى <span className="text-accent">50%</span>
                <br />
                على مجموعة مختارة
              </h2>
              
              <p className="text-lg text-gray-600">
                اغتنم الفرصة واحصل على أفضل المنتجات بأسعار لا تُقاوم
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-primary px-8 py-3 text-lg">
                تسوق الآن
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>
              
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                عرض جميع العروض
              </Button>
            </div>

            {/* Countdown Timer */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-gray-600">ينتهي العرض خلال:</span>
              <div className="flex gap-2">
                <div className="bg-primary text-white px-3 py-2 rounded text-center">
                  <div className="font-bold">12</div>
                  <div className="text-xs">يوم</div>
                </div>
                <div className="bg-primary text-white px-3 py-2 rounded text-center">
                  <div className="font-bold">08</div>
                  <div className="text-xs">ساعة</div>
                </div>
                <div className="bg-primary text-white px-3 py-2 rounded text-center">
                  <div className="font-bold">35</div>
                  <div className="text-xs">دقيقة</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/api/placeholder/600/400"
              alt="عروض خاصة"
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-lg">
              <span className="font-bold text-lg">خصم 50%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
