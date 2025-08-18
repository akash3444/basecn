import { Button } from "@/registry/components/ui/button";
import { SendHorizonal, Trash } from "lucide-react";

export default function ButtonDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button size="icon">
        <SendHorizonal />
      </Button>
      <Button>
        Send <SendHorizonal />
      </Button>
      <Button variant="destructive">
        <Trash /> Delete
      </Button>
    </div>
  );
}
