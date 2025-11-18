import { Combobox as ComboboxPrimitive } from "@base-ui-components/react/combobox";
import { CheckIcon, XIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/registry/components/ui/button";
import { Input } from "@/registry/components/ui/input";
import { Separator } from "@/registry/components/ui/separator";
import { RefObject } from "react";

const Combobox = ComboboxPrimitive.Root;

function ComboboxInput(
  props: ComboboxPrimitive.Input.Props & {
    ref?: RefObject<HTMLInputElement | null>;
  }
) {
  return (
    <ComboboxPrimitive.Input
      data-slot="combobox-input"
      render={<Input />}
      {...props}
    />
  );
}

function ComboboxTrigger(props: ComboboxPrimitive.Trigger.Props) {
  return (
    <ComboboxPrimitive.Trigger
      data-slot="combobox-trigger"
      render={<Button variant="outline" />}
      {...props}
    />
  );
}

function ComboboxIcon(props: ComboboxPrimitive.Icon.Props) {
  return <ComboboxPrimitive.Icon data-slot="combobox-icon" {...props} />;
}

function ComboboxClear({
  children,
  className,
  ...props
}: ComboboxPrimitive.Clear.Props) {
  return (
    <ComboboxPrimitive.Clear
      className={cn(
        "flex h-9 w-6 items-center justify-center rounded bg-transparent p-0",
        className
      )}
      aria-label="Clear selection"
      data-slot="combobox-clear"
      {...props}
    >
      {children ?? <XIcon className="size-4" />}
    </ComboboxPrimitive.Clear>
  );
}

function ComboboxValue(props: ComboboxPrimitive.Value.Props) {
  return <ComboboxPrimitive.Value data-slot="combobox-value" {...props} />;
}

function ComboboxChips({
  className,
  ...props
}: ComboboxPrimitive.Chips.Props & { ref?: RefObject<HTMLDivElement | null> }) {
  return (
    <ComboboxPrimitive.Chips
      data-slot="combobox-chips"
      className={cn(
        "min-h-9 flex flex-wrap items-start gap-1 rounded-md border px-1.5 py-1.5 transition-[color,box-shadow]",
        "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]",
        className
      )}
      {...props}
    />
  );
}

function ComboboxChip({ className, ...props }: ComboboxPrimitive.Chip.Props) {
  return (
    <ComboboxPrimitive.Chip
      data-slot="combobox-chip"
      className={cn(
        "flex items-center gap-1 rounded-md bg-muted px-1 ps-2 pe-0 text-xs outline-none cursor-default",
        className
      )}
      {...props}
    />
  );
}

function ComboboxChipRemove({
  className,
  children,
  ...props
}: ComboboxPrimitive.ChipRemove.Props) {
  return (
    <ComboboxPrimitive.ChipRemove
      data-slot="combobox-chip-remove"
      className={cn(
        "rounded-md p-1 text-inherit hover:bg-accent-foreground/10",
        className
      )}
      aria-label="Remove"
      {...props}
    >
      {children ?? <XIcon className="size-3.5" />}
    </ComboboxPrimitive.ChipRemove>
  );
}

function ComboboxPopup({ className, ...props }: ComboboxPrimitive.Popup.Props) {
  return (
    <ComboboxPrimitive.Popup
      data-slot="combobox-popup"
      className={cn(
        "w-(--anchor-width) max-h-[min(var(--available-height),23rem)] max-w-(--available-width) origin-(--transform-origin) overflow-y-auto scroll-pt-2 scroll-pb-2 overscroll-contain rounded-md bg-popover py-2 shadow-md outline-1 outline-border transition-[transform,scale,opacity] data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[side=none]:data-[ending-style]:transition-none data-[starting-style]:scale-95 data-[starting-style]:opacity-0 data-[side=none]:data-[starting-style]:scale-100 data-[side=none]:data-[starting-style]:opacity-100 data-[side=none]:data-[starting-style]:transition-none dark:shadow-none",
        className
      )}
      {...props}
    />
  );
}

function ComboboxPositioner({
  className,
  ...props
}: ComboboxPrimitive.Positioner.Props) {
  return (
    <ComboboxPrimitive.Portal>
      <ComboboxPrimitive.Positioner
        data-slot="combobox-positioner"
        className={cn("outline-none", className)}
        {...props}
      />
    </ComboboxPrimitive.Portal>
  );
}

function ComboboxArrow(props: ComboboxPrimitive.Arrow.Props) {
  return <ComboboxPrimitive.Arrow data-slot="combobox-arrow" {...props} />;
}

function ComboboxStatus({
  className,
  ...props
}: ComboboxPrimitive.Status.Props) {
  return (
    <ComboboxPrimitive.Status
      data-slot="combobox-status"
      className={cn(
        "px-4.5 py-2 text-sm text-muted-foreground empty:m-0 empty:p-0",
        className
      )}
      {...props}
    />
  );
}

function ComboboxEmpty({ className, ...props }: ComboboxPrimitive.Empty.Props) {
  return (
    <ComboboxPrimitive.Empty
      data-slot="combobox-empty"
      className={cn(
        "flex items-center justify-center text-muted-foreground text-sm not-empty:py-1",
        className
      )}
      {...props}
    />
  );
}

function ComboboxList(props: ComboboxPrimitive.List.Props) {
  return <ComboboxPrimitive.List data-slot="combobox-list" {...props} />;
}

function ComboboxRow(props: ComboboxPrimitive.Row.Props) {
  return <ComboboxPrimitive.Row data-slot="combobox-row" {...props} />;
}

function ComboboxItem({ className, ...props }: ComboboxPrimitive.Item.Props) {
  return (
    <ComboboxPrimitive.Item
      data-slot="combobox-item"
      className={cn(
        "grid cursor-default grid-cols-[0.95rem_1fr] items-center gap-2 py-2 pr-8 pl-4 text-sm leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-accent-foreground data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-2 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:-z-1 data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-accent",
        className
      )}
      {...props}
    />
  );
}

function ComboboxItemIndicator({
  className,
  children,
  ...props
}: ComboboxPrimitive.ItemIndicator.Props) {
  return (
    <ComboboxPrimitive.ItemIndicator
      data-slot="combobox-item-indicator"
      className={cn("col-start-1", className)}
      {...props}
    >
      {children ?? <CheckIcon className="size-4" />}
    </ComboboxPrimitive.ItemIndicator>
  );
}

function ComboboxSeparator(props: ComboboxPrimitive.Separator.Props) {
  return (
    <ComboboxPrimitive.Separator
      data-slot="combobox-separator"
      render={<Separator />}
      {...props}
    />
  );
}

function ComboboxGroup({ className, ...props }: ComboboxPrimitive.Group.Props) {
  return (
    <ComboboxPrimitive.Group
      data-slot="combobox-group"
      className={cn("mb-3 last:mb-0", className)}
      {...props}
    />
  );
}

function ComboboxGroupLabel({
  className,
  ...props
}: ComboboxPrimitive.GroupLabel.Props) {
  return (
    <ComboboxPrimitive.GroupLabel
      data-slot="combobox-group-label"
      className={cn(
        "z-1 sticky top-0 bg-background pl-4 text-sm text-muted-foreground py-2",
        className
      )}
      {...props}
    />
  );
}

function ComboboxCollection(props: ComboboxPrimitive.Collection.Props) {
  return (
    <ComboboxPrimitive.Collection data-slot="combobox-collection" {...props} />
  );
}

export {
  Combobox,
  ComboboxArrow,
  ComboboxChip,
  ComboboxChipRemove,
  ComboboxChips,
  ComboboxClear,
  ComboboxCollection,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxIcon,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxList,
  ComboboxPopup,
  ComboboxPositioner,
  ComboboxRow,
  ComboboxSeparator,
  ComboboxStatus,
  ComboboxTrigger,
  ComboboxValue,
};
