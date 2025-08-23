"use client";

import { z } from "zod";

import { Button } from "@/registry/components/ui/button";
import { createFormHook } from "@/registry/components/ui/form-tanstack";
import { Input } from "@/registry/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const defaultValues = { username: "" } as z.infer<typeof formSchema>;
const { useAppForm } = createFormHook();

export default function FormDemo() {
  const form = useAppForm({
    defaultValues,
    validators: {
      onChange: formSchema,
    },
    onSubmit({ value }) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(value);
    },
  });

  return (
    <form.AppForm>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className="space-y-8 max-w-xs w-full"
      >
        <form.AppField name="username">
          {(field) => (
            <form.Item>
              <field.Label>Username</field.Label>
              <field.Control>
                <Input
                  placeholder="shadcn"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </field.Control>
              <field.Description>
                This is your public display name.
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
