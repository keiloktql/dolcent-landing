/* eslint-disable arrow-body-style */
import React from "react";
import Link from "next/link";
import MainLayout from "../layout/MainLayout";

const SitemapPage = () => {
  return (
    <MainLayout
      title="Sitemap - Dolcent"
      className="flex flex-col max-w-screen-xl px-6 sm:px-16 mx-auto pb-20"
    >
      <h1 className="font-bold pt-20 text-display-sm">Sitemap</h1>
      <div className="flex flex-col">
        <Link
          className="font-semibold text-primary hover:underline mt-4"
          href="/"
        >
          Home
        </Link>
        <Link
          className="font-semibold text-primary hover:underline mt-4"
          href="/faq"
        >
          Frequently Asked Questions
        </Link>
        <Link
          className="font-semibold text-primary hover:underline mt-4"
          href="/terms-and-conditions"
        >
          Terms and Conditions
        </Link>
        <Link
          className="font-semibold text-primary hover:underline mt-4"
          href="/privacy-policy"
        >
          Privacy Policy
        </Link>
        <Link
          className="font-semibold text-primary hover:underline mt-4"
          href="/sitemap"
        >
          Sitemap
        </Link>
      </div>
    </MainLayout>
  );
};

export default SitemapPage;
