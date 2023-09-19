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

const HomePage = () => {
  const [shiningEffect, setShiningEffect] = useState(true);

  return (
    <MainLayout className="flex pb-20 max-w-screen-xl w-full mx-auto px-6 sm:px-16">
      {/* Hero */}
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col w-full mt-20 md:mt-40 ">
          <h1
            onAnimationEnd={() => setShiningEffect(false)}
            className={`font-bold text-center md:text-left text-display-md md:text-display-xl ${
              shiningEffect ? "shining-effect" : ""
            }`}
          >
            Superchage your Finance Tracking ⚡
          </h1>
          <p className="mt-4 text-center md:text-left text-gray-500">
            With Dolcent, you can effortlessly manage your income, expenses, and
            budgets in over 140 currencies, making it easier than ever to take
            control of your finances.
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
    </MainLayout>
  );
};

export default HomePage;
