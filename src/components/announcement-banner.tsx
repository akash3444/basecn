import { ArrowRight, Megaphone } from "lucide-react";
import Link from "next/link";

export function AnnouncementBanner() {
  return (
    <div className="bg-fd-primary text-fd-primary-foreground">
      <div className="flex items-center justify-center gap-3 px-4 py-2.5 text-center text-sm font-medium">
        <Megaphone className="size-4 shrink-0" />
        <span>
          <strong>Important:</strong> We now recommend using the official{" "}
          <strong>shadcn/ui + Base UI</strong> setup for new projects.
        </span>
        <Link
          href="https://x.com/akash_3444/status/1999764104203100512"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1 rounded-full bg-fd-primary-foreground/20 px-3 py-1 text-xs font-semibold transition-colors hover:bg-fd-primary-foreground/30"
        >
          Learn more
          <ArrowRight className="size-3" />
        </Link>
      </div>
    </div>
  );
}
