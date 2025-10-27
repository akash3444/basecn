import { HelpCircle, InfoIcon } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/components/ui/input-group";
import {
  Tooltip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from "@/registry/components/ui/tooltip";

export default function InputGroupTooltip() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Enter password" type="password" />
        <InputGroupAddon align="inline-end">
          <Tooltip>
            <TooltipTrigger
              render={
                <InputGroupButton
                  variant="ghost"
                  aria-label="Info"
                  size="icon-xs"
                />
              }
            >
              <InfoIcon />
            </TooltipTrigger>
            <TooltipPositioner>
              <TooltipContent>
                <p>Password must be at least 8 characters</p>
              </TooltipContent>
            </TooltipPositioner>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Your email address" />
        <InputGroupAddon align="inline-end">
          <Tooltip>
            <TooltipTrigger
              render={
                <InputGroupButton
                  variant="ghost"
                  aria-label="Help"
                  size="icon-xs"
                />
              }
            >
              <HelpCircle />
            </TooltipTrigger>
            <TooltipPositioner>
              <TooltipContent>
                <p>We&apos;ll use this to send you notifications</p>
              </TooltipContent>
            </TooltipPositioner>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Enter API key" />
        <Tooltip>
          <TooltipTrigger render={<InputGroupAddon />}>
            <InputGroupButton variant="ghost" aria-label="Help" size="icon-xs">
              <HelpCircle />
            </InputGroupButton>
          </TooltipTrigger>
          <TooltipPositioner side="left">
            <TooltipContent>
              <p>Click for help with API keys</p>
            </TooltipContent>
          </TooltipPositioner>
        </Tooltip>
      </InputGroup>
    </div>
  );
}
