
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] bg-gradient-to-l from-primary/10 to-accent/10 overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-right">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-accent">
                <Star className="w-5 h-5 fill-current" />
                <span className="text-sm font-medium">الأكثر مبيعاً في السعودية</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold font-cairo leading-tight">
                <span className="text-gradient">اكتشف</span>
                <br />
                أحدث الصيحات
              </h1>
              
              <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
                تسوق من مجموعة واسعة من المنتجات العالية الجودة مع خدمة توصيل سريعة وآمنة
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="btn-primary px-8 py-3 text-lg">
                تسوق الآن
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>
              
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                عرض الكتالوج
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-gray-600">عميل راضٍ</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-gray-600">منتج</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-sm text-gray-600">رضا العملاء</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-8 hover-lift">
                <img
                  src="/api/placeholder/500/600"
                  alt="منتجات متنوعة"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 animate-fade-in">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">متوفر للشحن</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-accent text-white rounded-lg shadow-lg p-4 animate-fade-in">
                <div className="text-center">
                  <div className="text-lg font-bold">خصم 30%</div>
                  <div className="text-xs">لفترة محدودة</div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-6 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
