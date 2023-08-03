import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [logoAnimation, setLogoAnimation] = useState(true);

  return (
    <header className="fixed left-0 top-0 z-50 h-20 w-full justify-center bg-[#ffffffb8] backdrop-blur-[20px] backdrop-saturate-[180%]">
      <div className="m-auto flex h-full w-full max-w-screen-xl justify-between px-16">
        {/* 1280px */}
        <Link
          onAnimationEnd={() => setLogoAnimation(false)}
          className={`w-full flex text-black text-display-sm font-bold items-center ${
            logoAnimation ? "shining-effect" : ""
          }`}
          href="/"
          onClick={() => {
            setLogoAnimation(true);
          }}
        >
          Dolcent
        </Link>

        <ul className="flex w-full h-full items-center">
          <Link
            className={`font-semibold text-gray-600  hover:underline`}
            href="/pricing"
          >
            Pricing
          </Link>
          <Link
            className={`ml-8 font-semibold text-gray-600  hover:underline`}
            href="/pricing"
          >
            FAQ
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
