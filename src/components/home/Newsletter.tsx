
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="bg-primary text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <Mail className="w-16 h-16 mx-auto text-accent" />
          
          <div className="space-y-4">
            <h2 className="text-3xl font-bold font-cairo">
              اشترك في نشرتنا الإخبارية
            </h2>
            <p className="text-lg text-blue-100">
              كن أول من يعلم بالعروض الجديدة والمنتجات المميزة
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 bg-white text-gray-900"
            />
            <Button className="bg-accent hover:bg-accent/90 text-white px-8">
              اشتراك
            </Button>
          </div>

          <p className="text-sm text-blue-200">
            نحترم خصوصيتك ولن نرسل لك رسائل غير مرغوب فيها
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
