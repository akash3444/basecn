import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/components/ui/toggle-group";
import { Bold, Italic, Underline } from "lucide-react";

export default function ToggleGroupDemo() {
  return (
    <ToggleGroup variant="outline" toggleMultiple>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
