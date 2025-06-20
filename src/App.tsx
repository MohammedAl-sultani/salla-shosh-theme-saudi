
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Index from "./pages/Index";
import ProductIndex from "./pages/product/Index";
import ProductSingle from "./pages/product/Single";
import CartPage from "./pages/Cart";
import BlogIndex from "./pages/blog/Index";
import BlogSingle from "./pages/blog/Single";
import BrandsIndex from "./pages/brands/Index";
import BrandsSingle from "./pages/brands/Single";
import CustomerProfile from "./pages/customer/Profile";
import CustomerNotifications from "./pages/customer/Notifications";
import CustomerWishlist from "./pages/customer/Wishlist";
import CustomerOrdersIndex from "./pages/customer/orders/Index";
import CustomerOrdersSingle from "./pages/customer/orders/Single";
import PageSingle from "./pages/PageSingle";
import LoyaltyPage from "./pages/Loyalty";
import ThankYouPage from "./pages/ThankYou";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="products" element={<ProductIndex />} />
            <Route path="product/:id" element={<ProductSingle />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="blog" element={<BlogIndex />} />
            <Route path="blog/:slug" element={<BlogSingle />} />
            <Route path="brands" element={<BrandsIndex />} />
            <Route path="brand/:slug" element={<BrandsSingle />} />
            <Route path="customer/profile" element={<CustomerProfile />} />
            <Route path="customer/notifications" element={<CustomerNotifications />} />
            <Route path="customer/wishlist" element={<CustomerWishlist />} />
            <Route path="customer/orders" element={<CustomerOrdersIndex />} />
            <Route path="customer/orders/:id" element={<CustomerOrdersSingle />} />
            <Route path="page/:slug" element={<PageSingle />} />
            <Route path="loyalty" element={<LoyaltyPage />} />
            <Route path="thank-you" element={<ThankYouPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
