"use client";

import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/registry/components/ui/button";
import { Checkbox } from "@/registry/components/ui/checkbox";
import { createFormHook } from "@/registry/components/ui/form-tanstack";

const items = [
  {
    id: "recents",
    label: "Recents",
  },
  {
    id: "home",
    label: "Home",
  },
  {
    id: "applications",
    label: "Applications",
  },
  {
    id: "desktop",
    label: "Desktop",
  },
  {
    id: "downloads",
    label: "Downloads",
  },
  {
    id: "documents",
    label: "Documents",
  },
] as const;

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

const { useAppForm } = createFormHook();

const defaultValues = {
  items: ["recents", "home"],
} as z.infer<typeof FormSchema>;

export default function CheckboxForm() {
  const form = useAppForm({
    defaultValues,
    validators: { onChange: FormSchema },
    onSubmit({ value }) {
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
        <form.AppField name="items">
          {(field) => (
            <form.Item>
              <div className="mb-4">
                <field.Label className="text-base">Sidebar</field.Label>
                <field.Description>
                  Select the items you want to display in the sidebar.
                </field.Description>
              </div>
              {items.map((item) => (
                <form.AppField key={item.id} name="items">
                  {(field) => {
                    return (
                      <form.Item className="flex flex-row items-center gap-2">
                        <field.Control>
                          <Checkbox
                            checked={field.state.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.handleChange([
                                    ...field.state.value,
                                    item.id,
                                  ])
                                : field.handleChange(
                                    field.state.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  );
                            }}
                          />
                        </field.Control>
                        <field.Label className="text-sm font-normal">
                          {item.label}
                        </field.Label>
                      </form.Item>
                    );
                  }}
                </form.AppField>
              ))}
              <field.Message />
            </form.Item>
          )}
        </form.AppField>
        <Button type="submit">Submit</Button>
      </form>
    </form.AppForm>
  );
}
