
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Settings, Package, Heart, Bell } from 'lucide-react';

const CustomerProfile = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <img
                  src="/api/placeholder/100/100"
                  alt="صورة المستخدم"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-lg">أحمد محمد</h3>
                <p className="text-gray-600">ahmed@example.com</p>
              </div>
              
              <nav className="space-y-2">
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg bg-primary text-white">
                  <User className="w-5 h-5" />
                  <span>الملف الشخصي</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                  <Package className="w-5 h-5" />
                  <span>طلباتي</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                  <Heart className="w-5 h-5" />
                  <span>قائمة الأمنيات</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                  <Bell className="w-5 h-5" />
                  <span>الإشعارات</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                  <Settings className="w-5 h-5" />
                  <span>الإعدادات</span>
                </a>
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile">المعلومات الشخصية</TabsTrigger>
              <TabsTrigger value="addresses">العناوين</TabsTrigger>
              <TabsTrigger value="security">الأمان</TabsTrigger>
              <TabsTrigger value="preferences">التفضيلات</TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>المعلومات الشخصية</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">الاسم الأول</Label>
                      <Input id="firstName" defaultValue="أحمد" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">اسم العائلة</Label>
                      <Input id="lastName" defaultValue="محمد" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input id="email" type="email" defaultValue="ahmed@example.com" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">رقم الهاتف</Label>
                    <Input id="phone" defaultValue="+966501234567" />
                  </div>
                  
                  <div>
                    <Label htmlFor="birthDate">تاريخ الميلاد</Label>
                    <Input id="birthDate" type="date" defaultValue="1990-01-01" />
                  </div>
                  
                  <Button className="btn-primary">حفظ التغييرات</Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="addresses" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>عناوين التسليم</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">المنزل</h4>
                        <p className="text-gray-600">شارع الملك فهد، الرياض 12345</p>
                        <p className="text-gray-600">المملكة العربية السعودية</p>
                      </div>
                      <Button variant="outline" size="sm">تعديل</Button>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    إضافة عنوان جديد
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="security" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>كلمة المرور</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="currentPassword">كلمة المرور الحالية</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  
                  <div>
                    <Label htmlFor="newPassword">كلمة المرور الجديدة</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  
                  <div>
                    <Label htmlFor="confirmPassword">تأكيد كلمة المرور</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                  
                  <Button className="btn-primary">تحديث كلمة المرور</Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="preferences" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>تفضيلات الإشعارات</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">إشعارات البريد الإلكتروني</h4>
                      <p className="text-sm text-gray-600">تلقي تحديثات حول الطلبات والعروض</p>
                    </div>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">إشعارات الرسائل النصية</h4>
                      <p className="text-sm text-gray-600">تلقي تحديثات مهمة عبر الرسائل النصية</p>
                    </div>
                    <input type="checkbox" className="rounded" />
                  </div>
                  
                  <Button className="btn-primary">حفظ التفضيلات</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
