import { ChevronRight } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/components/ui/collapsible";

export default function CollapsibleDemo() {
  return (
    <Collapsible className="flex w-[350px] flex-col gap-2">
      <CollapsibleTrigger className="bg-secondary py-2 px-4 rounded-lg text-left [&[data-panel-open]_svg]:rotate-90">
        <div className="flex items-center justify-between gap-4">
          <h4 className="grow text-sm font-semibold">
            @peduarte starred 3 repositories
          </h4>
          <ChevronRight className="size-4 transition-transform" />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="flex flex-col gap-2">
        <div className="rounded-md border px-4 py-2 font-mono text-sm">
          @shadcn-ui/ui
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm">
          @mui/base-ui
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm">
          @akash3444/basecn
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
