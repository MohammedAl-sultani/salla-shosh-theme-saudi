
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const PageSingle = () => {
  const { slug } = useParams();

  const pages = {
    'privacy': {
      title: 'سياسة الخصوصية',
      content: `
        <h2>مقدمة</h2>
        <p>نحن في متجر شوش نقدر خصوصيتك ونلتزم بحماية معلوماتك الشخصية.</p>
        
        <h2>جمع المعلومات</h2>
        <p>نقوم بجمع المعلومات التي تقدمها لنا عند:</p>
        <ul>
          <li>إنشاء حساب</li>
          <li>إجراء عملية شراء</li>
          <li>الاشتراك في النشرة الإخبارية</li>
        </ul>
        
        <h2>استخدام المعلومات</h2>
        <p>نستخدم معلوماتك لـ:</p>
        <ul>
          <li>معالجة طلباتك</li>
          <li>تحسين خدماتنا</li>
          <li>التواصل معك</li>
        </ul>
      `
    },
    'terms': {
      title: 'شروط الاستخدام',
      content: `
        <h2>القبول بالشروط</h2>
        <p>باستخدام موقعنا، فإنك توافق على هذه الشروط والأحكام.</p>
        
        <h2>استخدام الموقع</h2>
        <p>يجب عليك:</p>
        <ul>
          <li>تقديم معلومات صحيحة</li>
          <li>عدم إساءة استخدام الموقع</li>
          <li>احترام حقوق الملكية الفكرية</li>
        </ul>
        
        <h2>المسؤولية</h2>
        <p>نحن غير مسؤولين عن أي أضرار قد تنتج عن استخدام الموقع.</p>
      `
    }
  };

  const page = pages[slug as keyof typeof pages];

  if (!page) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">الصفحة غير موجودة</h1>
          <p className="text-gray-600">لم نتمكن من العثور على الصفحة المطلوبة.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold font-cairo mb-8">{page.title}</h1>
        
        <Card>
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: page.content }} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PageSingle;
