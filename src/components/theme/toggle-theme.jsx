"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export const ToggleTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !resolvedTheme) return null;

  const handleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleTheme}
      aria-label="Modifier le thème"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="absolute h-[1.2rem] w-[1.2rem] text-muted-foreground" />
      ) : (
        <Moon className="absolute h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Changer theme</span>
    </Button>
  );
};
