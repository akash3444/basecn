import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col text-center py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="mb-4 text-4xl sm:text-5xl md:text-7xl font-medium tracking-[-0.06em] text-balance leading-snug">
          shadcn/ui Components Powered by{" "}
          <span className="bg-primary px-4 py-1 rounded text-primary-foreground leading-none inline-block">
            Base UI
          </span>
        </h1>
        <p className="text-fd-muted-foreground text-xl">
          Beautifully crafted shadcn/ui components powered by Base UI, providing
          a solid foundation to build modern and elegant interfaces with speed.
        </p>
        <Button className="mt-8" size="xl" asChild>
          <Link href="/docs/components/accordion">
            Get Started <ArrowUpRight />
          </Link>
        </Button>
      </div>
    </main>
  );
}
