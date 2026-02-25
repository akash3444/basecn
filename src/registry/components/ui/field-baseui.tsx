"use client";

import * as React from "react";
import { Field as BaseField } from "@base-ui/react/field";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const fieldVariants = cva(
  "group/field flex w-full gap-3 data-[invalid=true]:text-destructive",
  {
    variants: {
      orientation: {
        vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
        horizontal: [
          "flex-row items-center",
          "[&>[data-slot=field-label]]:flex-auto",
          "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
        responsive: [
          "flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto",
          "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
          "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  },
);

const FieldRoot = React.forwardRef<HTMLDivElement, BaseField.Root.Props>(
  ({ className, ...props }, ref) => (
    <BaseField.Root
      ref={ref}
      data-slot="field-root"
      className={cn("flex-col *:w-full [&>.sr-only]:w-auto", className)}
      {...props}
    />
  ),
);
FieldRoot.displayName = "FieldRoot";

const FieldItem = React.forwardRef<HTMLDivElement, BaseField.Item.Props>(
  ({ className, ...props }, ref) => (
    <BaseField.Root
      ref={ref}
      data-slot="field-item"
      className={cn(
        "group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",
        className,
      )}
      {...props}
    />
  ),
);
FieldItem.displayName = "FieldItem";

const FieldLabel = React.forwardRef<HTMLLabelElement, BaseField.Label.Props>(
  ({ className, ...props }, ref) => (
    <BaseField.Label
      ref={ref}
      data-slot="field-label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50  peer-[[data-disabled]]:opacity-50",
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
        "has-[>[data-slot=field-root]]:w-full has-[>[data-slot=field-root]]:flex-col has-[>[data-slot=field-root]]:rounded-md has-[>[data-slot=field-root]]:border [&>*]:data-[slot=field-root]:p-4",
        "has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10",
        "data-[invalid]:text-destructive",
        className,
      )}
      {...props}
    />
  ),
);
FieldLabel.displayName = "FieldLabel";

const FieldControl = React.forwardRef<HTMLDivElement, BaseField.Control.Props>(
  ({ className, ...props }, ref) => (
    <BaseField.Control
      ref={ref}
      data-slot="field-control"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  ),
);
FieldControl.displayName = "FieldControl";

const FieldDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    data-slot="field-description"
    className={cn(
      "text-muted-foreground text-sm leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance",
      "last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5",
      "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
      className,
    )}
    {...props}
  />
));
FieldDescription.displayName = "FieldDescription";

const FieldError = React.forwardRef<
  HTMLParagraphElement,
  BaseField.Error.Props
>(({ className, children, ...props }, ref) => {
  return (
    <BaseField.Error
      ref={ref}
      data-slot="field-error"
      className={cn("text-destructive text-sm font-normal", className)}
      {...props}
    >
      {children}
    </BaseField.Error>
  );
});
FieldError.displayName = "FieldError";

export {
  FieldRoot,
  FieldLabel,
  FieldControl,
  FieldDescription,
  FieldError,
  FieldItem,
};
