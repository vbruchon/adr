"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/src/components/ui/button";

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <Button variant="outline" size="icon" onClick={handleTheme}>
      {theme === "dark" ? (
        <Moon className="absolute h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Sun className="absolute h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
