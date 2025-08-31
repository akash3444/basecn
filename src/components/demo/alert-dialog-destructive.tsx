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
import { Button, buttonVariants } from "@/registry/components/ui/button";
import { OctagonAlert } from "lucide-react";

export default function AlertDialogDestructive() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>
        Show Dialog
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className="rounded-none">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <OctagonAlert className="size-5 shrink-0 mt-1 text-destructive fill-destructive/10" />
            <div className="flex flex-col gap-1">
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </div>
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
