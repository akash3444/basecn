import { Button } from "@/registry/components/ui/button";
import { ButtonGroup } from "@/registry/components/ui/button-group";
import { Kbd, KbdGroup } from "@/registry/components/ui/kbd";
import {
  Tooltip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from "@/registry/components/ui/tooltip";

export default function KbdTooltip() {
  return (
    <div className="flex flex-wrap gap-4">
      <ButtonGroup>
        <Tooltip>
          <TooltipTrigger render={<Button size="sm" variant="outline" />}>
            Save
          </TooltipTrigger>
          <TooltipPositioner>
            <TooltipContent>
              <div className="flex items-center gap-2">
                Save Changes <Kbd>S</Kbd>
              </div>
            </TooltipContent>
          </TooltipPositioner>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger render={<Button size="sm" variant="outline" />}>
            Print
          </TooltipTrigger>
          <TooltipPositioner>
            <TooltipContent>
              <div className="flex items-center gap-2">
                Print Document{" "}
                <KbdGroup>
                  <Kbd>Ctrl</Kbd>
                  <Kbd>P</Kbd>
                </KbdGroup>
              </div>
            </TooltipContent>
          </TooltipPositioner>
        </Tooltip>
      </ButtonGroup>
    </div>
  );
}
