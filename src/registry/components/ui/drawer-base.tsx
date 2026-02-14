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

function DrawerContent({
  className,
  ...props
}: DrawerPrimitive.Content.Props) {
  return (
    <DrawerPortal>
      <DrawerBackdrop />
      <DrawerViewport>
        <DrawerPopup>
          <DrawerPrimitive.Content
            data-slot="drawer-content"
            className={cn(
              "transition-opacity duration-300 ease-[cubic-bezier(0.45,1.005,0,1.005)] group-data-nested-drawer-open/popup:opacity-0 group-data-nested-drawer-swiping/popup:opacity-100",
              className,
            )}
            {...props}
          />
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
        "group/popup relative",
        "[--bleed:3rem] outline-1 outline-foreground/1 bg-background text-foreground dark:outline-border overflow-y-auto overscroll-contain touch-auto data-swiping:select-none",
        "data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)]",
        // Nested drawer stacking variables (no-ops when not nested)
        "[--peek:1rem] [--stack-progress:clamp(0,var(--drawer-swipe-progress),1)] [--stack-step:0.05] [--stack-peek-offset:max(0px,calc((var(--nested-drawers)-var(--stack-progress))*var(--peek)))] [--scale-base:calc(max(0,1-(var(--nested-drawers)*var(--stack-step))))] [--scale:clamp(0,calc(var(--scale-base)+(var(--stack-step)*var(--stack-progress))),1)] [--shrink:calc(1-var(--scale))] [--height:max(0px,calc(var(--drawer-frontmost-height,var(--drawer-height))-var(--bleed)))]",
        // Nested drawer overlay (::after pseudo-element)
        "after:absolute after:inset-0 after:rounded-[inherit] after:bg-transparent after:pointer-events-none after:content-[''] after:transition-[background-color] after:duration-450 after:ease-[cubic-bezier(0.32,0.72,0,1)]",
        // Nested drawer states
        "data-nested-drawer-swiping:duration-0 data-nested-drawer-open:overflow-hidden data-nested-drawer-open:after:bg-black/5",
        {
          // Shared horizontal (left & right)
          "supports-[-webkit-touch-callout:none]:[--bleed:0px] h-full w-[calc(22rem+var(--bleed))] max-w-[calc(100vw-3rem+var(--bleed))] p-6 transform-[translateX(var(--drawer-swipe-movement-x))] transition-transform duration-450ms ease-[cubic-bezier(0.32,0.72,0,1)] supports-[-webkit-touch-callout:none]:w-[20rem] supports-[-webkit-touch-callout:none]:max-w-[calc(100vw-20px)] supports-[-webkit-touch-callout:none]:rounded-[10px]":
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
          "w-full max-h-[calc(80vh+var(--bleed))] px-6 text-center":
            dir === "up" || dir === "down",
          // Down-only (with stacking transform + transitions for height & box-shadow)
          "rounded-t-2xl -mb-(--bleed) pt-4 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px)+var(--bleed))] h-(--drawer-height,auto) shadow-[0_2px_10px_rgb(0_0_0/0.1)] data-ending-style:shadow-[0_2px_10px_rgb(0_0_0/0)] origin-[50%_calc(100%-var(--bleed))] transform-[translateY(calc(var(--drawer-swipe-movement-y)-var(--stack-peek-offset)-(var(--shrink)*var(--height))))_scale(var(--scale))] data-swiping:duration-0 data-nested-drawer-open:h-[calc(var(--height)+var(--bleed))] [transition:transform_450ms_cubic-bezier(0.32,0.72,0,1),height_450ms_cubic-bezier(0.32,0.72,0,1),box-shadow_450ms_cubic-bezier(0.32,0.72,0,1)]":
            dir === "down",
          // Up-only
          "rounded-b-2xl -mt-(--bleed) pb-6 pt-[calc(1.5rem+env(safe-area-inset-top,0px)+var(--bleed))] transform-[translateY(var(--drawer-swipe-movement-y))] transition-transform duration-450ms ease-[cubic-bezier(0.32,0.72,0,1)]":
            dir === "up",
          // Down enter/exit
          "data-ending-style:transform-[translateY(calc(100%-var(--bleed)))] data-starting-style:transform-[translateY(calc(100%-var(--bleed)))]":
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
        <div className="w-12 h-1 mx-auto mb-5 rounded-full bg-muted transition-opacity duration-200 group-data-nested-drawer-open/popup:opacity-0 group-data-nested-drawer-swiping/popup:opacity-100" />
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
