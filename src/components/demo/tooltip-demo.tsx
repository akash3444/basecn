import { buttonVariants } from "@/registry/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from "@/registry/components/ui/tooltip";

export default function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger className={buttonVariants({ variant: "outline" })}>
        Hover
      </TooltipTrigger>
      <TooltipPositioner>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </TooltipPositioner>
    </Tooltip>
  );
}
