
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowLeft } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'أحدث اتجاهات التكنولوجيا في 2024',
    excerpt: 'اكتشف أحدث الابتكارات التقنية التي ستغير طريقة حياتنا في العام المقبل',
    image: '/api/placeholder/400/250',
    author: 'أحمد محمد',
    date: '2024-01-15',
    category: 'تكنولوجيا',
    slug: 'tech-trends-2024'
  },
  {
    id: 2,
    title: 'دليل شراء الهواتف الذكية',
    excerpt: 'كل ما تحتاج معرفته قبل شراء هاتفك الذكي الجديد',
    image: '/api/placeholder/400/250',
    author: 'فاطمة العلي',
    date: '2024-01-10',
    category: 'دليل الشراء',
    slug: 'smartphone-buying-guide'
  },
  {
    id: 3,
    title: 'نصائح للتسوق الإلكتروني الآمن',
    excerpt: 'تعلم كيفية التسوق عبر الإنترنت بأمان وحماية معلوماتك الشخصية',
    image: '/api/placeholder/400/250',
    author: 'خالد السعيد',
    date: '2024-01-05',
    category: 'نصائح',
    slug: 'safe-online-shopping'
  }
];

const categories = ['جميع المقالات', 'تكنولوجيا', 'دليل الشراء', 'نصائح', 'أخبار'];

const BlogIndex = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-cairo mb-4">مدونة متجر شوش</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          اكتشف أحدث المقالات والنصائح حول التكنولوجيا والتسوق الإلكتروني
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">فئات المقالات</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="block w-full text-right py-2 px-3 rounded hover:bg-gray-100 transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Blog Posts */}
        <div className="lg:col-span-3">
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover-lift card-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <CardContent className="md:w-2/3 p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('ar-SA')}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    
                    <Link to={`/blog/${post.slug}`}>
                      <h2 className="text-xl font-bold font-cairo mb-3 hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <Link to={`/blog/${post.slug}`}>
                      <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                        <span>قراءة المزيد</span>
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 border border-gray-200 rounded hover:bg-gray-50">السابق</button>
              <button className="px-4 py-2 bg-primary text-white rounded">1</button>
              <button className="px-4 py-2 border border-gray-200 rounded hover:bg-gray-50">2</button>
              <button className="px-4 py-2 border border-gray-200 rounded hover:bg-gray-50">3</button>
              <button className="px-4 py-2 border border-gray-200 rounded hover:bg-gray-50">التالي</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogIndex;
