import { Checkbox } from "@/registry/components/ui/checkbox";

export default function CheckboxColor() {
  return (
    <div className="flex items-center gap-3">
      <Checkbox
        defaultChecked
        className="size-5 data-[checked]:bg-blue-500 data-[checked]:border-blue-500"
      />
      <Checkbox
        defaultChecked
        className="size-5 data-[checked]:bg-gray-200 data-[checked]:border-gray-200 data-[checked]:[&_svg]:text-black"
      />
      <Checkbox
        defaultChecked
        className="size-5 data-[checked]:bg-red-500 data-[checked]:border-red-500"
      />
      <Checkbox
        defaultChecked
        className="size-5 data-[checked]:bg-green-500 data-[checked]:border-green-500"
      />
    </div>
  );
}
