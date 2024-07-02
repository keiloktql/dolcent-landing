"use client";

/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-unused-vars */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { FOOTER_NAV_LINKS_ENUM } from "@/lib/enum";
import IOSBadge from "@/public/assets/get-it-on/ios-badge.png";
import AndroidBadge from "@/public/assets/get-it-on/android-badge.png";
import BMCBadge from "@/public/assets/marketing/bmc-button.png";
import {
  APP_STORE_LISTING_URL,
  BUY_ME_A_COFFEE_URL,
  PLAY_STORE_LISTING_URL
} from "@/lib/config";
import { FOOTER_NAV_LINKS_META, STATUS_CHECK_CACHE_KEY } from "@/lib/data";
import SystemStatus from "@/components/shared/SystemStatus";
import { useSystemStatus } from "@/lib/api/queries";
import { getLocalStorageItem } from "@/lib/utils";

interface FooterNavLinksProps {
  variation: FOOTER_NAV_LINKS_ENUM;
  className?: string;
}

const FooterNavLinks = ({ variation, className }: FooterNavLinksProps) => {
  const { heading, links } = FOOTER_NAV_LINKS_META[variation];
  return (
    <div className={className}>
      <h1 className="mb-4 text-sm font-semibold text-gray-500">{heading}</h1>
      <span className="flex flex-col">
        {links.map(({ href, text, external = false }, key) => {
          if (external) {
            return (
              <a
                key={key}
                href={href}
                rel="noopener noreferrer"
                target="_blank"
                className="my-1 flex flex-row items-center font-semibold text-gray-600 first-of-type:mt-0 last-of-type:mb-0 hover:underline"
              >
                {text}
                <Icon
                  className="ml-[3px] text-gray-600"
                  icon="bx:link-external"
                />
              </a>
            );
          }
          return (
            <Link
              key={key}
              className="my-1 font-semibold text-gray-600 first-of-type:mt-0 last-of-type:mb-0 hover:underline"
              href={href}
            >
              {text}
            </Link>
          );
        })}
      </span>
    </div>
  );
};

const Footer = () => {
  const { data, isLoading } = useSystemStatus();
  const [isClient, setIsClient] = useState(false);
  const cachedSystemStatus = JSON.parse(
    getLocalStorageItem(STATUS_CHECK_CACHE_KEY)
  )?.data;
  useEffect(() => {
    setIsClient(true);
  }, []);

  // to resolve the react rehydration error
  if (!isClient) {
    return null;
  }
  return (
    <footer className="bg-gray-25 px-6 sm:px-16">
      {/* Top */}
      <div className="flex flex-col md:flex-row justify-between py-14 max-w-screen-xl mx-auto">
        <div className="mr-8">
          <Link
            href="/"
            className="font-bold text-transparent text-display-md bg-clip-text bg-gradient-to-r from-secondary via-primary to-accent"
          >
            Dolcent
          </Link>
          <p className="mt-2 text-gray-600 lg:whitespace-nowrap">
            Supercharge your Finance Tracking ⚡
          </p>
          <SystemStatus
            systemStatus={data?.data || cachedSystemStatus}
            loading={isLoading}
            className="mt-4"
          />
          <a
            href="https://www.producthunt.com/posts/dolcent?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-dolcent"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-fit block"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=416235&theme=neutral"
              alt="Dolcent - Simple&#0044;&#0032;beautiful&#0032;&#0038;&#0032;user&#0045;friendly&#0032;budget&#0047;expense&#0032;tool | Product Hunt"
              height="54"
            />
          </a>
        </div>
        <div className="flex flex-col md:flex-row md:justify-center">
          <div className="flex flex-col">
            <FooterNavLinks
              className="mt-8 md:mt-0"
              variation={FOOTER_NAV_LINKS_ENUM.PRODUCT}
            />
            <FooterNavLinks
              className="mt-8"
              variation={FOOTER_NAV_LINKS_ENUM.SUPPORT}
            />
          </div>
          <FooterNavLinks
            className="mt-8 md:mt-0 md:ml-8"
            variation={FOOTER_NAV_LINKS_ENUM.LEGAL}
          />
        </div>
        <div className="w-fit mt-8 md:mt-0 md:ml-10 flex flex-col items-end">
          <a
            href={APP_STORE_LISTING_URL}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image src={IOSBadge} height={40} alt="ios" />
          </a>
          <a
            href={PLAY_STORE_LISTING_URL}
            rel="noopener noreferrer"
            target="_blank"
            className="mt-2"
          >
            <Image src={AndroidBadge} height={40} alt="android" />
          </a>
          <a
            href={BUY_ME_A_COFFEE_URL}
            rel="noopener noreferrer"
            target="_blank"
            className="mt-2"
          >
            <Image src={BMCBadge} width={135} height={40} alt="bmc" />
          </a>
          <a
            href="https://www.producthunt.com/products/dolcent?utm_source=badge-follow&utm_medium=badge&utm_souce=badge-dolcent"
            rel="noopener noreferrer"
            target="_blank"
            className="mt-2"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/follow.svg?product_id=552503&theme=dark"
              alt="Dolcent - Simple&#0044;&#0032;Beautiful&#0044;&#0032;and&#0032;User&#0045;Friendly&#0032;Budget&#0047;Expense&#0032;Tool | Product Hunt"
              height="40"
              width="135"
            />
          </a>
        </div>
      </div>
      <hr className="flex max-w-screen-xl mx-auto" />
      {/* Bottom */}
      <div className="flex flex-col md:flex-row md:justify-between pb-8 pt-4 max-w-screen-xl mx-auto">
        <p className="text-gray-500 font-medium text-xs md:text-sm">
          Copyright &copy; 2024 Tham Kei Lok. All rights reserved.
        </p>
        <p className="text-gray-500 font-medium text-xs md:text-sm">
          Developed in Singapore.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
