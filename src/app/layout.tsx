import "@/app/global.css";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";
import { RootProvider } from "fumadocs-ui/provider";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Databuddy } from "@databuddy/sdk";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: ["Next.js", "React", "Tailwind CSS", "Components", "shadcn"],
  authors: [
    {
      name: "Akash Moradiya",
      url: "https://akashmoradiya.com",
    },
  ],
  creator: "Akash Moradiya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/opengraph-image.png`],
    creator: "@akash_3444",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
  other: {
    "google-site-verification": "aI5tSvPhdkm7BVkrBx_i8S2sHzfP7DxvPNbSCpBRfzo",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(inter.className, "antialiased")}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          {children}

          <Databuddy
            clientId="HMM4VGqblgu59xr2UOpco"
            trackOutgoingLinks
            trackInteractions
            trackEngagement
            trackBounceRate
            trackWebVitals
            enableBatching
          />

          <Toaster />
        </RootProvider>
      </body>
    </html>
  );
}
