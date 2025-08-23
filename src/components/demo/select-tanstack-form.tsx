"use client";

import Link from "next/link";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/registry/components/ui/button";
import { createFormHook } from "@/registry/components/ui/form-tanstack";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectPositioner,
  SelectTrigger,
  SelectValue,
} from "@/registry/components/ui/select";

const FormSchema = z.object({
  email: z.email({ error: "Please select an email to display." }),
});

const { useAppForm } = createFormHook();

export default function SelectForm() {
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
        <form.AppField name="email">
          {(field) => (
            <form.Item>
              <field.Label>Email</field.Label>
              <Select
                onValueChange={(value) =>
                  field.handleChange(
                    value as z.infer<typeof FormSchema>["email"]
                  )
                }
                value={field.state.value ?? ""}
              >
                <field.Control>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </field.Control>
                <SelectPositioner>
                  <SelectContent>
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </SelectPositioner>
              </Select>
              <field.Description>
                You can manage email addresses in your{" "}
                <Link href="/examples/forms">email settings</Link>.
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
