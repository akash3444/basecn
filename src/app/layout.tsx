import "@/app/global.css";
import { cn } from "@/lib/utils";
import { RootProvider } from "fumadocs-ui/provider";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s - basecn",
    default: "shadcn/ui components powered by Base UI - basecn",
  },
  description:
    "Beautifully crafted shadcn/ui components powered by Base UI, providing a solid foundation to build modern and elegant interfaces with speed.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={cn(inter.className)} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
