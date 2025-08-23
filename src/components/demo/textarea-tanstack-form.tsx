"use client";

import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/registry/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { createFormHook } from "@/registry/components/ui/form-tanstack";

const FormSchema = z.object({
  bio: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 160 characters.",
    }),
});

const { useAppForm } = createFormHook();

export default function TextareaForm() {
  const form = useAppForm({
    defaultValues: {
      bio: "",
    },
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
        className="w-2/3 space-y-6"
      >
        <form.AppField name="bio">
          {(field) => (
            <form.Item>
              <field.Label>Bio</field.Label>
              <field.Control>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => {
                    field.handleChange(e.target.value);
                  }}
                  onBlur={field.handleBlur}
                />
              </field.Control>
              <field.Description>
                You can <span>@mention</span> other users and organizations.
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
