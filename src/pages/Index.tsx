
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeaturedCategories from '@/components/home/FeaturedCategories';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import SpecialOffers from '@/components/home/SpecialOffers';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';

const Index = () => {
  return (
    <div className="space-y-12">
      <HeroSection />
      <FeaturedCategories />
      <FeaturedProducts />
      <SpecialOffers />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Index;
