
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
