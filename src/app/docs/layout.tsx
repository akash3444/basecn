import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import { Folder, Item } from "@/components/sidebar-components";
import { AnnouncementBanner } from "@/components/announcement-banner";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <AnnouncementBanner />
      <DocsLayout
        tree={source.pageTree}
        sidebar={{ components: { Folder, Item } }}
        {...baseOptions}
      >
        {children}
      </DocsLayout>
    </>
  );
}
