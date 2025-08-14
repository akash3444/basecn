import React from "react";

export const components: Record<
  string,
  {
    component: React.LazyExoticComponent<React.ComponentType<unknown>>;
    src: string;
  }
> = {
  "avatar-demo": {
    component: React.lazy(() => import("@/components/demo/avatar-demo")),
    src: "src/components/demo/avatar-demo.tsx",
  },
  "avatar-default": {
    component: React.lazy(() => import("@/components/demo/avatar-default")),
    src: "src/components/demo/avatar-default.tsx",
  },
  "avatar-initials": {
    component: React.lazy(() => import("@/components/demo/avatar-initials")),
    src: "src/components/demo/avatar-initials.tsx",
  },
  "avatar-fallback": {
    component: React.lazy(() => import("@/components/demo/avatar-fallback")),
    src: "src/components/demo/avatar-fallback.tsx",
  },
  "avatar-shape": {
    component: React.lazy(() => import("@/components/demo/avatar-shape")),
    src: "src/components/demo/avatar-shape.tsx",
  },
  "avatar-size": {
    component: React.lazy(() => import("@/components/demo/avatar-size")),
    src: "src/components/demo/avatar-size.tsx",
  },
  "avatar-status": {
    component: React.lazy(() => import("@/components/demo/avatar-status")),
    src: "src/components/demo/avatar-status.tsx",
  },
  "avatar-badge": {
    component: React.lazy(() => import("@/components/demo/avatar-badge")),
    src: "src/components/demo/avatar-badge.tsx",
  },
  "avatar-group": {
    component: React.lazy(() => import("@/components/demo/avatar-group")),
    src: "src/components/demo/avatar-group.tsx",
  },
  "avatar-ring": {
    component: React.lazy(() => import("@/components/demo/avatar-ring")),
    src: "src/components/demo/avatar-ring.tsx",
  },
  "accordion-demo": {
    component: React.lazy(() => import("@/components/demo/accordion-demo")),
    src: "src/components/demo/accordion-demo.tsx",
  },
  "accordion-with-icon": {
    component: React.lazy(
      () => import("@/components/demo/accordion-with-icon")
    ),
    src: "src/components/demo/accordion-with-icon.tsx",
  },
  "accordion-tabs": {
    component: React.lazy(() => import("@/components/demo/accordion-tabs")),
    src: "src/components/demo/accordion-tabs.tsx",
  },
  "accordion-plus-minus-indicator": {
    component: React.lazy(
      () => import("@/components/demo/accordion-plus-minus-indicator")
    ),
    src: "src/components/demo/accordion-plus-minus-indicator.tsx",
  },
  "alert-dialog-demo": {
    component: React.lazy(() => import("@/components/demo/alert-dialog-demo")),
    src: "src/components/demo/alert-dialog-demo.tsx",
  },
  "alert-dialog-with-icon": {
    component: React.lazy(
      () => import("@/components/demo/alert-dialog-with-icon")
    ),
    src: "src/components/demo/alert-dialog-with-icon.tsx",
  },
  "checkbox-demo": {
    component: React.lazy(() => import("@/components/demo/checkbox-demo")),
    src: "src/components/demo/checkbox-demo.tsx",
  },
  "input-demo": {
    component: React.lazy(() => import("@/components/demo/input-demo")),
    src: "src/components/demo/input-demo.tsx",
  },
  "label-demo": {
    component: React.lazy(() => import("@/components/demo/label-demo")),
    src: "src/components/demo/label-demo.tsx",
  },
  "radio-group-demo": {
    component: React.lazy(() => import("@/components/demo/radio-group-demo")),
    src: "src/components/demo/radio-group-demo.tsx",
  },
  "switch-demo": {
    component: React.lazy(() => import("@/components/demo/switch-demo")),
    src: "src/components/demo/switch-demo.tsx",
  },
  "tabs-demo": {
    component: React.lazy(() => import("@/components/demo/tabs-demo")),
    src: "src/components/demo/tabs-demo.tsx",
  },
  "toggle-demo": {
    component: React.lazy(() => import("@/components/demo/toggle-demo")),
    src: "src/components/demo/toggle-demo.tsx",
  },
  "toggle-group-demo": {
    component: React.lazy(() => import("@/components/demo/toggle-group-demo")),
    src: "src/components/demo/toggle-group-demo.tsx",
  },
  "tooltip-demo": {
    component: React.lazy(() => import("@/components/demo/tooltip-demo")),
    src: "src/components/demo/tooltip-demo.tsx",
  },
};
