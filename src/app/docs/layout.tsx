import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import { Folder, Item } from "@/components/sidebar-components";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      sidebar={{ components: { Folder, Item } }}
      {...baseOptions}
    >
      {children}
    </DocsLayout>
  );
}
