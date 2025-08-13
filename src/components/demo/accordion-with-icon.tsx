import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/components/ui/accordion";
import { Box, Truck, Undo2 } from "lucide-react";

export default function AccordionWithIcon() {
  return (
    <Accordion
      className="w-full max-w-md mx-auto space-y-2"
      defaultValue={[accordionItems[0].value]}
      openMultiple={false}
    >
      {accordionItems.map((item) => (
        <AccordionItem
          value={item.value}
          className="last:border-b border rounded-md"
        >
          <AccordionTrigger className="p-3 text-base items-center">
            <div className="flex items-center gap-2">
              <item.icon className="size-5" />
              {item.title}
            </div>
          </AccordionTrigger>
          <AccordionContent className="pl-7 flex flex-col gap-4 px-3">
            <p>{item.content}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

const accordionItems = [
  {
    icon: Box,
    value: "item-1",
    title: "Product Information",
    content:
      "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.",
  },
  {
    icon: Truck,
    value: "item-2",
    title: "Shipping Details",
    content:
      "We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days.",
  },
  {
    icon: Undo2,
    value: "item-3",
    title: "Return Policy",
    content:
      "We stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, simply return the item in its original condition.",
  },
];
