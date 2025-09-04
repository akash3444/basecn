"use client";

import { cn } from "@/lib/utils";
import { Badge } from "@/registry/components/ui/badge";
import { SidebarComponents } from "fumadocs-ui/components/layout/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

export const Item: SidebarComponents["Item"] = ({ item }) => {
  const pathname = usePathname();

  // If the item is a new component, add a new badge to the sidebar
  const isNew = newPages.some((page) => (item.url as string)?.endsWith(page));

  return (
    <Link
      href={item.url}
      className={cn(
        "flex items-center justify-between py-2 ps-3 pe-2 -ml-1 rounded-lg",
        {
          "bg-muted": pathname === item.url,
        }
      )}
    >
      <span>{item.name}</span>

      {isNew && (
        <Badge
          variant="secondary"
          className="ml-2 px-1.5 py-0.5 text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400 border-0"
        >
          New
        </Badge>
      )}
    </Link>
  );
};

const newPages = [
  "get-started/namespaced-registry",
  "/llms.txt",
  "components/autocomplete",
  "components/combobox-baseui",
  "components/form-with-tanstack-form",
];
