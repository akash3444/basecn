"use client";
import * as React from "react";
import { DrawerPreview as DrawerPrimitive } from "@base-ui/react/drawer";
import {
  Drawer,
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHandle,
  DrawerIndent,
  DrawerIndentBackground,
  drawerPopupClassName,
  DrawerPortal,
  DrawerProvider,
  DrawerTitle,
  DrawerTrigger,
  DrawerViewport,
} from "@/registry/components/ui/drawer-base";
import { Button } from "@/registry/components/ui/button";

export default function DrawerBaseIndentEffect() {
  const [portalContainer, setPortalContainer] =
    React.useState<HTMLDivElement | null>(null);

  return (
    <DrawerProvider>
      <div
        ref={setPortalContainer}
        className="[--bleed:3rem] relative w-full overflow-hidden max-w-3xl"
      >
        <DrawerIndentBackground />
        <DrawerIndent>
          <div className="flex min-h-[320px] items-center justify-center">
            <Drawer modal={false}>
              <DrawerTrigger render={<Button variant="outline" />}>
                Open drawer
              </DrawerTrigger>
              <DrawerPortal container={portalContainer}>
                <DrawerBackdrop className="absolute" />
                <DrawerViewport className="absolute">
                  <DrawerPrimitive.Popup className={drawerPopupClassName}>
                    <DrawerHandle />
                    <DrawerContent className="mx-auto w-full max-w-lg">
                      <DrawerTitle>Notifications</DrawerTitle>
                      <DrawerDescription>
                        You are all caught up. Good job!
                      </DrawerDescription>
                      <div className="mt-5 flex justify-center gap-4">
                        <DrawerClose render={<Button variant="outline" />}>
                          Close
                        </DrawerClose>
                      </div>
                    </DrawerContent>
                  </DrawerPrimitive.Popup>
                </DrawerViewport>
              </DrawerPortal>
            </Drawer>
          </div>
        </DrawerIndent>
      </div>
    </DrawerProvider>
  );
}
