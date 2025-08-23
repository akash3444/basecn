"use client";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/registry/components/ui/button";
import { Calendar } from "@/registry/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverPositioner,
  PopoverTrigger,
} from "@/registry/components/ui/popover";
import { createFormHook } from "@/registry/components/ui/form-tanstack";

const FormSchema = z.object({
  dob: z.date({ error: "A date of birth is required." }),
});
type FormValues = z.infer<typeof FormSchema>;

const { useAppForm } = createFormHook();

export default function DatePickerForm() {
  const form = useAppForm({
    defaultValues: {} as FormValues,
    validators: { onChange: FormSchema },
    onSubmit: ({ value }) => {
      toast("You submitted the following values", {
        description: (
          <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
            <code className="text-white">{JSON.stringify(value, null, 2)}</code>
          </pre>
        ),
        position: "top-center",
      });
    },
  });

  return (
    <form.AppForm>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className="space-y-8"
      >
        <form.AppField name="dob">
          {(field) => (
            <form.Item className="flex flex-col">
              <field.Label>Date of birth</field.Label>
              <Popover>
                <field.Control>
                  <PopoverTrigger
                    render={
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.state.value && "text-muted-foreground"
                        )}
                      />
                    }
                  >
                    {field.state.value ? (
                      format(field.state.value, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </PopoverTrigger>
                </field.Control>
                <PopoverPositioner align="start">
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={field.state.value}
                      onSelect={(date) => {
                        if (date) {
                          field.handleChange(date);
                        }
                      }}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      captionLayout="dropdown"
                    />
                  </PopoverContent>
                </PopoverPositioner>
              </Popover>
              <field.Description>
                Your date of birth is used to calculate your age.
              </field.Description>
              <field.Message />
            </form.Item>
          )}
        </form.AppField>
        <Button type="submit">Submit</Button>
      </form>
    </form.AppForm>
  );
}
