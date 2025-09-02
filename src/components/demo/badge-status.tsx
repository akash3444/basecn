import { Badge } from "@/registry/components/ui/badge";
import { Check, CircleDashed, CircleDotDashed, X } from "lucide-react";

export default function BadgeStatus() {
  return (
    <div className="flex w-full justify-center flex-wrap gap-2">
      <Badge variant="secondary" className="gap-2">
        <CircleDashed /> Todo
      </Badge>
      <Badge className="bg-amber-500/15 dark:bg-amber-500/10 text-amber-500 gap-2">
        <CircleDotDashed /> In Progress
      </Badge>
      <Badge className="bg-green-500/15 dark:bg-green-500/10 text-green-500 gap-2">
        <Check strokeWidth={2.5} /> Done
      </Badge>
      <Badge className="bg-red-500/10 dark:bg-red-500/20 text-red-500 gap-2">
        <X /> Cancelled
      </Badge>
    </div>
  );
}
