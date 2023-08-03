/* eslint-disable no-unused-vars */
import Link from "next/link";
import React from "react";
import { FOOTER_NAV_LINKS_META } from "@/config/constants";

const FooterNavLinks = ({ variation }) => {
  const { heading, links } = FOOTER_NAV_LINKS_META[variation];
  return (
    <div>
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

const Footer = () => {
  return (
    <footer className="bg-gray-25 px-16">
      <div className="flex justify-between py-14">
        <div>
          <Link
            href="/"
            className="font-bold text-transparent text-display-md bg-clip-text bg-gradient-to-r from-secondary via-primary to-accent"
          >
            Dolcent
          </Link>
          <p className="mt-2 text-gray-600">
            Make your Dollars and Cents Count.
          </p>
        </div>
        <div className="ml-32 mr-16 flex flex-auto flex-row justify-evenly">
          <FooterNavLinks variation="SUPPORT" />
          <FooterNavLinks variation="LEGAL" />
        </div>
      </div>
      <hr className="flex" />
      {/* Bottom */}
      <div className="flex justify-between pb-8 pt-4">
        <p className="text-gray-500">
          Copyright &copy; 2023 Tham Kei Lok. All rights reserved.
        </p>
        <p className="text-gray-500">Developed in Singapore</p>
      </div>
    </footer>
  );
};

export default Footer;
