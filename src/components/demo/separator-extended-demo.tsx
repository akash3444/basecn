import { Separator } from "@/registry/components/ui/separator";

export default function SeparatorDemo() {
  return (
    <div className="max-w-xs">
      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">Base UI</h4>
        <p className="text-muted-foreground text-sm">
          Unstyled UI components for building accessible web apps and design
          systems.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
        <Separator orientation="vertical" />
        <div>Releases</div>
      </div>
    </div>
  );
}
