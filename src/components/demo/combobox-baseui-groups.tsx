"use client";

import {
  Combobox,
  ComboboxClear,
  ComboboxCollection,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
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

export default function ComboboxGroups() {
  const id = React.useId();

  return (
    <div className="max-w-3xs w-full">
      <Combobox items={foodOptions}>
        <div className="relative flex flex-col gap-2">
          <Label htmlFor={id}>Choose a food</Label>
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
          <ComboboxPopup className="pt-0">
            <ComboboxEmpty className="not-empty:pt-3">
              No results found.
            </ComboboxEmpty>
            <ComboboxList>
              {(group: Group) => (
                <ComboboxGroup key={group.value} items={group.items}>
                  <ComboboxGroupLabel className="border-b mb-1">
                    {group.value}
                  </ComboboxGroupLabel>

                  <ComboboxCollection>
                    {(item: Item) => (
                      <ComboboxItem key={item.value} value={item}>
                        <ComboboxItemIndicator />
                        <div className="col-start-2">{item.label}</div>
                      </ComboboxItem>
                    )}
                  </ComboboxCollection>
                </ComboboxGroup>
              )}
            </ComboboxList>
          </ComboboxPopup>
        </ComboboxPositioner>
      </Combobox>
    </div>
  );
}

interface Group {
  value: string;
  items: Item[];
}

interface Item {
  value: string;
  label: string;
}

const foodOptions: Group[] = [
  {
    value: "Fruits",
    items: [
      { value: "apple", label: "Apple" },
      { value: "orange", label: "Orange" },
      { value: "banana", label: "Banana" },
      { value: "grape", label: "Grape" },
      { value: "mango", label: "Mango" },
      { value: "strawberry", label: "Strawberry" },
      { value: "pineapple", label: "Pineapple" },
      { value: "watermelon", label: "Watermelon" },
    ],
  },
  {
    value: "Vegetables",
    items: [
      { value: "carrot", label: "Carrot" },
      { value: "broccoli", label: "Broccoli" },
      { value: "spinach", label: "Spinach" },
      { value: "potato", label: "Potato" },
      { value: "tomato", label: "Tomato" },
      { value: "onion", label: "Onion" },
      { value: "cucumber", label: "Cucumber" },
      { value: "pepper", label: "Bell Pepper" },
    ],
  },
  {
    value: "Dairy",
    items: [
      { value: "milk", label: "Milk" },
      { value: "cheese", label: "Cheese" },
      { value: "yogurt", label: "Yogurt" },
      { value: "butter", label: "Butter" },
      { value: "cream", label: "Cream" },
      { value: "ghee", label: "Ghee" },
      { value: "paneer", label: "Paneer" },
      { value: "ice-cream", label: "Ice Cream" },
    ],
  },
];
