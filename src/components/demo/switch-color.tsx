import { Label } from "@/registry/components/ui/label";
import { Switch } from "@/registry/components/ui/switch";

export default function SwitchColor() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch id="switch-color-default" defaultChecked />
        <Label htmlFor="switch-color-default">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch
          id="switch-color-blue"
          className="data-[checked]:bg-blue-500"
          defaultChecked
        />
        <Label htmlFor="switch-color-blue">Blue</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch
          id="switch-color-green"
          className="data-[checked]:bg-green-500"
          defaultChecked
        />
        <Label htmlFor="switch-color-green">Green</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch
          id="switch-color-red"
          className="data-[checked]:bg-red-500"
          defaultChecked
        />
        <Label htmlFor="switch-color-red">Red</Label>
      </div>
    </div>
  );
}
