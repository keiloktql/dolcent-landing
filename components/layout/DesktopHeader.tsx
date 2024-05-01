import React from "react";
import Link from "next/link";
import CommandMenu from "@/components/shared/CommandMenu";

const DesktopHeader = () => (
  <nav className="w-full h-full justify-between items-center hidden md:flex">
    <Link className="font-semibold text-gray-600  hover:underline" href="/faq">
      FAQ
    </Link>
    <div className="w-full flex-1 md:w-auto md:flex-none">
      <CommandMenu />
    </div>
  </nav>
);

export default DesktopHeader;
