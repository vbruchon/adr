import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

export const Location = () => {
  return (
    <div className="flex flex-col gap-2 md:self-center h-full">
      <h4 className="text-lg font-semibold mb-2">Nous situer</h4>

      <Dialog>
        <DialogTrigger className="">
          <Image
            src={"/auto-depannage-romanais-position.png"}
            width={200}
            height={200}
            className="hover:cursor-pointer max-md:mx-auto"
            alt="postion auto depannage romanais"
          />
        </DialogTrigger>
        <DialogContent className={"!max-w-4xl"}>
          <DialogTitle>Nous situer</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            220 allé du Vivarais 26300 Bourg-de-Pégage
          </DialogDescription>
          <Image
            width={950}
            height={950}
            src={"/auto-depannage-romanais-position.png"}
            alt="postion auto depannage romanais"
          />
        </DialogContent>
      </Dialog>
      <p className="text-muted-foreground">
        220 allé du Vivarais 26300 Bourg-de-Pégage
      </p>
    </div>
  );
};
