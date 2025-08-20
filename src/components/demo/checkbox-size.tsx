import { Checkbox } from "@/registry/components/ui/checkbox";

export default function CheckboxSize() {
  return (
    <div className="flex items-center gap-3">
      <Checkbox defaultChecked />
      <Checkbox className="size-6 [&_svg]:size-4" defaultChecked />
      <Checkbox className="size-7 [&_svg]:size-4.5" defaultChecked />
    </div>
  );
}
