import { Checkbox as CheckboxPrimitive } from "@base-ui-components/react/checkbox";
import {
  AppleIcon,
  BananaIcon,
  CherryIcon,
  CircleCheckIcon,
} from "lucide-react";

const fruits = [
  {
    name: "Apple",
    value: "apple",
    icon: AppleIcon,
    defaultChecked: true,
  },
  {
    name: "Banana",
    value: "banana",
    icon: BananaIcon,
  },
  {
    name: "Cherry",
    value: "cherry",
    icon: CherryIcon,
    defaultChecked: true,
  },
];

export default function CheckboxCards() {
  return (
    <div className="flex items-center gap-6">
      {fruits.map((fruit) => (
        <div key={fruit.value} className="flex items-center gap-3">
          <CheckboxPrimitive.Root
            data-slot="checkbox"
            defaultChecked={fruit.defaultChecked}
            className="outline rounded-lg p-3 relative data-[checked]:outline-primary data-[checked]:outline-2 data-[checked]:bg-primary/5"
          >
            <fruit.icon />
            <CheckboxPrimitive.Indicator
              data-slot="checkbox-indicator"
              className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
            >
              <CircleCheckIcon className="size-7 fill-primary stroke-primary-foreground" />
            </CheckboxPrimitive.Indicator>
          </CheckboxPrimitive.Root>
        </div>
      ))}
    </div>
  );
}
