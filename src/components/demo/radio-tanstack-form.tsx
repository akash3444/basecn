"use client";

import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/registry/components/ui/button";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/components/ui/radio-group";
import { createFormHook } from "@/registry/components/ui/form-tanstack";

const FormSchema = z.object({
  type: z.enum(["all", "mentions", "none"], {
    error: "You need to select a notification type.",
  }),
});

type FormValues = z.infer<typeof FormSchema>;

const { useAppForm } = createFormHook();

export default function RadioForm() {
  const form = useAppForm({
    defaultValues: {} as z.infer<typeof FormSchema>,
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
        className="mx-auto space-y-6"
      >
        <form.AppField name="type">
          {(field) => (
            <form.Item className="space-y-3">
              <field.Label>Notify me about...</field.Label>
              <field.Control>
                <RadioGroup
                  onValueChange={(value) => {
                    field.handleChange(value as FormValues["type"]);
                  }}
                  value={field.state.value ?? ""}
                  className="flex flex-col"
                >
                  <form.Item className="flex items-center gap-3">
                    <field.Control>
                      <RadioGroupItem value="all" />
                    </field.Control>
                    <field.Label className="font-normal">
                      All new messages
                    </field.Label>
                  </form.Item>
                  <form.Item className="flex items-center gap-3">
                    <field.Control>
                      <RadioGroupItem value="mentions" />
                    </field.Control>
                    <field.Label className="font-normal">
                      Direct messages and mentions
                    </field.Label>
                  </form.Item>
                  <form.Item className="flex items-center gap-3">
                    <field.Control>
                      <RadioGroupItem value="none" />
                    </field.Control>
                    <field.Label className="font-normal">Nothing</field.Label>
                  </form.Item>
                </RadioGroup>
              </field.Control>
              <field.Message />
            </form.Item>
          )}
        </form.AppField>
        <Button type="submit">Submit</Button>
      </form>
    </form.AppForm>
  );
}
