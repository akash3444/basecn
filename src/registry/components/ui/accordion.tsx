"use client";

import * as React from "react";
import { Accordion as BaseAccordion } from "@base-ui-components/react/accordion";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof BaseAccordion.Root>) {
  return <BaseAccordion.Root data-slot="accordion" keepMounted {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof BaseAccordion.Item>) {
  return (
    <BaseAccordion.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseAccordion.Trigger>) {
  return (
    <BaseAccordion.Header className="flex">
      <BaseAccordion.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-panel-open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </BaseAccordion.Trigger>
    </BaseAccordion.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseAccordion.Panel>) {
  return (
    <BaseAccordion.Panel
      data-slot="accordion-content"
      className="data-[closed]:animate-accordion-collapse data-[open]:animate-accordion-expand overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </BaseAccordion.Panel>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
