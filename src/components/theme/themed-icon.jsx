import { useTheme } from "next-themes";
import Image from "next/image";
import { useIsClient } from "@/src/hooks/use-is-client";
import { Loader } from "lucide-react";

export const ThemedIcon = ({ item }) => {
  const { theme } = useTheme();
  const isClient = useIsClient();

  return (
    <>
      {isClient ? (
        <Image
          width={64}
          height={64}
          src={theme === "dark" ? item.icon : item.iconDark}
          alt={`Icône représentant un service de ${item.name}`}
          loading="lazy"
        />
      ) : (
        <Loader className="animate-spin" />
      )}
    </>
  );
};
