"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export const ToggleTheme = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { theme, setTheme } = useTheme();

  if (!mounted) return null;

  const handleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <Button variant="outline" size="icon" onClick={handleTheme}>
      {theme === "dark" ? (
        <Moon className="absolute h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Sun className="absolute h-[1.2rem] w-[1.2rem] text-muted-foreground" />
      )}
      <span className="sr-only">Changer theme</span>
    </Button>
  );
};
