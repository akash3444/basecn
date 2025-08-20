import { RadioGroup } from "@/registry/components/ui/radio-group";
import { Radio as RadioPrimitive } from "@base-ui-components/react/radio";
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

export default function RadioGroupCards() {
  return (
    <RadioGroup
      defaultValue={fruits[0].value}
      className="flex items-center gap-6"
    >
      {fruits.map((fruit) => (
        <RadioPrimitive.Root
          key={fruit.value}
          value={fruit.value}
          data-slot="checkbox"
          className="outline rounded-lg p-3 relative data-[checked]:outline-primary data-[checked]:outline-2 data-[checked]:bg-primary/5"
        >
          <fruit.icon />
          <RadioPrimitive.Indicator
            data-slot="checkbox-indicator"
            className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
          >
            <CircleCheckIcon className="size-7 fill-primary stroke-primary-foreground" />
          </RadioPrimitive.Indicator>
        </RadioPrimitive.Root>
      ))}
    </RadioGroup>
  );
}
