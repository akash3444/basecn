import { cn } from "@/lib/utils";

interface AspectRatioProps extends React.ComponentProps<"div"> {
  ratio: number;
}

function AspectRatio({
  ratio,
  className,
  children,
  ...props
}: AspectRatioProps) {
  return (
    <div
      data-slot="aspect-ratio-wrapper"
      className="relative w-full"
      style={{ paddingBottom: `${(1 / ratio) * 100}%` }}
    >
      <div
        data-slot="aspect-ratio"
        className={cn("absolute inset-0", className)}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}

export { AspectRatio };
