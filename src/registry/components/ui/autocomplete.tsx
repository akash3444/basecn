import { XIcon } from "lucide-react";
import { Autocomplete as AutocompletePrimitive } from "@base-ui/react/autocomplete";

import { cn } from "@/lib/utils";
import { Button } from "@/registry/components/ui/button";
import { Input } from "@/registry/components/ui/input";

const Autocomplete = AutocompletePrimitive.Root;

function AutocompleteInput(props: AutocompletePrimitive.Input.Props) {
  return (
    <AutocompletePrimitive.Input
      data-slot="autocomplete-input"
      render={<Input />}
      {...props}
    />
  );
}

function AutocompletePopup({
  className,
  ...props
}: AutocompletePrimitive.Popup.Props) {
  return (
    <AutocompletePrimitive.Popup
      data-slot="autocomplete-popup"
      className={cn(
        "w-(--anchor-width) max-h-[min(var(--available-height),23rem)] max-w-(--available-width) overflow-y-auto scroll-pt-2 scroll-pb-2 overscroll-contain rounded-md bg-popover text-popover-foreground shadow-md outline-1 outline-border dark:shadow-none",
        className
      )}
      {...props}
    />
  );
}

function AutocompletePositioner({
  className,
  ...props
}: AutocompletePrimitive.Positioner.Props) {
  return (
    <AutocompletePrimitive.Portal>
      <AutocompletePrimitive.Positioner
        data-slot="autocomplete-positioner"
        className={cn("z-50", className)}
        {...props}
      />
    </AutocompletePrimitive.Portal>
  );
}

function AutocompleteList({
  className,
  ...props
}: AutocompletePrimitive.List.Props) {
  return (
    <AutocompletePrimitive.List
      data-slot="autocomplete-list"
      className={cn("not-empty:p-1.5", className)}
      {...props}
    />
  );
}

function AutocompleteEmpty({
  className,
  ...props
}: AutocompletePrimitive.Empty.Props) {
  return (
    <AutocompletePrimitive.Empty
      data-slot="autocomplete-empty"
      className={cn(
        "flex items-center justify-center text-muted-foreground text-sm not-empty:py-3",
        className
      )}
      {...props}
    />
  );
}

function AutocompleteItem({
  className,
  ...props
}: AutocompletePrimitive.Item.Props) {
  return (
    <AutocompletePrimitive.Item
      data-slot="autocomplete-item"
      className={cn(
        "py-1.5 px-3 text-sm rounded-md data-highlighted:bg-accent data-highlighted:text-accent-foreground",
        className
      )}
      {...props}
    />
  );
}

function AutocompleteGroup({
  className,
  ...props
}: AutocompletePrimitive.Group.Props) {
  return (
    <AutocompletePrimitive.Group
      data-slot="autocomplete-group"
      className={cn("block pb-2", className)}
      {...props}
    />
  );
}

function AutocompleteGroupLabel({
  className,
  ...props
}: AutocompletePrimitive.GroupLabel.Props) {
  return (
    <AutocompletePrimitive.GroupLabel
      data-slot="autocomplete-group-label"
      className={cn(
        "bg-popover pl-3 py-2 text-sm text-muted-foreground font-medium",
        className
      )}
      {...props}
    />
  );
}

function AutocompleteCollection({
  ...props
}: AutocompletePrimitive.Collection.Props) {
  return (
    <AutocompletePrimitive.Collection
      data-slot="autocomplete-collection"
      {...props}
    />
  );
}

function AutocompleteStatus({
  className,
  ...props
}: AutocompletePrimitive.Status.Props) {
  return (
    <AutocompletePrimitive.Status
      data-slot="autocomplete-status"
      className={cn(
        "px-4.5 text-sm text-muted-foreground my-3 empty:m-0 empty:p-0",
        className
      )}
      {...props}
    />
  );
}

function AutocompleteClear({
  className,
  children,
  ...props
}: AutocompletePrimitive.Clear.Props) {
  return (
    <AutocompletePrimitive.Clear
      data-slot="autocomplete-clear"
      className={cn(className)}
      {...props}
    >
      {children ?? <XIcon className="w-4 h-4 text-muted-foreground" />}
    </AutocompletePrimitive.Clear>
  );
}

function AutocompleteRow({
  className,
  ...props
}: AutocompletePrimitive.Row.Props) {
  return (
    <AutocompletePrimitive.Row
      data-slot="autocomplete-row"
      className={cn(className)}
      {...props}
    />
  );
}

function AutocompleteTrigger({
  className,
  ...props
}: AutocompletePrimitive.Trigger.Props) {
  return (
    <AutocompletePrimitive.Trigger
      data-slot="autocomplete-trigger"
      className={cn(className)}
      render={<Button variant="outline" />}
      {...props}
    />
  );
}

export {
  Autocomplete,
  AutocompleteClear,
  AutocompleteCollection,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
  AutocompletePositioner,
  AutocompleteRow,
  AutocompleteStatus,
  AutocompleteTrigger,
};
