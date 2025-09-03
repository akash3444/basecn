"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/registry/components/ui/button";
import { Calendar } from "@/registry/components/ui/calendar";
import { Label } from "@/registry/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverPositioner,
  PopoverTrigger,
} from "@/registry/components/ui/popover";

export default function CalendarDateOfBirthPicker() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="date" className="px-1">
        Date of birth
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          render={<Button variant="outline" />}
          id="date"
          className="w-48 justify-between font-normal"
        >
          {date ? date.toLocaleDateString() : "Select date"}
          <ChevronDownIcon />
        </PopoverTrigger>
        <PopoverPositioner align="start">
          <PopoverContent className="w-auto overflow-hidden p-0">
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              onSelect={(date) => {
                setDate(date);
                setOpen(false);
              }}
            />
          </PopoverContent>
        </PopoverPositioner>
      </Popover>
    </div>
  );
}
