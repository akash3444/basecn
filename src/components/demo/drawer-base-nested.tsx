"use client";
import * as React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/components/ui/drawer-base";
import { Button } from "@/registry/components/ui/button";
import { Input } from "@/registry/components/ui/input";
import { Textarea } from "@/registry/components/ui/textarea";

export default function ExampleDrawerNested() {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <DrawerNested swipeDirection="right" />
      <DrawerNested swipeDirection="left" />
      <DrawerNested swipeDirection="up" />
      <DrawerNested swipeDirection="down" />
    </div>
  );
}

function DrawerNested({
  swipeDirection,
}: {
  swipeDirection: React.ComponentProps<typeof Drawer>["swipeDirection"];
}) {
  const [firstOpen, setFirstOpen] = React.useState(false);
  const [secondOpen, setSecondOpen] = React.useState(false);
  const [thirdOpen, setThirdOpen] = React.useState(false);

  return (
    <Drawer
      swipeDirection={swipeDirection}
      open={firstOpen}
      onOpenChange={(nextOpen) => {
        setFirstOpen(nextOpen);
        if (!nextOpen) {
          setSecondOpen(false);
          setThirdOpen(false);
        }
      }}
    >
      <DrawerTrigger render={<Button variant="outline" />}>
        Open drawer ({swipeDirection})
      </DrawerTrigger>
      <DrawerPopup>
        <DrawerContent className="max-w-lg mx-auto">
          <DrawerTitle className="mb-1 text-lg">Account</DrawerTitle>
          <DrawerDescription className="mb-6 text-base">
            Nested drawers can be styled to stack, while each drawer remains
            independently focus managed.
          </DrawerDescription>

          <div className="flex items-center justify-end gap-4">
            <div className="mr-auto">
              <Drawer
                swipeDirection={swipeDirection}
                open={secondOpen}
                onOpenChange={(nextOpen) => {
                  setSecondOpen(nextOpen);
                  if (!nextOpen) {
                    setThirdOpen(false);
                  }
                }}
              >
                <DrawerTrigger className="text-base font-medium text-blue-800 dark:text-blue-400 rounded px-1.5 py-0.5 -m-0.5 hover:bg-blue-800/5 dark:hover:bg-blue-400/15 active:bg-blue-800/10 dark:active:bg-blue-200/10 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 dark:focus-visible:outline-blue-200">
                  Security settings
                </DrawerTrigger>
                <DrawerPopup>
                  <DrawerContent className="max-w-lg mx-auto">
                    <DrawerTitle className="mb-1 text-lg">Security</DrawerTitle>
                    <DrawerDescription className="mb-6 text-base">
                      Review sign-in activity and update your security
                      preferences.
                    </DrawerDescription>

                    <ul className="w-fit mx-auto mb-6 list-disc pl-5 text-muted-foreground">
                      <li>Passkeys enabled</li>
                      <li>2FA via authenticator app</li>
                      <li>3 signed-in devices</li>
                    </ul>

                    <div className="flex items-center justify-end gap-4">
                      <div className="mr-auto">
                        <Drawer
                          swipeDirection={swipeDirection}
                          open={thirdOpen}
                          onOpenChange={setThirdOpen}
                        >
                          <DrawerTrigger className="text-base font-medium text-blue-800 dark:text-blue-400 rounded px-1.5 py-0.5 -m-0.5 hover:bg-blue-800/5 dark:hover:bg-blue-400/15 active:bg-blue-800/10 dark:active:bg-blue-200/10 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 dark:focus-visible:outline-blue-200">
                            Advanced options
                          </DrawerTrigger>
                          <DrawerPopup>
                            <DrawerContent className="max-w-lg mx-auto">
                              <DrawerTitle className="mb-1 text-lg">
                                Advanced
                              </DrawerTitle>
                              <DrawerDescription className="mb-6 text-base">
                                This drawer is taller to demonstrate
                                variable-height stacking.
                              </DrawerDescription>

                              <div className="grid gap-1.5 mb-4">
                                <label
                                  className="text-sm font-medium text-foreground"
                                  htmlFor="device-name-tw"
                                >
                                  Device name
                                </label>
                                <Input
                                  id="device-name-tw"
                                  defaultValue="Personal laptop"
                                />
                              </div>

                              <div className="grid gap-1.5 mb-6">
                                <label
                                  className="text-sm font-medium text-foreground"
                                  htmlFor="notes-tw"
                                >
                                  Notes
                                </label>
                                <Textarea
                                  id="notes-tw"
                                  className="resize-y h-28"
                                  defaultValue="Rotate recovery codes and revoke older sessions."
                                />
                              </div>

                              <div className="flex justify-end">
                                <DrawerClose render={<Button />}>
                                  Done
                                </DrawerClose>
                              </div>
                            </DrawerContent>
                          </DrawerPopup>
                        </Drawer>
                      </div>

                      <DrawerClose render={<Button />}>Close</DrawerClose>
                    </div>
                  </DrawerContent>
                </DrawerPopup>
              </Drawer>
            </div>

            <DrawerClose render={<Button />}>Close</DrawerClose>
          </div>
        </DrawerContent>
      </DrawerPopup>
    </Drawer>
  );
}
