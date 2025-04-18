"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/src/lib/utils";
import { useMediaQuery } from "@/src/hooks/use-media-query";

export const NavigationItem = ({ href, children, className }) => {
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "relative text-lg mx-4 transition-all duration-300 group hover:text-primary",
        isActive && "text-primary",
        isActive && isMobile && "ml-8 w-full",
        className
      )}
    >
      {children}
      <span
        className={cn(
          "absolute left-1/2 -translate-x-1/2 -bottom-1 h-[2px] w-full bg-primary scale-x-0 origin-center transition-transform duration-300 ease-in-out",
          "group-hover:scale-x-100",
          isActive && "scale-x-100"
        )}
      />
    </Link>
  );
};
