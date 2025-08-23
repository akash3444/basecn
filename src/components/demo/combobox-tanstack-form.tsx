"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/registry/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/components/ui/command";
import { createFormHook } from "@/registry/components/ui/form-tanstack";
import {
  Popover,
  PopoverContent,
  PopoverPositioner,
  PopoverTrigger,
} from "@/registry/components/ui/popover";

const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
] as const;

const FormSchema = z.object({
  language: z.string({ error: "Please select a language." }),
});
type FormValues = z.infer<typeof FormSchema>;

const { useAppForm } = createFormHook();

export default function ComboboxForm() {
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
        className="space-y-6"
      >
        <form.AppField name="language">
          {(field) => (
            <form.Item className="flex flex-col">
              <field.Label>Language</field.Label>
              <Popover>
                <field.Control>
                  <PopoverTrigger
                    render={
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-full justify-between",
                          !field.state.value && "text-muted-foreground"
                        )}
                      />
                    }
                  >
                    {field.state.value
                      ? languages.find(
                          (language) => language.value === field.state.value
                        )?.label
                      : "Select language"}
                    <ChevronsUpDown className="opacity-50" />
                  </PopoverTrigger>
                </field.Control>
                <PopoverPositioner align="start">
                  <PopoverContent className="p-0">
                    <Command>
                      <CommandInput
                        placeholder="Search framework..."
                        className="h-9"
                      />
                      <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                          {languages.map((language) => (
                            <CommandItem
                              value={language.label}
                              key={language.value}
                              onSelect={() => {
                                field.handleChange(language.value);
                              }}
                            >
                              {language.label}
                              <Check
                                className={cn(
                                  "ml-auto",
                                  language.value === field.state.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </PopoverPositioner>
              </Popover>
              <field.Description>
                This is the language that will be used in the dashboard.
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
