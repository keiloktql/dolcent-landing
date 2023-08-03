import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SEO from "./SEO";

const MainLayout = ({ children, title, className }) => (
  <>
    <SEO title={title} />
    <Header />
    <main className={`mt-20 min-h-[calc(100vh-80px)] ${className}`}>
      {children}
    </main>
    <Footer />
  </>
);

export default MainLayout;
