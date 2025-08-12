import { Avatar, AvatarFallback } from "@/registry/components/ui/avatar";

export default function AvatarInitials() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>L</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
    </div>
  );
}
