
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, Share2, Heart, ArrowRight } from 'lucide-react';

const BlogSingle = () => {
  const { slug } = useParams();

  const post = {
    title: 'أحدث اتجاهات التكنولوجيا في 2024',
    content: `
      <p>تشهد التكنولوجيا تطوراً مستمراً وسريعاً، وعام 2024 ليس استثناءً. في هذا المقال، سنستكشف أحدث الاتجاهات التقنية التي ستؤثر على حياتنا اليومية.</p>
      
      <h2>الذكاء الاصطناعي والتعلم الآلي</h2>
      <p>يستمر الذكاء الاصطناعي في التطور بوتيرة متسارعة، مع تطبيقات جديدة في مختلف المجالات من الرعاية الصحية إلى التجارة الإلكترونية.</p>
      
      <h2>إنترنت الأشياء (IoT)</h2>
      <p>المنازل الذكية والمدن الذكية تصبح أكثر انتشاراً، مع تحسينات في الأمان والكفاءة.</p>
      
      <h2>التجارة الإلكترونية</h2>
      <p>تجارب تسوق أكثر تخصيصاً وتفاعلية، مع استخدام الواقع المعزز والواقع الافتراضي.</p>
    `,
    image: '/api/placeholder/800/400',
    author: 'أحمد محمد',
    date: '2024-01-15',
    category: 'تكنولوجيا',
    readTime: '5 دقائق'
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
        <Link to="/" className="hover:text-primary">الرئيسية</Link>
        <ArrowRight className="w-4 h-4" />
        <Link to="/blog" className="hover:text-primary">المدونة</Link>
        <ArrowRight className="w-4 h-4" />
        <span>المقال الحالي</span>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Article Content */}
        <div className="lg:col-span-3">
          <article>
            {/* Article Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <Badge variant="secondary">{post.category}</Badge>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString('ar-SA')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <span className="text-sm text-gray-500">{post.readTime}</span>
              </div>
              
              <h1 className="text-4xl font-bold font-cairo mb-6">{post.title}</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 ml-2" />
                  مشاركة
                </Button>
                <Button variant="outline" size="sm">
                  <Heart className="w-4 h-4 ml-2" />
                  إعجاب
                </Button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Author Info */}
            <Card className="mt-12">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <img
                    src="/api/placeholder/80/80"
                    alt={post.author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{post.author}</h3>
                    <p className="text-gray-600">كاتب ومحرر تقني متخصص في أحدث التطورات التكنولوجية</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </article>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 space-y-6">
            {/* Related Articles */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">مقالات ذات صلة</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex gap-3">
                      <img
                        src="/api/placeholder/80/60"
                        alt="مقال ذو صلة"
                        className="w-20 h-15 object-cover rounded"
                      />
                      <div>
                        <Link to="#" className="text-sm font-medium hover:text-primary line-clamp-2">
                          عنوان مقال ذو صلة {i}
                        </Link>
                        <p className="text-xs text-gray-500 mt-1">منذ يومين</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">اشترك في النشرة الإخبارية</h3>
                <p className="text-sm text-gray-600 mb-4">
                  احصل على أحدث المقالات والنصائح مباشرة في بريدك الإلكتروني
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="بريدك الإلكتروني"
                    className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <Button className="w-full btn-primary">اشتراك</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSingle;
