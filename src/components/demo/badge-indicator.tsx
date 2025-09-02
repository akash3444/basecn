import { Badge } from "@/registry/components/ui/badge";
import { Button } from "@/registry/components/ui/button";
import { AtSign, Bell, Mail, MessageCircle } from "lucide-react";

export default function BadgeIndicator() {
  return (
    <div className="flex w-full justify-center flex-wrap gap-6">
      <Button size="icon" variant="outline" className="relative">
        <Bell />
        <Badge
          variant="destructive"
          className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 h-5 min-w-5 p-0 px-0.5 rounded-full empty:h-2.5 empty:min-w-2.5"
        />
      </Button>
      <Button size="icon" variant="outline" className="relative">
        <Bell />
        <Badge
          variant="destructive"
          className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 h-5 min-w-5 p-0 px-0.5 rounded-full empty:h-2.5 empty:min-w-2.5"
        >
          5
        </Badge>
      </Button>
      <Button size="icon" variant="outline" className="relative">
        <Mail />
        <Badge
          variant="destructive"
          className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 h-5 min-w-5 p-0 px-0.5 rounded-full empty:h-2.5 empty:min-w-2.5"
        >
          99+
        </Badge>
      </Button>
      <Button size="icon" variant="outline" className="relative">
        <MessageCircle />
        <Badge
          variant="destructive"
          className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 h-5 min-w-5 p-0 px-0.5 rounded-full empty:h-2.5 empty:min-w-2.5"
        >
          <AtSign className="size-3" />
        </Badge>
      </Button>
    </div>
  );
}
