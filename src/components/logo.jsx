import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <div className="md:w-1/4 lg:w-auto flex items-center">
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
