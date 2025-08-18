"use client";

import * as React from "react";
import {
  AppleIcon,
  BananaIcon,
  Check,
  CherryIcon,
  ChevronsUpDown,
  GrapeIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/registry/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverPositioner,
  PopoverTrigger,
} from "@/registry/components/ui/popover";

const fruits = [
  {
    value: "apple",
    label: "Apple",
    icon: AppleIcon,
  },
  {
    value: "banana",
    label: "Banana",
    icon: BananaIcon,
  },
  {
    value: "cherry",
    label: "Cherry",
    icon: CherryIcon,
  },
  {
    value: "grape",
    label: "Grape",
    icon: GrapeIcon,
  },
];

export default function ComboboxWithIcon() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(fruits[0].value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        render={
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          />
        }
      >
        <ComboboxValue value={value} />
        <ChevronsUpDown className="opacity-50" />
      </PopoverTrigger>
      <PopoverPositioner>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search fruit..." className="h-9" />
            <CommandList>
              <CommandEmpty>No fruit found.</CommandEmpty>
              <CommandGroup>
                {fruits.map((fruit) => (
                  <CommandItem
                    key={fruit.value}
                    value={fruit.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <fruit.icon />
                    {fruit.label}
                    <Check
                      className={cn(
                        "ml-auto",
                        value === fruit.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </PopoverPositioner>
    </Popover>
  );
}

const ComboboxValue = ({ value }: { value: string }) => {
  const fruit = fruits.find((fruit) => fruit.value === value);

  if (!fruit) {
    return <span>Select fruit...</span>;
  }

  return (
    <div className="flex items-center gap-2">
      <fruit.icon />
      {fruit.label}
    </div>
  );
};
