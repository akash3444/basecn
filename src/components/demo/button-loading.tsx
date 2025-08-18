import { Button } from "@/registry/components/ui/button";
import { Loader } from "lucide-react";

export default function ButtonLoading() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button size="icon">
        <Loader className="animate-spin" />
      </Button>
      <Button>
        <Loader className="animate-spin" />
        Please wait
      </Button>
    </div>
  );
}
