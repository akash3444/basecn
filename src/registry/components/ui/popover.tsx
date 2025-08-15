import * as React from "react";
import { Popover as BasePopover } from "@base-ui-components/react/popover";

import { cn } from "@/lib/utils";

function Popover({ ...props }: React.ComponentProps<typeof BasePopover.Root>) {
  return <BasePopover.Root data-slot="popover" {...props} />;
}

function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof BasePopover.Trigger>) {
  return <BasePopover.Trigger data-slot="popover-trigger" {...props} />;
}

function PopoverPositioner({
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof BasePopover.Positioner>) {
  return (
    <BasePopover.Portal>
      <BasePopover.Positioner
        data-slot="popover-positioner"
        sideOffset={sideOffset}
        {...props}
      />
    </BasePopover.Portal>
  );
}

function PopoverContent({
  className,
  ...props
}: React.ComponentProps<typeof BasePopover.Popup>) {
  return (
    <BasePopover.Popup
      data-slot="popover-content"
      className={cn(
        "bg-popover text-popover-foreground data-[open]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[open]:fade-in-0 data-[closed]:zoom-out-95 data-[open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        className
      )}
      {...props}
    />
  );
}

function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof BasePopover.Arrow>) {
  return <BasePopover.Arrow data-slot="popover-anchor" {...props} />;
}

export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
  PopoverPositioner,
};
