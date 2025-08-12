import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/components/ui/avatar";

const avatars = [
  {
    src: "https://github.com/shadcn.png",
    alt: "@shadcn",
    fallback: "CN",
  },
  {
    src: "https://github.com/leerob.png",
    alt: "@leerob",
    fallback: "LR",
  },
  {
    src: "https://github.com/evilrabbit.png",
    alt: "@evilrabbit",
    fallback: "ER",
  },
  {
    src: "https://github.com/gaearon.png",
    alt: "@gaearon",
    fallback: "DA",
  },
  {
    src: "https://github.com/t3dotgg.png",
    alt: "@t3dotgg",
    fallback: "TB",
  },
  {
    src: "https://github.com/shadcn.png",
    alt: "@shadcn",
    fallback: "CN",
  },
  {
    src: "https://github.com/leerob.png",
    alt: "@leerob",
    fallback: "LR",
  },
  {
    src: "https://github.com/evilrabbit.png",
    alt: "@evilrabbit",
    fallback: "ER",
  },
  {
    src: "https://github.com/gaearon.png",
    alt: "@gaearon",
    fallback: "DA",
  },
  {
    src: "https://github.com/t3dotgg.png",
    alt: "@t3dotgg",
    fallback: "TB",
  },
];

const MAX_AVATARS = 5;

export default function AvatarGroup() {
  const visibleAvatars = avatars.slice(0, MAX_AVATARS).reverse();
  const numberOfHiddenAvatars = avatars.length - MAX_AVATARS;

  return (
    <div className="*:data-[slot=avatar]:ring-background flex flex-row-reverse *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:-ml-2 *:data-[slot=avatar]:last:ml-0 *:data-[slot=avatar]:first:-ml-1.5  *:data-[slot=avatar]:size-10">
      <Avatar>
        <AvatarFallback>+{numberOfHiddenAvatars}</AvatarFallback>
      </Avatar>
      {visibleAvatars.map((avatar, index) => (
        <Avatar key={`${avatar.alt}-${index}`}>
          <AvatarImage src={avatar.src} alt={avatar.alt} />
          <AvatarFallback>{avatar.fallback}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  );
}
