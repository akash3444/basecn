"use client";

import {
  Combobox,
  ComboboxClear,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxList,
  ComboboxPopup,
  ComboboxPositioner,
  ComboboxTrigger,
} from "@/registry/components/ui/combobox";
import { Label } from "@/registry/components/ui/label";
import { ChevronDownIcon } from "lucide-react";
import * as React from "react";

export default function ComboboxDemo() {
  const id = React.useId();

  return (
    <div className="max-w-3xs w-full">
      <Combobox items={fruits}>
        <div className="relative flex flex-col gap-2">
          <Label htmlFor={id}>Choose a fruit</Label>
          <ComboboxInput placeholder="e.g. Apple" id={id} />
          <div className="absolute right-2 bottom-0 flex h-9 items-center justify-center text-muted-foreground">
            <ComboboxClear />
            <ComboboxTrigger
              className="h-9 w-6 text-muted-foreground shadow-none bg-transparent hover:bg-transparent border-none"
              aria-label="Open popup"
            >
              <ChevronDownIcon className="size-4" />
            </ComboboxTrigger>
          </div>
        </div>

        <ComboboxPositioner sideOffset={6}>
          <ComboboxPopup>
            <ComboboxEmpty>No fruits found.</ComboboxEmpty>
            <ComboboxList>
              {(item: string) => (
                <ComboboxItem key={item} value={item}>
                  <ComboboxItemIndicator />
                  <div className="col-start-2">{item}</div>
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxPopup>
        </ComboboxPositioner>
      </Combobox>
    </div>
  );
}

const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Pineapple",
  "Grape",
  "Mango",
  "Strawberry",
  "Blueberry",
  "Raspberry",
  "Blackberry",
  "Cherry",
  "Peach",
  "Pear",
  "Plum",
  "Kiwi",
  "Watermelon",
  "Cantaloupe",
  "Honeydew",
  "Papaya",
  "Guava",
  "Lychee",
  "Pomegranate",
  "Apricot",
  "Grapefruit",
  "Passionfruit",
];
