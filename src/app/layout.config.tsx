import { config } from "@/config";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Bolt } from "lucide-react";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center gap-2">
        <Bolt className="text-foreground/70 fill-foreground/10" />
        <span className="text-lg font-bold">basecn</span>
      </div>
    ),
  },
  githubUrl: config.githubUrl,
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [],
};
