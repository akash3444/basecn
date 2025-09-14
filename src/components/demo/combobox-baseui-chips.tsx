"use client";

import {
  Combobox,
  ComboboxChip,
  ComboboxChipRemove,
  ComboboxChips,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxList,
  ComboboxPopup,
  ComboboxPositioner,
  ComboboxValue,
} from "@/registry/components/ui/combobox";
import { Label } from "@/registry/components/ui/label";
import * as React from "react";

export default function ComboboxChipsDemo() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const id = React.useId();

  return (
    <Combobox items={langs} multiple>
      <div className="w-full max-w-xs flex flex-col gap-3">
        <Label htmlFor={id}>Programming languages</Label>
        <ComboboxChips ref={containerRef}>
          <ComboboxValue>
            {(value: ProgrammingLanguage[]) => (
              <React.Fragment>
                {value.map((language) => (
                  <ComboboxChip key={language.id} aria-label={language.value}>
                    {language.value}
                    <ComboboxChipRemove />
                  </ComboboxChip>
                ))}
                <ComboboxInput
                  id={id}
                  placeholder={value.length > 0 ? "" : "e.g. TypeScript"}
                  className="flex-1 h-6 border-0 bg-transparent pl-2 text-base outline-none shadow-none focus-visible:ring-0"
                />
              </React.Fragment>
            )}
          </ComboboxValue>
        </ComboboxChips>
      </div>

      <ComboboxPositioner
        className="z-50 outline-none"
        sideOffset={6}
        anchor={containerRef}
      >
        <ComboboxPopup>
          <ComboboxEmpty>No languages found.</ComboboxEmpty>
          <ComboboxList>
            {(language: ProgrammingLanguage) => (
              <ComboboxItem key={language.id} value={language}>
                <ComboboxItemIndicator />
                <div className="col-start-2">{language.value}</div>
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxPopup>
      </ComboboxPositioner>
    </Combobox>
  );
}

interface ProgrammingLanguage {
  id: string;
  value: string;
}

const langs: ProgrammingLanguage[] = [
  { id: "js", value: "JavaScript" },
  { id: "ts", value: "TypeScript" },
  { id: "py", value: "Python" },
  { id: "java", value: "Java" },
  { id: "cpp", value: "C++" },
  { id: "cs", value: "C#" },
  { id: "php", value: "PHP" },
  { id: "ruby", value: "Ruby" },
  { id: "go", value: "Go" },
  { id: "rust", value: "Rust" },
  { id: "swift", value: "Swift" },
];
