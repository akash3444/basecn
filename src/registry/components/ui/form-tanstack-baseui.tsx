"use client";

import { createFormHookContexts, createFormHook } from "@tanstack/react-form";
import * as React from "react";

import { cn } from "@/lib/utils";
// import { Label } from "@/components/ui/label";
import {
  FieldLabel as FieldLabelPrimitive,
  FieldControl as FieldControlPrimitive,
  FieldItem,
  FieldDescription as FieldDescriptionPrimitive,
  FieldError as FieldErrorPrimitive,
} from "./field-baseui";

const { fieldContext, formContext, useFieldContext } = createFormHookContexts();

const { useAppForm } = createFormHook({
  fieldComponents: {
    Label: FieldLabel,
    Control: FieldControl,
    Description: FieldDescription,
    Message: FieldError,
  },
  formComponents: {
    Item: FormItem,
  },
  fieldContext,
  formContext,
});

const useFormField = () => {
  const itemContext = React.useContext(FormItemContext);
  const fieldContext = useFieldContext();

  if (!fieldContext) {
    throw new Error("useFormField should be used within <field.Container>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldContext.state.meta,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

function FormItem({ className, ...props }: React.ComponentProps<"div">) {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <FieldItem className={className} {...props} />
    </FormItemContext.Provider>
  );
}
function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof FieldLabelPrimitive>) {
  const { formItemId, isValid } = useFormField();

  return (
    <FieldLabelPrimitive
      data-error={!isValid}
      className={cn("data-[error=true]:text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
}

function FieldControl({
  className,
  ...props
}: React.ComponentProps<typeof FieldControlPrimitive>) {
  const { formItemId, isValid  } =useFormField();
  return(
<FieldControlPrimitive
      id={formItemId}
      data-error={!isValid}
      className={cn("data-[error=true]:text-destructive", className)}
      {...props} />
  )
}

function FieldDescription({ className, ...props }: React.ComponentProps<typeof FieldDescriptionPrimitive>) {
  const { formDescriptionId } = useFormField();

  return (
    <FieldDescriptionPrimitive
      id={formDescriptionId}
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function FieldError({ className, ...props }: React.ComponentProps<typeof FieldErrorPrimitive>) {
  const { formMessageId, isValid, errors } = useFormField();

  if (props.children) return props.children;

  const body = isValid
    ? props.children
    : String(errors.map((error) => error.message).join(", ") ?? "");

  if (!body) return null;

  return (
    <FieldErrorPrimitive
      id={formMessageId}
      className={cn("text-destructive text-sm", className)}
      {...props}
    >
      {body}
    </FieldErrorPrimitive>
  );
}

export { useAppForm };
