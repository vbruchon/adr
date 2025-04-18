"use client";

import { useMediaQuery } from "../hooks/use-media-query";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { NavigationMenu } from "./navigation-menu";

export const Header = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <header className="px-6 py-4 mx-auto flex justify-between max-md:justify-around items-center">
      <Logo />
      {isMobile ? <MobileMenu /> : <NavigationMenu />}
    </header>
  );
};
