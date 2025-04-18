import Link from "next/link";
import { LINKS } from "../../data";

export const FooterLinks = () => {
  return (
    <div className="flex flex-col items-center gap-2 h-full">
      <h4 className=" text-lg font-semibold mb-2 self-start md:self-auto md:mr-6">
        Liens utiles
      </h4>
      <nav className="space-y-1 flex gap-6 flex-wrap md:flex-col md:gap-2">
        {LINKS.map((link) => (
          <Link
            key={link.slug}
            href={`/${link.slug}`}
            className="text-muted-foreground hover:text-primary transition"
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="/mentions-legales"
          className="text-muted-foreground hover:text-primary transition"
        >
          Mentions légales
        </Link>
      </nav>
    </div>
  );
};
