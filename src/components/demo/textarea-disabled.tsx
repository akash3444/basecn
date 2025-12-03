import { Textarea } from "@/registry/components/ui/textarea";

export default function TextareaDisabled() {
  return (
    <Textarea
      placeholder="Type your message here."
      disabled
      className="max-w-sm"
    />
  );
}
