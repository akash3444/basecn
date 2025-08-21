"use client";

import { Label } from "@/registry/components/ui/label";
import { Switch } from "@/registry/components/ui/switch";

export default function SwitchDisabled() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="toggle-theme" disabled />
      <Label htmlFor="toggle-theme">Toggle Theme</Label>
    </div>
  );
}
