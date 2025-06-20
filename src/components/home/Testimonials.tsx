
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'أحمد محمد',
    rating: 5,
    comment: 'تجربة تسوق رائعة، جودة المنتجات ممتازة والتوصيل سريع',
    avatar: '/api/placeholder/60/60'
  },
  {
    id: 2,
    name: 'فاطمة العلي',
    rating: 5,
    comment: 'خدمة عملاء متميزة وأسعار مناسبة، أنصح بالتسوق من هنا',
    avatar: '/api/placeholder/60/60'
  },
  {
    id: 3,
    name: 'خالد السعيد',
    rating: 4,
    comment: 'منتجات أصلية ومتنوعة، سأكرر التسوق بالتأكيد',
    avatar: '/api/placeholder/60/60'
  }
];

const Testimonials = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-cairo mb-4">آراء عملائنا</h2>
        <p className="text-gray-600">ما يقوله عملاؤنا عن تجربتهم معنا</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="card-shadow">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
              
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">عميل متجر شوش</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
