import { Badge } from "@/registry/components/ui/badge";

export default function BadgeImage() {
  return (
    <div className="flex w-full justify-center flex-wrap gap-2">
      <Badge className="rounded-full ps-[3px]" variant="outline">
        <img
          src="https://github.com/shadcn.png"
          className="h-5 w-5 rounded-full"
          alt="shadcn"
          height={20}
          width={20}
        />
        shadcn
      </Badge>
      <Badge className="rounded-full pe-[3px]" variant="outline">
        shadcn
        <img
          src="https://github.com/shadcn.png"
          className="h-5 w-5 rounded-full"
          alt="shadcn"
          height={20}
          width={20}
        />
      </Badge>
    </div>
  );
}
