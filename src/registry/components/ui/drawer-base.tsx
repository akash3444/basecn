"use client";

import { cn } from "@/lib/utils";
import { DrawerPreview as DrawerPrimitive } from "@base-ui/react/drawer";
import { createContext, use } from "react";

const DrawerContext =
  createContext<DrawerPrimitive.Root.Props["swipeDirection"]>("down");

function Drawer({
  swipeDirection = "down",
  ...props
}: DrawerPrimitive.Root.Props) {
  return (
    <DrawerContext value={swipeDirection}>
      <DrawerPrimitive.Root
        data-slot="drawer"
        swipeDirection={swipeDirection}
        {...props}
      />
    </DrawerContext>
  );
}

function DrawerTrigger({ ...props }: DrawerPrimitive.Trigger.Props) {
  return <DrawerPrimitive.Trigger {...props} data-slot="drawer-trigger" />;
}

function DrawerPortal({ className, ...props }: DrawerPrimitive.Portal.Props) {
  return (
    <DrawerPrimitive.Portal
      data-slot="drawer-portal"
      className={cn("z-50", className)}
      {...props}
    />
  );
}

function DrawerClose({ ...props }: DrawerPrimitive.Close.Props) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
}

function DrawerContent({ ...props }: DrawerPrimitive.Content.Props) {
  return (
    <DrawerPortal>
      <DrawerBackdrop />
      <DrawerViewport>
        <DrawerPopup>
          <DrawerPrimitive.Content data-slot="drawer-content" {...props} />
        </DrawerPopup>
      </DrawerViewport>
    </DrawerPortal>
  );
}

function DrawerPopup({
  className,
  children,
  ...props
}: DrawerPrimitive.Popup.Props) {
  const dir = use(DrawerContext);
  return (
    <DrawerPrimitive.Popup
      data-slot="drawer-popup"
      className={cn(
        "group group",
        "[--bleed:3rem] outline-1 outline-foreground/1 bg-background text-foreground dark:outline-border overflow-y-auto overscroll-contain touch-auto transition-transform duration-450ms ease-[cubic-bezier(0.32,0.72,0,1)] data-swiping:select-none",
        "data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)]",
        {
          // Shared horizontal (left & right)
          "supports-[-webkit-touch-callout:none]:[--bleed:0px] h-full w-[calc(22rem+var(--bleed))] max-w-[calc(100vw-3rem+var(--bleed))] p-6 transform-[translateX(var(--drawer-swipe-movement-x))] supports-[-webkit-touch-callout:none]:w-[20rem] supports-[-webkit-touch-callout:none]:max-w-[calc(100vw-20px)] supports-[-webkit-touch-callout:none]:rounded-[10px]":
            dir === "left" || dir === "right",
          // Right-only
          "rounded-l-2xl -mr-(--bleed) pr-[calc(1.5rem+var(--bleed))] supports-[-webkit-touch-callout:none]:mr-0 supports-[-webkit-touch-callout:none]:pr-6":
            dir === "right",
          // Left-only
          "rounded-r-2xl -ml-(--bleed) pl-[calc(1.5rem+var(--bleed))] supports-[-webkit-touch-callout:none]:ml-0 supports-[-webkit-touch-callout:none]:pl-6":
            dir === "left",
          // Right enter/exit
          "data-ending-style:transform-[translateX(calc(100%-var(--bleed)+var(--viewport-padding)))] data-starting-style:transform-[translateX(calc(100%-var(--bleed)+var(--viewport-padding)))]":
            dir === "right",
          // Left enter/exit
          "data-ending-style:transform-[translateX(calc(-100%+var(--bleed)-var(--viewport-padding)))] data-starting-style:transform-[translateX(calc(-100%+var(--bleed)-var(--viewport-padding)))]":
            dir === "left",
          // Shared vertical (up & down)
          "w-full max-h-[calc(80vh+var(--bleed))] px-6 transform-[translateY(var(--drawer-swipe-movement-y))] text-center":
            dir === "up" || dir === "down",
          // Down-only
          "rounded-t-2xl -mb-(--bleed) pt-4 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px)+var(--bleed))]":
            dir === "down",
          // Up-only
          "rounded-b-2xl -mt-(--bleed) pb-6 pt-[calc(1.5rem+env(safe-area-inset-top,0px)+var(--bleed))]":
            dir === "up",
          // Down enter/exit
          "data-ending-style:transform-[translateY(calc(100%-3rem))] data-starting-style:transform-[translateY(calc(100%-3rem))]":
            dir === "down",
          // Up enter/exit
          "data-ending-style:transform-[translateY(calc(-100%+3rem))] data-starting-style:transform-[translateY(calc(-100%+3rem))]":
            dir === "up",
        },
        className,
      )}
      {...props}
    >
      {dir === "down" && (
        <div className="w-12 h-1 mx-auto mb-5 rounded-full bg-muted" />
      )}
      {children}
    </DrawerPrimitive.Popup>
  );
}

function DrawerViewport({
  className,
  ...props
}: DrawerPrimitive.Viewport.Props) {
  const dir = use(DrawerContext);
  return (
    <DrawerPrimitive.Viewport
      data-slot="drawer-viewport"
      className={cn(
        "fixed flex inset-0",
        {
          "[--viewport-padding:0px] supports-[-webkit-touch-callout:none]:[--viewport-padding:0.625rem] items-stretch p-(--viewport-padding)":
            dir === "left" || dir === "right",
          "justify-end": dir === "right",
          "justify-start": dir === "left",
          "items-end justify-center": dir === "down",
          "items-start justify-center": dir === "up",
        },
        className,
      )}
      {...props}
    />
  );
}

function DrawerTitle({ className, ...props }: DrawerPrimitive.Title.Props) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn("text-foreground text-base font-medium", className)}
      {...props}
    />
  );
}

function DrawerDescription({
  className,
  ...props
}: DrawerPrimitive.Description.Props) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn("mt-1.5 text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function DrawerBackdrop({
  className,
  ...props
}: DrawerPrimitive.Backdrop.Props) {
  return (
    <DrawerPrimitive.Backdrop
      data-slot="drawer-backdrop"
      className={cn(
        "[--backdrop-opacity:0.2] [--bleed:3rem] dark:[--backdrop-opacity:0.7] fixed inset-0 min-h-dvh bg-black opacity-[calc(var(--backdrop-opacity)*(1-var(--drawer-swipe-progress)))] transition-opacity duration-450 ease-[cubic-bezier(0.32,0.72,0,1)] data-swiping:duration-0 data-ending-style:opacity-0 data-starting-style:opacity-0 data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] supports-[-webkit-touch-callout:none]:absolute supports-backdrop-filter:backdrop-blur-3xl",
        className,
      )}
      {...props}
    />
  );
}

export {
  Drawer,
  DrawerTrigger,
  DrawerPortal,
  DrawerContent,
  DrawerPopup,
  DrawerViewport,
  DrawerTitle,
  DrawerDescription,
  DrawerBackdrop,
  DrawerClose,
};
