import { Button } from "@/src/components/ui/button";
import { Loader } from "lucide-react";

export const SubmitButton = ({ isLoading }) => {
  return (
    <div className="flex justify-start md:justify-end">
      <Button
        type="submit"
        className="w-full md:w-1/3 lg:w-1/4 text-base py-6 rounded-xl"
        disabled={isLoading}
        aria-label={"Envoyer mon message"}
      >
        {isLoading ? <Loader className="animate-spin" /> : "Envoyer ma demande"}
      </Button>
    </div>
  );
};
