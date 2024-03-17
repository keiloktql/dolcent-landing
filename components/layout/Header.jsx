import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/shared/Sheet";
import CommandMenu from "@/components/shared/CommandMenu";

const Header = () => {
  const router = useRouter();
  const [logoAnimation, setLogoAnimation] = useState(true);

  return (
    <header className="sticky left-0 top-0 z-50 h-20 w-full justify-center bg-[#ffffffb8] backdrop-blur-[20px] backdrop-saturate-[180%]">
      <div className="m-auto flex h-full w-full max-w-screen-xl justify-between px-6 sm:px-16">
        {/* 1280px */}
        <div className="w-full items-center flex">
          <Link
            onAnimationEnd={() => setLogoAnimation(false)}
            className={`text-black text-display-sm font-bold  ${
              logoAnimation ? "shining-effect" : ""
            }`}
            href="/"
            onClick={() => {
              setLogoAnimation(true);
            }}
          >
            Dolcent
          </Link>
        </div>

        <Sheet>
          <SheetTrigger>
            <Menu className="h-6 md:hidden w-6" />
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col items-center justify-center">
              <Link
                className="font-semibold text-gray-600 hover:underline"
                href="/"
              >
                Home
              </Link>
              <Link
                className="mt-4 font-semibold text-gray-600  hover:underline"
                href="/faq"
              >
                FAQ
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <nav className="w-full h-full justify-between items-center hidden md:flex">
          <Link
            className="font-semibold text-gray-600  hover:underline"
            href="/faq"
          >
            FAQ
          </Link>
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
