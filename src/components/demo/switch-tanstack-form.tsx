"use client";

import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/registry/components/ui/button";
import { createFormHook } from "@/registry/components/ui/form-tanstack";
import { Switch } from "@/registry/components/ui/switch";

const FormSchema = z.object({
  marketing_emails: z.boolean().default(false).optional(),
  security_emails: z.boolean(),
});

type FormValues = z.infer<typeof FormSchema>;

const { useAppForm } = createFormHook();
const defaultValues: FormValues = { security_emails: true };

export default function SwitchForm() {
  const form = useAppForm({
    validators: { onChange: FormSchema },
    defaultValues,
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
        className="max-w-md w-full space-y-6"
      >
        <div>
          <h3 className="mb-4 text-lg font-medium">Email Notifications</h3>
          <div className="space-y-4">
            <form.AppField name="marketing_emails">
              {(field) => (
                <form.Item className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <field.Label>Marketing emails</field.Label>
                    <field.Description>
                      Receive emails about new products, features, and more.
                    </field.Description>
                  </div>
                  <field.Control>
                    <Switch
                      checked={field.state.value ?? false}
                      onCheckedChange={(checked) => {
                        field.handleChange(
                          checked as FormValues["marketing_emails"]
                        );
                      }}
                    />
                  </field.Control>
                </form.Item>
              )}
            </form.AppField>
            <form.AppField name="security_emails">
              {(field) => (
                <form.Item className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <field.Label>Security emails</field.Label>
                    <field.Description>
                      Receive emails about your account security.
                    </field.Description>
                  </div>
                  <field.Control>
                    <Switch
                      checked={field.state.value ?? false}
                      onCheckedChange={(checked) => {
                        field.handleChange(
                          checked as FormValues["security_emails"]
                        );
                      }}
                      disabled
                      aria-readonly
                    />
                  </field.Control>
                </form.Item>
              )}
            </form.AppField>
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </form.AppForm>
  );
}
