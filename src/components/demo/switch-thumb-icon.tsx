import { MoonIcon, SunIcon } from "lucide-react";

import { Switch, SwitchThumb } from "@/registry/components/ui/switch";

export default function SwitchThumbIcon() {
  return (
    <div className="flex items-center space-x-2 scale-150">
      <Switch>
        <SwitchThumb className="group/thumb flex items-center justify-center">
          <SunIcon className="size-2.5 group-data-[checked]/thumb:hidden" />
          <MoonIcon className="size-2.5 hidden group-data-[checked]/thumb:block" />
        </SwitchThumb>
      </Switch>
    </div>
  );
}
