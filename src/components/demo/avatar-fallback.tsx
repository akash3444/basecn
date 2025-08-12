import { Avatar, AvatarFallback } from "@/registry/components/ui/avatar";
import { Building, User } from "lucide-react";

export default function AvatarFallbackDemo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>
          <User className="size-4" />
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>
          <Building className="size-4" />
        </AvatarFallback>
      </Avatar>
    </div>
  );
}
