import * as React from "react";
import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card";

import { cn } from "@/lib/utils";

function HoverCard({ ...props }: PreviewCardPrimitive.Root.Props) {
  return <PreviewCardPrimitive.Root data-slot="hover-card" {...props} />;
}

function HoverCardTrigger({ ...props }: PreviewCardPrimitive.Trigger.Props) {
  return (
    <PreviewCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
  );
}

function HoverCardPositioner({
  sideOffset = 4,
  className,
  ...props
}: PreviewCardPrimitive.Positioner.Props) {
  return (
    <PreviewCardPrimitive.Portal data-slot="hover-card-portal">
      <PreviewCardPrimitive.Positioner
        data-slot="hover-card-positioner"
        sideOffset={sideOffset}
        className={cn("z-50", className)}
        {...props}
      />
    </PreviewCardPrimitive.Portal>
  );
}

function HoverCardContent({
  className,
  ...props
}: PreviewCardPrimitive.Popup.Props) {
  return (
    <PreviewCardPrimitive.Popup
      data-slot="hover-card-content"
      className={cn(
        "bg-popover text-popover-foreground data-[open]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[open]:fade-in-0 data-[closed]:zoom-out-95 data-[open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        className
      )}
      {...props}
    />
  );
}

export { HoverCard, HoverCardTrigger, HoverCardContent, HoverCardPositioner };
