import { Button } from "@/registry/components/ui/button";

export default function ButtonGroup() {
  return (
    <div className="flex *:not-first:not-last:rounded-none *:first:rounded-r-none *:last:rounded-l-none divide-x divide-primary-foreground/20">
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
      <Button>Button 4</Button>
    </div>
  );
}
