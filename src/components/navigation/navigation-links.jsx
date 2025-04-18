"use client";

import { LINKS } from "@/src/data";
import { useMediaQuery } from "../../hooks/use-media-query";
import { cn } from "../../lib/utils";
import { NavigationItem } from "./navigation-item";

export const NavigationLinks = ({ className = "" }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <nav
      className={cn(
        "flex gap-6 relative",
        {
          "flex-col": isMobile,
        },
        className
      )}
    >
      {LINKS.map((link) => (
        <NavigationItem key={link.slug} href={`/${link.slug}`}>
          {link.name}
        </NavigationItem>
      ))}
    </nav>
  );
};
