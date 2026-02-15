"use client";

import { cn } from "@/lib/utils";
import { DrawerPreview as DrawerPrimitive } from "@base-ui/react/drawer";
import { createContext, use } from "react";

function resolveClassName<S>(
  className: string | ((state: S) => string | undefined) | undefined,
  state: S,
): string | undefined {
  return typeof className === "function" ? className(state) : className;
}

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
      className={(state) => cn("z-50", resolveClassName(className, state))}
      {...props}
    />
  );
}

function DrawerClose({ ...props }: DrawerPrimitive.Close.Props) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
}

function DrawerContent({ className, ...props }: DrawerPrimitive.Content.Props) {
  return (
    <DrawerPrimitive.Content
      data-slot="drawer-content"
      className={(state) =>
        cn(
          "transition-opacity duration-300 ease-[cubic-bezier(0.45,1.005,0,1.005)] group-data-nested-drawer-open/popup:opacity-0 group-data-nested-drawer-swiping/popup:opacity-100",
          resolveClassName(className, state),
        )
      }
      {...props}
    />
  );
}

function DrawerPopup({
  className,
  children,
  ...props
}: DrawerPrimitive.Popup.Props) {
  const dir = use(DrawerContext);
  return (
    <DrawerPortal>
      <DrawerBackdrop />
      <DrawerViewport>
        <DrawerPrimitive.Popup
          data-slot="drawer-popup"
          className={(state) =>
            cn(
              "group/popup relative",
              "[--bleed:3rem] outline-1 outline-foreground/5 bg-background text-foreground dark:outline-border overflow-y-auto overscroll-contain touch-auto data-swiping:select-none",
              "data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)]",
              // Nested drawer stacking variables (no-ops when not nested)
              "[--peek:1rem] [--stack-progress:clamp(0,var(--drawer-swipe-progress),1)] [--stack-step:0.05] [--stack-peek-offset:max(0px,calc((var(--nested-drawers)-var(--stack-progress))*var(--peek)))] [--scale-base:calc(max(0,1-(var(--nested-drawers)*var(--stack-step))))] [--scale:clamp(0,calc(var(--scale-base)+(var(--stack-step)*var(--stack-progress))),1)] [--shrink:calc(1-var(--scale))] [--height:max(0px,calc(var(--drawer-frontmost-height,var(--drawer-height))-var(--bleed)))]",
              // Nested drawer overlay (::after pseudo-element)
              "after:absolute after:inset-0 after:rounded-[inherit] after:bg-transparent after:pointer-events-none after:content-[''] after:transition-[background-color] after:duration-450 after:ease-[cubic-bezier(0.32,0.72,0,1)]",
              // Nested drawer states
              "data-nested-drawer-swiping:duration-0 data-nested-drawer-open:overflow-hidden data-nested-drawer-open:after:bg-black/5",
              {
                // Shared horizontal (left & right)
                "supports-[-webkit-touch-callout:none]:[--bleed:0px] h-full w-[calc(22rem+var(--bleed))] max-w-[calc(100vw-3rem+var(--bleed))] p-6 supports-[-webkit-touch-callout:none]:w-[20rem] supports-[-webkit-touch-callout:none]:max-w-[calc(100vw-20px)] supports-[-webkit-touch-callout:none]:rounded-[10px]":
                  dir === "left" || dir === "right",
                // Right-only (with stacking transform + transition for box-shadow)
                "rounded-l-2xl -mr-(--bleed) pr-[calc(1.5rem+var(--bleed))] supports-[-webkit-touch-callout:none]:mr-0 supports-[-webkit-touch-callout:none]:pr-6 shadow-[-2px_0_10px_rgb(0_0_0/0.1)] data-ending-style:shadow-[-2px_0_10px_rgb(0_0_0/0)] origin-[calc(100%-var(--bleed))_50%] transform-[translateX(calc(var(--drawer-snap-point-offset,0px)+var(--drawer-swipe-movement-x)-var(--stack-peek-offset)-(var(--shrink)*100%)))_scale(var(--scale))] data-swiping:duration-0 [transition:transform_450ms_cubic-bezier(0.32,0.72,0,1),box-shadow_450ms_cubic-bezier(0.32,0.72,0,1)]":
                  dir === "right",
                // Left-only (with stacking transform + transition for box-shadow)
                "rounded-r-2xl -ml-(--bleed) pl-[calc(1.5rem+var(--bleed))] supports-[-webkit-touch-callout:none]:ml-0 supports-[-webkit-touch-callout:none]:pl-6 shadow-[2px_0_10px_rgb(0_0_0/0.1)] data-ending-style:shadow-[2px_0_10px_rgb(0_0_0/0)] origin-[var(--bleed)_50%] transform-[translateX(calc(var(--drawer-snap-point-offset,0px)+var(--drawer-swipe-movement-x)+var(--stack-peek-offset)+(var(--shrink)*100%)))_scale(var(--scale))] data-swiping:duration-0 [transition:transform_450ms_cubic-bezier(0.32,0.72,0,1),box-shadow_450ms_cubic-bezier(0.32,0.72,0,1)]":
                  dir === "left",
                // Right enter/exit
                "data-ending-style:transform-[translateX(calc(100%-var(--bleed)+var(--viewport-padding)))] data-starting-style:transform-[translateX(calc(100%-var(--bleed)+var(--viewport-padding)))]":
                  dir === "right",
                // Left enter/exit
                "data-ending-style:transform-[translateX(calc(-100%+var(--bleed)-var(--viewport-padding)))] data-starting-style:transform-[translateX(calc(-100%+var(--bleed)-var(--viewport-padding)))]":
                  dir === "left",
                // Shared vertical (up & down)
                "w-full max-h-[calc(80vh+var(--bleed))] px-6":
                  dir === "up" || dir === "down",
                // Down-only (with stacking transform + transitions for height & box-shadow)
                "rounded-t-2xl -mb-(--bleed) pt-4 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px)+var(--bleed))] h-(--drawer-height,auto) shadow-[0_2px_10px_rgb(0_0_0/0.1)] data-ending-style:shadow-[0_2px_10px_rgb(0_0_0/0)] origin-[50%_calc(100%-var(--bleed))] transform-[translateY(calc(var(--drawer-snap-point-offset,0px)+var(--drawer-swipe-movement-y)-var(--stack-peek-offset)-(var(--shrink)*var(--height))))_scale(var(--scale))] data-swiping:duration-0 data-nested-drawer-open:h-[calc(var(--height)+var(--bleed))] [transition:transform_450ms_cubic-bezier(0.32,0.72,0,1),height_450ms_cubic-bezier(0.32,0.72,0,1),box-shadow_450ms_cubic-bezier(0.32,0.72,0,1)]":
                  dir === "down",
                // Up-only (with stacking transform + transitions for height & box-shadow)
                "rounded-b-2xl -mt-(--bleed) pb-6 pt-[calc(1.5rem+env(safe-area-inset-top,0px)+var(--bleed))] h-(--drawer-height,auto) shadow-[0_-2px_10px_rgb(0_0_0/0.1)] data-ending-style:shadow-[0_-2px_10px_rgb(0_0_0/0)] origin-[50%_var(--bleed)] transform-[translateY(calc(var(--drawer-snap-point-offset,0px)+var(--drawer-swipe-movement-y)+var(--stack-peek-offset)+(var(--shrink)*var(--height))))_scale(var(--scale))] data-swiping:duration-0 data-nested-drawer-open:h-[calc(var(--height)+var(--bleed))] [transition:transform_450ms_cubic-bezier(0.32,0.72,0,1),height_450ms_cubic-bezier(0.32,0.72,0,1),box-shadow_450ms_cubic-bezier(0.32,0.72,0,1)]":
                  dir === "up",
                // Down enter/exit
                "data-ending-style:transform-[translateY(calc(100%-var(--bleed)))] data-starting-style:transform-[translateY(calc(100%-var(--bleed)))]":
                  dir === "down",
                // Up enter/exit
                "data-ending-style:transform-[translateY(calc(-100%+var(--bleed)))] data-starting-style:transform-[translateY(calc(-100%+var(--bleed)))]":
                  dir === "up",
              },
              resolveClassName(className, state),
            )
          }
          {...props}
        >
          {dir === "down" && (
            <div className="shrink-0 w-12 h-1 mx-auto mb-5 rounded-full bg-muted transition-opacity duration-200 group-data-nested-drawer-open/popup:opacity-0 group-data-nested-drawer-swiping/popup:opacity-100" />
          )}
          {children}
        </DrawerPrimitive.Popup>
      </DrawerViewport>
    </DrawerPortal>
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
      className={(state) =>
        cn(
          "fixed flex inset-0",
          {
            "[--viewport-padding:0px] supports-[-webkit-touch-callout:none]:[--viewport-padding:0.625rem] items-stretch p-(--viewport-padding)":
              dir === "left" || dir === "right",
            "justify-end": dir === "right",
            "justify-start": dir === "left",
            "items-end justify-center": dir === "down",
            "items-start justify-center": dir === "up",
          },
          resolveClassName(className, state),
        )
      }
      {...props}
    />
  );
}

function DrawerTitle({ className, ...props }: DrawerPrimitive.Title.Props) {
  const dir = use(DrawerContext);

  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={(state) =>
        cn(
          "text-foreground text-base font-medium",
          {
            "text-center": dir === "down" || dir === "up",
          },
          resolveClassName(className, state),
        )
      }
      {...props}
    />
  );
}

function DrawerDescription({
  className,
  ...props
}: DrawerPrimitive.Description.Props) {
  const dir = use(DrawerContext);

  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={(state) =>
        cn(
          "mt-1.5 text-muted-foreground text-sm",
          {
            "text-center": dir === "down" || dir === "up",
          },
          resolveClassName(className, state),
        )
      }
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
      className={(state) =>
        cn(
          "[--backdrop-opacity:0.2] [--bleed:3rem] dark:[--backdrop-opacity:0.7] fixed inset-0 min-h-dvh bg-black opacity-[calc(var(--backdrop-opacity)*(1-var(--drawer-swipe-progress)))] transition-opacity duration-450 ease-[cubic-bezier(0.32,0.72,0,1)] data-swiping:duration-0 data-ending-style:opacity-0 data-starting-style:opacity-0 data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] supports-[-webkit-touch-callout:none]:absolute supports-backdrop-filter:backdrop-blur-3xl",
          resolveClassName(className, state),
        )
      }
      {...props}
    />
  );
}

export {
  Drawer,
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerPopup,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
  DrawerViewport,
};
