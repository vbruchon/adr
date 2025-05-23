import { useTheme } from "next-themes";
import Image from "next/image";

export const ThemedIcon = ({ item }) => {
  const { theme } = useTheme();

  return (
    <>
      <Image
        width={64}
        height={64}
        src={theme === "dark" ? item.iconDark : item.icon}
        alt={`Icône représentant un service de ${item.name}`}
        loading="lazy"
      />
    </>
  );
};
