import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "../lib/utils";

export const Logo = ({ className }) => {
  return (
    <div className={cn("flex items-center", className)}>
      <Link href={"/"}>
        <Image
          src={"/logo-auto-depannage-romanais.png"}
          width={300}
          height={300}
          alt="auto depannage romanais logo"
        />
      </Link>
    </div>
  );
};
