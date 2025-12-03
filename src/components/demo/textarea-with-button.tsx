import { Button } from "@/registry/components/ui/button";
import { Textarea } from "@/registry/components/ui/textarea";

export default function TextareaWithButton() {
  return (
    <div className="grid w-full gap-2 max-w-sm">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  );
}
