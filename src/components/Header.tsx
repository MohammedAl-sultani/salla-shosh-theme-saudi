
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, Heart, Phone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                966-50-123-4567
              </span>
              <span>شحن مجاني للطلبات فوق 200 ريال</span>
            </div>
            <div className="flex items-center gap-4">
              <span>تابعنا على</span>
              <div className="flex gap-2">
                {/* Social media icons would go here */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary font-cairo">متجر شوش</h1>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="ابحث عن المنتجات..."
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
              <button className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <Search className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>حسابي</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="relative">
              <Heart className="w-5 h-5" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs">
                3
              </Badge>
            </Button>

            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs">
                5
              </Badge>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="ابحث عن المنتجات..."
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
            <button className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <Search className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="hidden md:flex items-center justify-center gap-8 py-3">
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">الرئيسية</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">الأزياء</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">الإلكترونيات</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">المنزل والحديقة</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">الرياضة</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">الجمال والعناية</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">العروض</a>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col gap-3">
                <a href="#" className="text-gray-700 hover:text-primary transition-colors py-2">الرئيسية</a>
                <a href="#" className="text-gray-700 hover:text-primary transition-colors py-2">الأزياء</a>
                <a href="#" className="text-gray-700 hover:text-primary transition-colors py-2">الإلكترونيات</a>
                <a href="#" className="text-gray-700 hover:text-primary transition-colors py-2">المنزل والحديقة</a>
                <a href="#" className="text-gray-700 hover:text-primary transition-colors py-2">الرياضة</a>
                <a href="#" className="text-gray-700 hover:text-primary transition-colors py-2">الجمال والعناية</a>
                <a href="#" className="text-gray-700 hover:text-primary transition-colors py-2">العروض</a>
                <hr className="my-2" />
                <a href="#" className="text-gray-700 hover:text-primary transition-colors py-2">حسابي</a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
