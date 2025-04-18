"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { NavigationLinks } from "./navigation-links";
import { ToggleTheme } from "../theme/toggle-theme";
import { Logo } from "../logo";

export const MobileMenu = () => {
  return (
    <Drawer direction="right">
      <DrawerTrigger>
        <Menu size={32} />
      </DrawerTrigger>
      <DrawerContent className="flex flex-col gap-6 animate-slide-in-right">
        <DrawerHeader>
          <DrawerClose className="flex items-center justify-end">
            <X size={24} />
          </DrawerClose>
        </DrawerHeader>
        <DrawerTitle className="mx-auto">
          <Logo />
        </DrawerTitle>
        <div className="p-4">
          <NavigationLinks />
          <div className="flex justify-end my-16">
            <ToggleTheme />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
