import { cn } from "@/lib/utils";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/registry/components/ui/alert-dialog";
import { AlertDialog as AlertDialogPrimitive } from "@base-ui-components/react/alert-dialog";
import { Button, buttonVariants } from "@/registry/components/ui/button";
import { OctagonAlert, XIcon } from "lucide-react";

export default function AlertDialogWithCloseButton() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>
        Show Dialog
      </AlertDialogTrigger>
      <AlertDialogContent className="pt-2">
        <AlertDialogHeader className="rounded-none">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-3 py-3 border-b">
              <div className="flex items-center gap-3">
                <OctagonAlert className="size-5 shrink-0 text-destructive fill-destructive/10" />
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              </div>

              <AlertDialogPrimitive.Close
                className={cn(
                  buttonVariants({ variant: "outline", size: "icon" }),
                  "size-6 p-0 [&_svg:not([class*='size-'])]:size-3.5"
                )}
              >
                <XIcon />
              </AlertDialogPrimitive.Close>
            </div>
            <AlertDialogDescription className="py-3">
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-2">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className={buttonVariants({ variant: "destructive" })}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
