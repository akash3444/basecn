import { Link2Icon } from "lucide-react";

import {
  ButtonGroup,
  ButtonGroupText,
} from "@/registry/components/ui/button-group";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/components/ui/input-group";
import { Label } from "@/registry/components/ui/label";

export default function InputGroupButtonGroup() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <ButtonGroup>
        <ButtonGroupText render={<Label htmlFor="url" />}>
          https://
        </ButtonGroupText>
        <InputGroup>
          <InputGroupInput id="url" />
          <InputGroupAddon align="inline-end">
            <Link2Icon />
          </InputGroupAddon>
        </InputGroup>
        <ButtonGroupText>.com</ButtonGroupText>
      </ButtonGroup>
    </div>
  );
}
