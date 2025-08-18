import { Button } from "@/registry/components/ui/button";

export default function ButtonShape() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button className="rounded-none">Rectangular</Button>
      <Button>Square</Button>
      <Button className="rounded-full">Rounded</Button>
    </div>
  );
}
