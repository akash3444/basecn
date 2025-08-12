import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/components/ui/avatar";
import { Building, User } from "lucide-react";

export default function AvatarShape() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="rounded-md">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback className="rounded-md">LR</AvatarFallback>
        </Avatar>
        <Avatar className="rounded-none">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback className="rounded-none">ER</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="rounded-md">
          <AvatarFallback className="rounded-md">
            <User className="size-4" />
          </AvatarFallback>
        </Avatar>
        <Avatar className="rounded-none">
          <AvatarFallback className="rounded-none">
            <Building className="size-4" />
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
