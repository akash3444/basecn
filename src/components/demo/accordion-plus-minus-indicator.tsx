import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/registry/components/ui/accordion";
import { Accordion as BaseAccordion } from "@base-ui-components/react/accordion";
import { Minus, Plus } from "lucide-react";

export default function AccordionTabs() {
  return (
    <Accordion
      className="w-full max-w-md mx-auto space-y-2"
      defaultValue={[accordionItems[0].value]}
      multiple={false}
    >
      {accordionItems.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="last:border-b border rounded-md"
        >
          <BaseAccordion.Header className="flex items-center">
            <BaseAccordion.Trigger
              data-slot="accordion-trigger"
              className="group focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-3 px-5 text-left text-base font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-panel-open]>svg]:rotate-180"
            >
              {item.title}
              <Plus className="group-data-[panel-open]:hidden text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
              <Minus className="group-data-[panel-open]:block hidden text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
            </BaseAccordion.Trigger>
          </BaseAccordion.Header>

          <AccordionContent className="flex flex-col gap-4 px-5">
            <p>{item.content}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

const accordionItems = [
  {
    value: "item-1",
    title: "Product Information",
    content:
      "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.",
  },
  {
    value: "item-2",
    title: "Shipping Details",
    content:
      "We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days.",
  },
  {
    value: "item-3",
    title: "Return Policy",
    content:
      "We stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, simply return the item in its original condition.",
  },
];
