import React from "react";

export const components: Record<
  string,
  {
    component: React.LazyExoticComponent<React.ComponentType<any>>;
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
};
