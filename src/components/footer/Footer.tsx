
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Store Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-cairo">متجر شوش</h3>
            <p className="text-gray-300">
              متجرك الإلكتروني المتكامل للحصول على أفضل المنتجات بأسعار مناسبة وجودة عالية
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">الرئيسية</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">المنتجات</Link></li>
              <li><Link to="/brands" className="text-gray-300 hover:text-white transition-colors">الماركات</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">المدونة</Link></li>
              <li><Link to="/loyalty" className="text-gray-300 hover:text-white transition-colors">برنامج الولاء</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">خدمة العملاء</h4>
            <ul className="space-y-2">
              <li><Link to="/customer/profile" className="text-gray-300 hover:text-white transition-colors">حسابي</Link></li>
              <li><Link to="/customer/orders" className="text-gray-300 hover:text-white transition-colors">طلباتي</Link></li>
              <li><Link to="/customer/wishlist" className="text-gray-300 hover:text-white transition-colors">قائمة الأمنيات</Link></li>
              <li><Link to="/page/privacy" className="text-gray-300 hover:text-white transition-colors">سياسة الخصوصية</Link></li>
              <li><Link to="/page/terms" className="text-gray-300 hover:text-white transition-colors">شروط الاستخدام</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">تواصل معنا</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-300">966-50-123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-300">info@shoshshop.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-gray-300">الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 متجر شوش. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
