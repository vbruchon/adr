"use client";

import { useMediaQuery } from "../hooks/use-media-query";
import { cn } from "../lib/utils";
import { NavigationItem } from "./navigation-item";

const LINKS = [
  { slug: "services", name: "Nos Services" },
  { slug: "transport-public", name: "Transport Public" },
  { slug: "contact", name: "Contact" },
];

export const NavigationLinks = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div
      className={cn("flex gap-6 relative", {
        "flex-col": isMobile,
      })}
    >
      {LINKS.map((link) => (
        <NavigationItem key={link.slug} href={`/${link.slug}`}>
          {link.name}
        </NavigationItem>
      ))}
    </div>
  );
};
