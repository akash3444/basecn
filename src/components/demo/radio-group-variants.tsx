import { Label } from "@/registry/components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/components/ui/radio-group";

export default function RadioGroupVariants() {
  return (
    <div className="flex gap-6 scale-115">
      <RadioGroup defaultValue="default">
        <div className="flex items-center gap-3">
          <RadioGroupItem value="default" id="default-r1" />
          <Label htmlFor="default-r1">Default</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="comfortable" id="default-r2" />
          <Label htmlFor="default-r2">Comfortable</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="compact" id="default-r3" />
          <Label htmlFor="default-r3">Compact</Label>
        </div>
      </RadioGroup>

      <RadioGroup defaultValue="default">
        <div className="flex items-center gap-3">
          <RadioGroupItem
            value="default"
            id="solid-r1"
            className="bg-primary border-primary [&_svg]:size-1.75 [&_svg]:fill-primary-foreground [&_svg]:stroke-primary-foreground"
          />
          <Label htmlFor="solid-r1">Default</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem
            value="comfortable"
            id="solid-r2"
            className="bg-primary border-primary [&_svg]:size-1.75 [&_svg]:fill-primary-foreground [&_svg]:stroke-primary-foreground"
          />
          <Label htmlFor="solid-r2">Comfortable</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem
            value="compact"
            id="solid-r3"
            className="bg-primary border-primary [&_svg]:size-1.75 [&_svg]:fill-primary-foreground [&_svg]:stroke-primary-foreground"
          />
          <Label htmlFor="solid-r3">Compact</Label>
        </div>
      </RadioGroup>

      <RadioGroup defaultValue="default">
        <div className="flex items-center gap-3">
          <RadioGroupItem
            value="default"
            id="soft-r1"
            className="bg-primary/5 border-transparent shadow-none"
          />
          <Label htmlFor="soft-r1">Default</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem
            value="comfortable"
            id="soft-r2"
            className="bg-primary/5 border-transparent shadow-none"
          />
          <Label htmlFor="soft-r2">Comfortable</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem
            value="compact"
            id="soft-r3"
            className="bg-primary/5 border-transparent shadow-none"
          />
          <Label htmlFor="soft-r3">Compact</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
