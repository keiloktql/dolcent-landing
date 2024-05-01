import React from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/shared/Sheet";
import { Menu } from "lucide-react";

const MobileHeader = () => (
  <Sheet>
    <SheetTrigger>
      <Menu className="h-6 md:hidden w-6" />
    </SheetTrigger>
    <SheetContent side="right">
      <nav className="flex flex-col items-center justify-center">
        <Link className="font-semibold text-gray-600 hover:underline" href="/">
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
);
export default MobileHeader;
