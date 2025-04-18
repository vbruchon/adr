"use client";

import { useMediaQuery } from "../hooks/use-media-query";
import { Logo } from "./logo";
import { MobileMenu } from "./navigation/mobile-menu";
import { NavigationMenu } from "./navigation/navigation-menu";

export const Header = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <header className="px-6 py-4 mx-auto flex justify-between max-md:justify-around items-center">
      <Logo className={"md:w-1/4 lg:w-auto"} />
      {isMobile ? <MobileMenu /> : <NavigationMenu />}
    </header>
  );
};
