import { Label } from "@/registry/components/ui/label";
import { Textarea } from "@/registry/components/ui/textarea";

export default function TextareaWithLabel() {
  return (
    <div className="grid w-full gap-3 max-w-sm">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  );
}
