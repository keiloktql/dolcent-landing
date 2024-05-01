import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/layout/SEO";

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

const MainLayout = ({ children, title, className }: MainLayoutProps) => (
  <>
    <SEO title={title} />
    <Header />
    <main className={`min-h-[calc(100vh-80px)] ${className}`}>{children}</main>
    <Footer />
  </>
);

export default MainLayout;
