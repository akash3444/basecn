"use client";

import * as React from "react";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/registry/components/ui/button";
import { ButtonGroup } from "@/registry/components/ui/button-group";
import { Input } from "@/registry/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectPositioner,
  SelectTrigger,
} from "@/registry/components/ui/select";

const CURRENCIES = [
  {
    value: "$",
    label: "US Dollar",
  },
  {
    value: "€",
    label: "Euro",
  },
  {
    value: "£",
    label: "British Pound",
  },
];

export default function ButtonGroupSelect() {
  const [currency, setCurrency] = React.useState("$");

  return (
    <ButtonGroup>
      <ButtonGroup>
        <Select
          value={currency}
          onValueChange={(value) => setCurrency(value as string)}
        >
          <SelectTrigger className="font-mono">{currency}</SelectTrigger>
          <SelectPositioner>
            <SelectContent className="min-w-24">
              {CURRENCIES.map((currency) => (
                <SelectItem key={currency.value} value={currency.value}>
                  {currency.value}{" "}
                  <span className="text-muted-foreground">
                    {currency.label}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </SelectPositioner>
        </Select>
        <Input placeholder="10.00" pattern="[0-9]*" />
      </ButtonGroup>
      <ButtonGroup>
        <Button aria-label="Send" size="icon" variant="outline">
          <ArrowRightIcon />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  );
}
