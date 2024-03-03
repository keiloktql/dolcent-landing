/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import MainLayout from "@/components/layout/MainLayout";
import IOSBadge from "@/public/assets/get-it-on/ios-badge.png";
import AndroidBadge from "@/public/assets/get-it-on/android-badge.png";
import SCOverview from "@/public/assets/app/overview.png";
import {
  APP_STORE_LISTING_URL,
  PLAY_STORE_LISTING_URL
} from "@/config/general";
import BentoBox from "../shared/BentoBox";
import { OVERVIEW_FEATURES_LIST } from "@/config/enum";

const HomePage = () => {
  const [shiningEffect, setShiningEffect] = useState(true);

  return (
    <MainLayout className="flex flex-col pb-20 max-w-screen-xl w-full mx-auto px-6 sm:px-16 bg-bg-hero bg-contain bg-no-repeat">
      {/* Hero */}
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col w-full mt-20 lg:mt-0 lg:justify-center">
          <div className="flex justify-center md:justify-normal">
            <a
              href="https://www.producthunt.com/posts/dolcent?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-dolcent"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit block"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=416235&theme=light"
                alt="Dolcent - Simple&#0044;&#0032;beautiful&#0032;&#0038;&#0032;user&#0045;friendly&#0032;budget&#0047;expense&#0032;tool | Product Hunt"
                height="54"
              />
            </a>
          </div>
          <h1
            onAnimationEnd={() => setShiningEffect(false)}
            className={`font-bold text-center md:text-left text-display-md md:text-display-xl mt-4 ${
              shiningEffect ? "shining-effect" : ""
            }`}
          >
            Superchage your Finance Tracking ⚡
          </h1>
          <p className="mt-4 text-center md:text-left text-gray-500">
            With Dolcent, you can effortlessly manage your income, expenses, and
            budgets in over 140 currencies, making it easier than ever to take
            control of your finances. 100% free, with no paywall or ads.
          </p>
          <div className="flex mt-4 flex-row justify-center md:justify-normal">
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
              className="ml-4"
            >
              <Image src={AndroidBadge} height={40} alt="android" />
            </a>
          </div>
        </div>
        <div className="flex w-full justify-center pt-12 md:mt-0 lg:justify-end">
          <Image
            src={SCOverview}
            width={300}
            style={{ objectFit: "contain" }}
            alt="screenshot"
          />
        </div>
      </div>
      {/* Features */}
      <div id="features" className="mt-20">
        <h1 className="font-bold text-center text-display-sm md:text-display-md">
          Powerful Features
        </h1>
        <div className="pt-8">
          {OVERVIEW_FEATURES_LIST.map((oneFeature, index) => (
            <BentoBox
              key={index}
              type={oneFeature.type}
              imageHref={oneFeature.imageHref}
              heading={oneFeature.heading}
              desc={oneFeature.desc}
              content={oneFeature.content}
              className={oneFeature.className}
              textClassName={oneFeature.textClassName}
            />
          ))}
        </div>
        <h1 className="pt-8 font-semibold text-center text-lg">
          and many more...
        </h1>
      </div>
    </MainLayout>
  );
};

export default HomePage;
