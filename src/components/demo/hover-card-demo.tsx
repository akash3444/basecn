import { Button } from "@/registry/components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardPositioner,
  HoverCardTrigger,
} from "@/registry/components/ui/hover-card";

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger render={<Button variant="link" />}>
        @nextjs
      </HoverCardTrigger>
      <HoverCardPositioner>
        <HoverCardContent className="w-80">
          <div className="flex justify-between gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/vercel.png" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">@nextjs</h4>
              <p className="text-sm">
                The React Framework - created and maintained by @vercel.
              </p>
              <div className="text-muted-foreground text-xs">
                Joined December 2021
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCardPositioner>
    </HoverCard>
  );
}
