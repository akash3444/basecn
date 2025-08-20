import { Label } from "@/registry/components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/components/ui/radio-group";

export default function RadioGroupColor() {
  return (
    <RadioGroup defaultValue="default">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="default" id="color-r1" />
        <Label htmlFor="color-r1">Default</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem
          value="red"
          id="color-r2"
          className="[&_svg]:fill-red-500 [&_svg]:stroke-red-500 border-red-400"
        />
        <Label htmlFor="color-r2">Red</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem
          value="blue"
          id="color-r3"
          className="[&_svg]:fill-blue-500 [&_svg]:stroke-blue-500 border-blue-400"
        />
        <Label htmlFor="color-r3">Blue</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem
          value="green"
          id="color-r4"
          className="[&_svg]:fill-green-500 [&_svg]:stroke-green-500 border-green-400"
        />
        <Label htmlFor="color-r4">Green</Label>
      </div>
    </RadioGroup>
  );
}
