"use client";

import { SidebarComponents } from "fumadocs-ui/components/layout/sidebar";

export const Folder: SidebarComponents["Folder"] = ({ children, item }) => {
  return (
    <div className="not-first:mt-8 flex flex-col gap-2">
      <div className="px-2 uppercase text-xs font-medium text-muted-foreground">
        {item.name}
      </div>
      <div className="[&_a]:text-foreground [&_a]:hover:text-foreground">
        {children}
      </div>
    </div>
  );
};
