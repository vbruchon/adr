// "use client";

// import Link from "next/link";
// import { cn } from "../lib/utils";
// import { useMediaQuery } from "../hooks/use-media-query";
// import { usePathname } from "next/navigation";

// export const NavigationItem = ({ href, children }) => {
//   const pathname = usePathname();
//   const isMobile = useMediaQuery("(max-width: 768px)");
//   const isActive = pathname === href;

//   return (
//     <Link
//       href={href}
//       className={cn(
//         "text-lg mx-4 hover:text-primary hover:underline transition-all duration-300 transform hover:scale-105",
//         {
//           "text-primary underline text-xl font-bold": isActive,
//         },
//         {
//           "ml-8 w-full": isActive && isMobile,
//         }
//       )}
//     >
//       {children}
//     </Link>
//   );
// };
"use client";

import Link from "next/link";
import { cn } from "../lib/utils";
import { useMediaQuery } from "../hooks/use-media-query";
import { usePathname } from "next/navigation";

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
