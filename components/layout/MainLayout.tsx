import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SEO from "./SEO";

interface MainLayoutProps {
  children: any;
  title: string;
  className: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title,
  className
}) => (
  <>
    <SEO title={title} />
    <Header />
    <main className={`min-h-[calc(100vh-80px)] ${className}`}>{children}</main>
    <Footer />
  </>
);

export default MainLayout;
