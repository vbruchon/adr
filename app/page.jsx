"use client";

import { ToggleTheme } from "@/src/components/theme-toggle";
import { Button } from "@/src/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <h1 className="font-bold text-4xl text-center text-primary">ADR</h1>
      <ToggleTheme />
      <Button>click me </Button>
    </div>
  );
}
