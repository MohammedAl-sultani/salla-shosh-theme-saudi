
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Gift, Star, Crown, Trophy, Zap } from 'lucide-react';

const LoyaltyPage = () => {
  const userPoints = 1250;
  const nextTierPoints = 2000;
  const progressPercentage = (userPoints / nextTierPoints) * 100;

  const tiers = [
    { name: 'برونزي', min: 0, max: 499, color: 'bg-amber-600', icon: Trophy },
    { name: 'فضي', min: 500, max: 999, color: 'bg-gray-400', icon: Star },
    { name: 'ذهبي', min: 1000, max: 1999, color: 'bg-yellow-500', icon: Crown },
    { name: 'بلاتيني', min: 2000, max: 4999, color: 'bg-blue-500', icon: Zap },
    { name: 'الماسي', min: 5000, max: Infinity, color: 'bg-purple-500', icon: Gift }
  ];

  const currentTier = tiers.find(tier => userPoints >= tier.min && userPoints <= tier.max);
  const nextTier = tiers.find(tier => tier.min > userPoints);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-cairo mb-4">برنامج الولاء</h1>
          <p className="text-lg text-gray-600">
            اكسب نقاط مع كل عملية شراء واستمتع بمزايا حصرية
          </p>
        </div>

        {/* Current Status */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                {currentTier && (
                  <>
                    <div className={`w-16 h-16 ${currentTier.color} rounded-full flex items-center justify-center`}>
                      <currentTier.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">مستوى {currentTier.name}</h2>
                      <p className="text-gray-600">نقاطك الحالية: {userPoints} نقطة</p>
                    </div>
                  </>
                )}
              </div>
              <Badge className="bg-primary text-white text-lg px-4 py-2">
                {userPoints} نقطة
              </Badge>
            </div>

            {nextTier && (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>التقدم للمستوى التالي ({nextTier.name})</span>
                  <span className="text-sm text-gray-600">
                    {nextTierPoints - userPoints} نقطة متبقية
                  </span>
                </div>
                <Progress value={progressPercentage} className="h-3" />
              </div>
            )}
          </CardContent>
        </Card>

        {/* Tier Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier) => (
            <Card key={tier.name} className={`${userPoints >= tier.min && userPoints <= tier.max ? 'ring-2 ring-primary' : ''}`}>
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <tier.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <p className="text-gray-600 mb-4">
                  {tier.min} - {tier.max === Infinity ? '∞' : tier.max} نقطة
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>خصم {tier.name === 'برونزي' ? '5%' : tier.name === 'فضي' ? '10%' : tier.name === 'ذهبي' ? '15%' : tier.name === 'بلاتيني' ? '20%' : '25%'}</li>
                  <li>شحن مجاني</li>
                  <li>عروض حصرية</li>
                  {tier.min >= 1000 && <li>دعم أولوية</li>}
                  {tier.min >= 2000 && <li>هدايا مجانية</li>}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How to Earn Points */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold font-cairo mb-6">كيفية كسب النقاط</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Gift className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold">التسوق</h3>
                  <p className="text-gray-600">1 نقطة لكل 10 ريال</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">كتابة تقييم</h3>
                  <p className="text-gray-600">25 نقطة لكل تقييم</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Crown className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold">عيد الميلاد</h3>
                  <p className="text-gray-600">100 نقطة سنوياً</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold">دعوة الأصدقاء</h3>
                  <p className="text-gray-600">50 نقطة لكل صديق</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Redeem Points */}
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold font-cairo mb-6">استبدال النقاط</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">100 نقطة</div>
                <div className="text-gray-600 mb-4">= 10 ريال خصم</div>
                <Button variant="outline">استبدال</Button>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">500 نقطة</div>
                <div className="text-gray-600 mb-4">= شحن مجاني</div>
                <Button variant="outline">استبدال</Button>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">1000 نقطة</div>
                <div className="text-gray-600 mb-4">= هدية مجانية</div>
                <Button variant="outline">استبدال</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoyaltyPage;
