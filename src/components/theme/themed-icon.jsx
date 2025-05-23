"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemedIcon = ({ item }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !resolvedTheme) {
    return <Loader className="w-10 h-10 animate-spin" aria-hidden="true" />;
  }

  return (
    <Image
      width={64}
      height={64}
      src={resolvedTheme === "dark" ? item.icon : item.iconDark}
      alt={`Icône représentant un service de ${item.name}`}
      loading="lazy"
    />
  );
};
