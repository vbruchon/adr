"use client";

import { ToggleTheme } from "../theme/toggle-theme";
import { NavigationLinks } from "./navigation-links";

export const NavigationMenu = () => {
  return (
    <div className="flex items-center gap-8">
      <NavigationLinks />

      <ToggleTheme />
    </div>
  );
};
