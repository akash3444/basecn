import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectPositioner,
  SelectTrigger,
  SelectValue,
} from "@/registry/components/ui/select";

export default function SelectDemo() {
  return (
    <Select items={items}>
      <SelectTrigger className="max-w-xs w-full">
        <SelectValue placeholder="Select a timezone" />
      </SelectTrigger>

      <SelectPositioner alignItemWithTrigger>
        <SelectContent>
          {Object.entries(timezones).map(([group, items]) => (
            <SelectGroup key={group}>
              <SelectLabel>{group}</SelectLabel>
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          ))}
        </SelectContent>
      </SelectPositioner>
    </Select>
  );
}

const timezones = {
  "North America": [
    {
      value: "est",
      label: "Eastern Standard Time (EST)",
    },
    {
      value: "cst",
      label: "Central Standard Time (CST)",
    },
    {
      value: "mst",
      label: "Mountain Standard Time (MST)",
    },
    {
      value: "pst",
      label: "Pacific Standard Time (PST)",
    },
    {
      value: "akst",
      label: "Alaska Standard Time (AKST)",
    },
    {
      value: "hst",
      label: "Hawaii Standard Time (HST)",
    },
  ],
  "Europe & Africa": [
    {
      value: "gmt",
      label: "Greenwich Mean Time (GMT)",
    },
    {
      value: "cet",
      label: "Central European Time (CET)",
    },
    {
      value: "eet",
      label: "Eastern European Time (EET)",
    },
    {
      value: "west",
      label: "Western European Summer Time (WEST)",
    },
    {
      value: "cat",
      label: "Central Africa Time (CAT)",
    },
    {
      value: "eat",
      label: "East Africa Time (EAT)",
    },
  ],
  Asia: [
    {
      value: "msk",
      label: "Moscow Time (MSK)",
    },
    {
      value: "ist",
      label: "India Standard Time (IST)",
    },
    {
      value: "cst_china",
      label: "China Standard Time (CST)",
    },
    {
      value: "jst",
      label: "Japan Standard Time (JST)",
    },
    {
      value: "kst",
      label: "Korea Standard Time (KST)",
    },
    {
      value: "ist_indonesia",
      label: "Indonesia Central Standard Time (WITA)",
    },
  ],
  "Australia & Pacific": [
    {
      value: "awst",
      label: "Australian Western Standard Time (AWST)",
    },
    {
      value: "acst",
      label: "Australian Central Standard Time (ACST)",
    },
    {
      value: "aest",
      label: "Australian Eastern Standard Time (AEST)",
    },
    {
      value: "nzst",
      label: "New Zealand Standard Time (NZST)",
    },
    {
      value: "fjt",
      label: "Fiji Time (FJT)",
    },
  ],
  "South America": [
    {
      value: "art",
      label: "Argentina Time (ART)",
    },
    {
      value: "bot",
      label: "Bolivia Time (BOT)",
    },
    {
      value: "brt",
      label: "Brasilia Time (BRT)",
    },
    {
      value: "clt",
      label: "Chile Standard Time (CLT)",
    },
  ],
};
const items = Object.values(timezones).flat();
