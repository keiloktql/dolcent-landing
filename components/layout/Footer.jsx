/* eslint-disable no-unused-vars */
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FOOTER_NAV_LINKS_META } from "@/config/enum";
import IOSBadge from "@/public/assets/get-it-on/ios-badge.png";
import AndroidBadge from "@/public/assets/get-it-on/android-badge.png";
import {
  APP_STORE_LISTING_URL,
  PLAY_STORE_LISTING_URL
} from "@/config/general";

const FooterNavLinks = ({ variation, className }) => {
  const { heading, links } = FOOTER_NAV_LINKS_META[variation];
  return (
    <div className={className}>
      <h1 className="mb-4 text-sm font-semibold text-gray-500">{heading}</h1>
      <span className="flex flex-col">
        {links.map(({ href, text }, key) => (
          <Link
            key={key}
            className="my-1 font-semibold text-gray-600 first-of-type:mt-0 last-of-type:mb-0 hover:underline"
            href={href}
          >
            {text}
          </Link>
        ))}
      </span>
    </div>
  );
};

// eslint-disable-next-line arrow-body-style
const Footer = () => {
  return (
    <footer className="bg-gray-25 px-6 sm:px-16">
      {/* Top */}
      <div className="flex flex-col md:flex-row justify-between py-14 max-w-screen-xl mx-auto">
        <div className="w-full">
          <Link
            href="/"
            className="font-bold text-transparent text-display-md bg-clip-text bg-gradient-to-r from-secondary via-primary to-accent"
          >
            Dolcent
          </Link>
          <p className="mt-2 text-gray-600 md:whitespace-nowrap">
            Make your Dollars and Cents Count
          </p>
        </div>
        <div className="mx-auto flex flex-col md:flex-row w-full">
          <FooterNavLinks className="mt-8 md:mt-0" variation="SUPPORT" />
          <FooterNavLinks className="mt-8 md:mt-0 md:ml-20" variation="LEGAL" />
          <div className="mt-8 md:mt-0 md:ml-auto flex flex-col">
            <a
              href={APP_STORE_LISTING_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image src={IOSBadge} height={40} />
            </a>
            <a
              href={PLAY_STORE_LISTING_URL}
              rel="noopener noreferrer"
              target="_blank"
              className="mt-2"
            >
              <Image src={AndroidBadge} height={40} />
            </a>
          </div>
        </div>
      </div>
      <hr className="flex max-w-screen-xl mx-auto" />
      {/* Bottom */}
      <div className="flex flex-col md:flex-row md:justify-between pb-8 pt-4 max-w-screen-xl mx-auto">
        <p className="text-gray-500">
          Copyright &copy; 2023 Tham Kei Lok. All rights reserved.
        </p>
        <p className="text-gray-500">Developed in Singapore</p>
      </div>
    </footer>
  );
};

export default Footer;
