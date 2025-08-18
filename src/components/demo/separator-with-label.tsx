import { Separator } from "@/registry/components/ui/separator";

export default function SeparatorWithLabel() {
  return (
    <div className="w-full max-w-xl flex">
      <div className="min-w-16 min-h-full bg-muted rounded-lg grow" />

      {/* Vertical Separator */}
      <div className="w-full flex flex-col items-center justify-center gap-2 overflow-hidden px-4">
        <Separator className="flex-grow" orientation="vertical" />
        <span className="text-sm text-muted-foreground">OR</span>
        <Separator className="flex-grow" orientation="vertical" />
      </div>

      <div className="w-full min-w-xs">
        <div className="h-16 w-full bg-muted rounded-lg" />

        {/* Horizontal Separator */}
        <div className="my-6 w-full flex items-center justify-center gap-2 overflow-hidden">
          <Separator className="flex-grow" />
          <span className="text-sm text-muted-foreground">OR</span>
          <Separator className="flex-grow" />
        </div>

        <div className="h-16 w-full bg-muted rounded-lg" />

        {/* Horizontal Separator */}
        <div className="my-6 w-full flex items-center justify-center overflow-hidden">
          <Separator className="flex-grow" />
          <span className="text-sm text-muted-foreground border px-2 rounded-full">
            OR
          </span>
          <Separator className="flex-grow" />
        </div>

        <div className="h-16 w-full bg-muted rounded-lg" />
      </div>

      {/* Vertical Separator */}
      <div className="w-full flex flex-col items-center justify-center overflow-hidden px-4">
        <Separator className="flex-grow" orientation="vertical" />
        <span className="text-sm text-muted-foreground border px-2 rounded-full">
          OR
        </span>
        <Separator className="flex-grow" orientation="vertical" />
      </div>

      <div className="min-w-16 min-h-full bg-muted rounded-lg grow" />
    </div>
  );
}
