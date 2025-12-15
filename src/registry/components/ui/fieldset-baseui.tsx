"use client";

import * as React from "react";
import { Fieldset as BaseFieldset} from "@base-ui/react/fieldset";
import { cn } from "@/lib/utils";

const FieldsetRoot = React.forwardRef<HTMLDivElement, BaseFieldset.Root.Props>(
  ({ className, ...props }, ref) => (
    <BaseFieldset.Root
      ref={ref}
      data-slot="fieldset-root"
      className={cn(
        "flex flex-col gap-6",
        "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
        className,
      )}
      {...props}
    />
  ),
);
FieldsetRoot.displayName = "FieldsetRoot";

const FieldsetLegend = React.forwardRef<
  HTMLDivElement,
  BaseFieldset.Legend.Props
>(({ className, ...props }, ref) => (
  <BaseFieldset.Root
    ref={ref}
    data-slot="fieldset-legend"
    className={cn(
      "mb-3 font-medium",
      "data-[variant=legend]:text-base",
      "data-[variant=label]:text-sm",
      className,
    )}
    {...props}
  />
));
FieldsetLegend.displayName = "FieldsetLegend";
export { FieldsetRoot, FieldsetLegend };
