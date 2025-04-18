import { Logo } from "./logo";
import { FooterLinks } from "./navigation/footer-links";
import { Location } from "./location";
import { Copyright } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t bg-background">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex flex-col items-center gap-4 h-full">
          <Logo className={" lg:w-auto"} />
          <div className="text-center lg:text-start">
            <h3 className="text-xl font-semibold">Auto Dépannage Romanais</h3>
            <p className="text-muted-foreground">
              Réparation et assistance automobile à Romans-sur-Isère.
            </p>
            <p className="text-primary">06.06.06.06.06</p>
          </div>
        </div>
        <FooterLinks />
        <Location />
      </div>

      <div className="mt-10 text-center text-sm text-muted-foreground">
        <p className="flex items-center gap-2 justify-center">
          <Copyright size={16} />
          <span>2025 Auto Dépannage Romanais. Tous droits réservés.</span>
        </p>
      </div>
    </footer>
  );
};
