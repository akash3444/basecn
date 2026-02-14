"use client";
import * as React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/components/ui/drawer-base";
import { Button } from "@/registry/components/ui/button";

export default function ExampleDrawerNested() {
  const [firstOpen, setFirstOpen] = React.useState(false);
  const [secondOpen, setSecondOpen] = React.useState(false);
  const [thirdOpen, setThirdOpen] = React.useState(false);

  return (
    <Drawer
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
        Open drawer stack
      </DrawerTrigger>
      <DrawerContent className="max-w-lg mx-auto">
        <DrawerTitle className="mb-1 text-lg">Account</DrawerTitle>
        <DrawerDescription className="mb-6 text-base">
          Nested drawers can be styled to stack, while each drawer remains
          independently focus managed.
        </DrawerDescription>

        <div className="flex items-center justify-end gap-4">
          <div className="mr-auto">
            <Drawer
              open={secondOpen}
              onOpenChange={(nextOpen) => {
                setSecondOpen(nextOpen);
                if (!nextOpen) {
                  setThirdOpen(false);
                }
              }}
            >
              <DrawerTrigger className="text-base font-medium text-blue-800 rounded px-1.5 py-0.5 -m-0.5 hover:bg-blue-800/5 active:bg-blue-800/10 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800">
                Security settings
              </DrawerTrigger>
              <DrawerContent className="max-w-lg mx-auto">
                <DrawerTitle className="mb-1 text-lg">Security</DrawerTitle>
                <DrawerDescription className="mb-6 text-base">
                  Review sign-in activity and update your security preferences.
                </DrawerDescription>

                <ul className="mb-6 list-disc pl-5 text-gray-700">
                  <li>Passkeys enabled</li>
                  <li>2FA via authenticator app</li>
                  <li>3 signed-in devices</li>
                </ul>

                <div className="flex items-center justify-end gap-4">
                  <div className="mr-auto">
                    <Drawer open={thirdOpen} onOpenChange={setThirdOpen}>
                      <DrawerTrigger className="text-base font-medium text-blue-800 rounded px-1.5 py-0.5 -m-0.5 hover:bg-blue-800/5 active:bg-blue-800/10 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800">
                        Advanced options
                      </DrawerTrigger>
                      <DrawerContent className="max-w-lg mx-auto">
                        <DrawerTitle className="mb-1 text-lg">
                          Advanced
                        </DrawerTitle>
                        <DrawerDescription className="mb-6 text-base">
                          This drawer is taller to demonstrate variable-height
                          stacking.
                        </DrawerDescription>

                        <div className="grid gap-1.5 mb-4">
                          <label
                            className="text-sm font-medium text-gray-700"
                            htmlFor="device-name-tw"
                          >
                            Device name
                          </label>
                          <input
                            id="device-name-tw"
                            className="w-full rounded-md border border-gray-200 bg-gray-50 px-2.5 py-2 text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800"
                            defaultValue="Personal laptop"
                          />
                        </div>

                        <div className="grid gap-1.5 mb-6">
                          <label
                            className="text-sm font-medium text-gray-700"
                            htmlFor="notes-tw"
                          >
                            Notes
                          </label>
                          <textarea
                            id="notes-tw"
                            className="w-full rounded-md border border-gray-200 bg-gray-50 px-2.5 py-2 text-gray-900 resize-y focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800"
                            defaultValue="Rotate recovery codes and revoke older sessions."
                            rows={3}
                          />
                        </div>

                        <div className="flex justify-end">
                          <DrawerClose className="flex h-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-gray-900 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100">
                            Done
                          </DrawerClose>
                        </div>
                      </DrawerContent>
                    </Drawer>
                  </div>

                  <DrawerClose className="flex h-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-gray-900 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100">
                    Close
                  </DrawerClose>
                </div>
              </DrawerContent>
            </Drawer>
          </div>

          <DrawerClose className="flex h-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-gray-900 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100">
            Close
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
