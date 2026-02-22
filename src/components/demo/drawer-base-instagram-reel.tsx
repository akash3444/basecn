"use client";

import { cn } from "@/lib/utils";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/components/ui/avatar";
import { Button } from "@/registry/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerIndent,
  DrawerIndentBackground,
  drawerPopupClassName,
  DrawerPortal,
  DrawerProvider,
  DrawerTitle,
  DrawerTrigger,
  DrawerViewport,
} from "@/registry/components/ui/drawer-base";
import { Input } from "@/registry/components/ui/input";
import { DrawerPreview as DrawerPrimitive } from "@base-ui/react/drawer";
import {
  BookmarkIcon,
  EllipsisIcon,
  HeartIcon,
  LinkIcon,
  MailIcon,
  MessageCircleIcon,
  MoreVerticalIcon,
  SendIcon,
  Share2Icon,
  UserCheckIcon,
  UserPlusIcon,
  UsersIcon,
} from "lucide-react";
import { useState } from "react";

const LIKES_COUNT = 12847;

function formatLikesCompact(n: number) {
  if (n >= 1e6) return (n / 1e6).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1e3) return (n / 1e3).toFixed(1).replace(/\.0$/, "") + "K";
  return n.toString();
}

export default function InstagramReelDemo() {
  const [portalContainer, setPortalContainer] = useState<HTMLDivElement | null>(
    null,
  );

  return (
    <DrawerProvider>
      <div
        ref={setPortalContainer}
        className="grow [--bleed:3rem] max-h-dvh h-full relative overflow-hidden"
      >
        <DrawerIndentBackground className="bg-background" />
        <DrawerIndent className="group/indent size-full flex flex-col items-center justify-center p-0 border-0 h-full data-inactive:h-dvh max-h-dvh [transition:max-height_calc(400ms*var(--indent-transition,1))_cubic-bezier(0.32,0.72,0,1)] data-active:max-h-[calc(100dvh-(var(--drawer-height,30rem)-var(--drawer-height,0px)*var(--drawer-swipe-progress))+var(--bleed))] bg-background data-active:transform-none data-active:p-4">
          <div className="relative h-full overflow-hidden bg-foreground/10 border-background/5 aspect-3/5 group-data-active/indent:rounded-lg">
            <video
              className="size-full object-cover"
              src="https://cdn.pixabay.com/video/2025/06/03/283431_large.mp4"
              autoPlay
              loop
              muted
              playsInline
            />

            <div className="absolute right-6 bottom-28 flex flex-col items-center gap-5 opacity-100 transition-opacity duration-200 delay-100 group-data-active/indent:opacity-0 group-data-active/indent:pointer-events-none group-data-active/indent:invisible group-data-active/indent:delay-0">
              <LikesDrawer container={portalContainer} />
              <CommentsDrawer container={portalContainer} />
              <ShareDrawer container={portalContainer} />
              <ActionButton icon={BookmarkIcon} label="" />
              <ActionButton icon={MoreVerticalIcon} label="" />
            </div>

            <div className="absolute bottom-5 left-6 right-16 opacity-100 transition-opacity duration-200 delay-100 group-data-active/indent:opacity-0 group-data-active/indent:pointer-events-none group-data-active/indent:invisible group-data-active/indent:delay-0">
              <div className="flex items-center gap-2.5">
                <Avatar className="size-9 border-2 border-white">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="shadcn"
                  />
                  <AvatarFallback className="text-xs">SC</AvatarFallback>
                </Avatar>
                <span className="text-sm font-semibold text-white">shadcn</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 rounded-lg border-white/60 bg-transparent px-3 text-xs font-semibold text-white hover:bg-white/20 hover:text-white"
                >
                  Follow
                </Button>
              </div>
              <p className="mt-2 truncate text-sm text-white/90">
                Building beautiful UI components with Base UI and Tailwind CSS
              </p>
            </div>
          </div>
        </DrawerIndent>
      </div>
    </DrawerProvider>
  );
}

function CommentsDrawer({ container }: { container: HTMLDivElement | null }) {
  return (
    <Drawer>
      <DrawerTrigger className="flex flex-col items-center gap-1.5">
        <MessageCircleIcon className="size-6 text-white drop-shadow-md" />
        <span className="text-xs font-semibold text-white drop-shadow-md">
          348
        </span>
      </DrawerTrigger>

      <DrawerPortal container={container}>
        <DrawerViewport>
          <DrawerPrimitive.Popup
            className={(state) =>
              cn(
                drawerPopupClassName(state),
                "max-h-[30rem]",
                "pb-[max(0px,calc(var(--drawer-snap-point-offset)+var(--drawer-swipe-movement-y)+var(--bleed)))]! px-0 flex flex-col shadow-[0_2px_50px_rgb(0_0_0/0.15)] dark:shadow-[0_2px_200px_rgb(0_0_0/0.9)]",
              )
            }
          >
            <div className="relative pb-4 border-b">
              <DrawerTitle className="text-sm">Comments</DrawerTitle>
              <DrawerDescription className="sr-only">
                Post comments
              </DrawerDescription>
            </div>
            <DrawerContent className="flex-1 w-full py-3 overflow-y-auto overscroll-contain">
              <div className="max-w-md mx-auto">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex gap-3 px-4 py-3">
                    <Avatar className="size-8">
                      <AvatarImage src={comment.avatar} alt={comment.author} />
                      <AvatarFallback>
                        {comment.handle.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px]">
                        <span className="font-semibold">{comment.handle}</span>
                        <span className="text-muted-foreground text-xs ml-2">
                          {comment.time}
                        </span>
                      </p>
                      <p className="text-[13px] mt-0.5">{comment.text}</p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-[11px] text-muted-foreground font-medium">
                          {comment.likes} likes
                        </span>
                        <button className="text-[11px] text-muted-foreground font-medium hover:text-foreground transition-colors">
                          Reply
                        </button>
                      </div>
                      {comment.replies > 0 && (
                        <button className="mt-2 flex items-center gap-2 text-[12px] text-muted-foreground font-medium hover:text-foreground transition-colors">
                          <span className="w-6 h-px bg-muted-foreground/40" />
                          View {comment.replies}{" "}
                          {comment.replies === 1 ? "reply" : "replies"}
                        </button>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full shrink-0 self-start size-7 text-muted-foreground hover:text-red-500 hover:bg-red-500/10 dark:hover:text-red-500/20"
                    >
                      <HeartIcon className="size-3" />
                    </Button>
                  </div>
                ))}
              </div>
            </DrawerContent>
            <div className="pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] px-4">
              <div className="max-w-md w-full mx-auto bg-muted px-4 py-3 flex items-center gap-3 rounded-lg">
                <Avatar className="size-8">
                  <AvatarImage
                    src="https://github.com/akash3444.png"
                    alt="akash3444"
                  />
                  <AvatarFallback>AK</AvatarFallback>
                </Avatar>
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="flex-1 text-sm bg-transparent outline-none placeholder:text-muted-foreground"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-7 text-primary hover:text-primary/80"
                >
                  <SendIcon className="size-4" />
                </Button>
              </div>
            </div>
          </DrawerPrimitive.Popup>
        </DrawerViewport>
      </DrawerPortal>
    </Drawer>
  );
}

function LikesDrawer({ container }: { container: HTMLDivElement | null }) {
  return (
    <Drawer>
      <DrawerTrigger className="flex flex-col items-center gap-1.5">
        <HeartIcon className="size-6 text-white drop-shadow-md" />
        <span className="text-xs font-semibold text-white drop-shadow-md">
          {formatLikesCompact(LIKES_COUNT)}
        </span>
      </DrawerTrigger>

      <DrawerPortal container={container}>
        <DrawerViewport>
          <DrawerPrimitive.Popup
            className={(state) =>
              cn(
                drawerPopupClassName(state),
                "max-h-[30rem]",
                "pb-[max(0px,calc(var(--drawer-snap-point-offset)+var(--drawer-swipe-movement-y)+var(--bleed)))]! px-0 flex flex-col shadow-[0_2px_50px_rgb(0_0_0/0.15)] dark:shadow-[0_2px_200px_rgb(0_0_0/0.9)]",
              )
            }
          >
            <div className="will-change-transform px-4 pb-4 border-b">
              <DrawerTitle className="text-sm">Reactions and plays</DrawerTitle>
              <DrawerDescription className="text-xs">
                <span className="font-medium text-foreground">
                  {LIKES_COUNT.toLocaleString()}
                </span>{" "}
                likes &middot;{" "}
                <span className="font-medium text-foreground">248K</span> plays
              </DrawerDescription>
            </div>
            <DrawerContent
              className="will-change-transform flex-1 w-full overflow-y-auto overscroll-contain pb-[calc(1rem+env(safe-area-inset-bottom,0px))]"
              style={{ scrollbarGutter: "stable" }}
            >
              <div className="max-w-md mx-auto">
                <div className="px-4 pt-3 pb-2">
                  <Input placeholder="Search" className="h-8 text-sm" />
                </div>
                {likers.map((liker) => (
                  <div
                    key={liker.id}
                    className="flex items-center gap-3 px-4 py-2"
                  >
                    <Avatar className="size-10">
                      <AvatarImage src={liker.avatar} alt={liker.name} />
                      <AvatarFallback>
                        {liker.handle.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-semibold truncate">
                        {liker.handle}
                      </p>
                      <p className="text-[12px] text-muted-foreground truncate">
                        {liker.name}
                      </p>
                    </div>
                    <Button
                      variant={liker.isFollowing ? "outline" : "default"}
                      size="sm"
                      className="h-8 text-xs rounded-lg"
                    >
                      {liker.isFollowing ? (
                        <UserCheckIcon className="size-3" />
                      ) : (
                        <UserPlusIcon className="size-3" />
                      )}
                      {liker.isFollowing ? "Following" : "Follow"}
                    </Button>
                  </div>
                ))}
              </div>
            </DrawerContent>
          </DrawerPrimitive.Popup>
        </DrawerViewport>
      </DrawerPortal>
    </Drawer>
  );
}

function ShareDrawer({ container }: { container: HTMLDivElement | null }) {
  return (
    <Drawer>
      <DrawerTrigger className="flex flex-col items-center gap-1.5">
        <Share2Icon className="size-6 text-white drop-shadow-md" />
        <span className="text-xs font-semibold text-white drop-shadow-md">
          1.2K
        </span>
      </DrawerTrigger>

      <DrawerPortal container={container}>
        <DrawerViewport>
          <DrawerPrimitive.Popup
            className={(state) =>
              cn(
                drawerPopupClassName(state),
                "max-h-[30rem]",
                "pb-[max(0px,calc(var(--drawer-snap-point-offset)+var(--drawer-swipe-movement-y)+var(--bleed)))]! px-0 flex flex-col shadow-[0_2px_50px_rgb(0_0_0/0.15)] dark:shadow-[0_2px_200px_rgb(0_0_0/0.9)]",
              )
            }
          >
            <div className="px-4 pb-4 border-b">
              <DrawerTitle className="text-sm">Share</DrawerTitle>
              <DrawerDescription className="sr-only">
                Share this post
              </DrawerDescription>
              <div className="mt-2 max-w-md mx-auto px-2">
                <Input
                  placeholder="Search people or groups"
                  className="h-8 text-sm"
                />
              </div>
            </div>
            <DrawerContent className="flex-1 w-full overflow-y-auto overscroll-contain">
              <div className="max-w-md mx-auto px-2 py-3">
                <div className="grid grid-cols-3 gap-1">
                  {shareContacts.map((contact) => (
                    <Button
                      key={contact.id}
                      variant="ghost"
                      className="h-auto flex-col gap-2 py-3 px-2 rounded-xl"
                    >
                      <Avatar className="size-14">
                        <AvatarImage src={contact.avatar} alt={contact.name} />
                        <AvatarFallback
                          className={
                            contact.isGroup
                              ? "bg-primary/10 text-primary text-lg"
                              : ""
                          }
                        >
                          {contact.isGroup ? (
                            <UsersIcon className="size-5" />
                          ) : (
                            contact.handle.slice(0, 2).toUpperCase()
                          )}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-[11px] text-muted-foreground font-medium truncate w-full text-center">
                        {contact.name}
                      </span>
                    </Button>
                  ))}
                </div>
              </div>
            </DrawerContent>
            <div className="border-t pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))]">
              <div className="max-w-md mx-auto px-2 pt-2">
                <div className="flex items-center justify-around">
                  {shareActions.map((action) => (
                    <Button
                      key={action.label}
                      variant="ghost"
                      className="h-auto flex-col gap-1.5 py-2 px-3 rounded-xl"
                    >
                      <div className="size-10 rounded-full bg-muted flex items-center justify-center">
                        <action.icon className="size-4" />
                      </div>
                      <span className="text-[11px] font-medium">
                        {action.label}
                      </span>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </DrawerPrimitive.Popup>
        </DrawerViewport>
      </DrawerPortal>
    </Drawer>
  );
}

function ActionButton({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <button className="flex flex-col items-center gap-1.5">
      <Icon className="size-6 text-white drop-shadow-md" />
      {label && (
        <span className="text-xs font-semibold text-white drop-shadow-md">
          {label}
        </span>
      )}
    </button>
  );
}

const comments = [
  {
    id: 1,
    avatar: "https://github.com/shadcn.png",
    author: "shadcn",
    handle: "shadcn",
    time: "2h",
    text: "This is exactly the kind of component composition I love to see.",
    likes: 128,
    replies: 3,
  },
  {
    id: 2,
    avatar: "https://github.com/leerob.png",
    author: "Lee Robinson",
    handle: "leerob",
    time: "5h",
    text: "The snap points feel super native. Would love to see this on nextjs.org.",
    likes: 94,
    replies: 2,
  },
  {
    id: 3,
    avatar: "https://github.com/rauchg.png",
    author: "Guillermo Rauch",
    handle: "rauchg",
    time: "8h",
    text: "Ship it.",
    likes: 256,
    replies: 1,
  },
  {
    id: 4,
    avatar: "https://github.com/dan-abramov.png",
    author: "Dan Abramov",
    handle: "dan_abramov",
    time: "1d",
    text: "Nice touch with the overscroll containment. Small details matter.",
    likes: 87,
    replies: 0,
  },
  {
    id: 5,
    avatar: "https://github.com/kentcdodds.png",
    author: "Kent C. Dodds",
    handle: "kentcdodds",
    time: "1d",
    text: "Great accessibility defaults here. The focus management is solid.",
    likes: 63,
    replies: 4,
  },
  {
    id: 6,
    avatar: "https://github.com/t3dotgg.png",
    author: "Theo Browne",
    handle: "t3dotgg",
    time: "2d",
    text: "Base UI + Tailwind is such a good combo. This proves it.",
    likes: 112,
    replies: 5,
  },
  {
    id: 7,
    avatar: "https://github.com/sindresorhus.png",
    author: "Sindre Sorhus",
    handle: "sindresorhus",
    time: "3d",
    text: "Clean implementation. The animation feels buttery smooth.",
    likes: 45,
    replies: 0,
  },
  {
    id: 8,
    avatar: "https://github.com/timneutkens.png",
    author: "Tim Neutkens",
    handle: "timneutkens",
    time: "3d",
    text: "Works great with the App Router. Nice work!",
    likes: 72,
    replies: 0,
  },
];

const likers = [
  {
    id: 1,
    avatar: "https://github.com/shadcn.png",
    name: "shadcn",
    handle: "shadcn",
    isFollowing: true,
  },
  {
    id: 2,
    avatar: "https://github.com/leerob.png",
    name: "Lee Robinson",
    handle: "leerob",
    isFollowing: true,
  },
  {
    id: 3,
    avatar: "https://github.com/rauchg.png",
    name: "Guillermo Rauch",
    handle: "rauchg",
    isFollowing: false,
  },
  {
    id: 4,
    avatar: "https://github.com/dan-abramov.png",
    name: "Dan Abramov",
    handle: "dan_abramov",
    isFollowing: false,
  },
  {
    id: 5,
    avatar: "https://github.com/kentcdodds.png",
    name: "Kent C. Dodds",
    handle: "kentcdodds",
    isFollowing: true,
  },
  {
    id: 6,
    avatar: "https://github.com/t3dotgg.png",
    name: "Theo Browne",
    handle: "t3dotgg",
    isFollowing: false,
  },
  {
    id: 7,
    avatar: "https://github.com/sindresorhus.png",
    name: "Sindre Sorhus",
    handle: "sindresorhus",
    isFollowing: true,
  },
  {
    id: 8,
    avatar: "https://github.com/timneutkens.png",
    name: "Tim Neutkens",
    handle: "timneutkens",
    isFollowing: false,
  },
  {
    id: 9,
    avatar: "https://github.com/devongovett.png",
    name: "Devon Govett",
    handle: "devongovett",
    isFollowing: false,
  },
  {
    id: 10,
    avatar: "https://github.com/maboroshi.png",
    name: "Colm Tuite",
    handle: "colmtuite",
    isFollowing: true,
  },
];

const shareContacts = [
  {
    id: 1,
    avatar: "https://github.com/shadcn.png",
    name: "shadcn",
    handle: "shadcn",
    isGroup: false,
  },
  {
    id: 2,
    avatar: "https://github.com/leerob.png",
    name: "Lee Robinson",
    handle: "leerob",
    isGroup: false,
  },
  {
    id: 3,
    avatar: "https://github.com/rauchg.png",
    name: "Guillermo",
    handle: "rauchg",
    isGroup: false,
  },
  {
    id: 4,
    avatar: "",
    name: "Design Team",
    handle: "design",
    isGroup: true,
  },
  {
    id: 5,
    avatar: "https://github.com/kentcdodds.png",
    name: "Kent C. Dodds",
    handle: "kentcdodds",
    isGroup: false,
  },
  {
    id: 6,
    avatar: "https://github.com/t3dotgg.png",
    name: "Theo Browne",
    handle: "t3dotgg",
    isGroup: false,
  },
  {
    id: 7,
    avatar: "",
    name: "Engineering",
    handle: "engineering",
    isGroup: true,
  },
  {
    id: 8,
    avatar: "https://github.com/dan-abramov.png",
    name: "Dan Abramov",
    handle: "dan_abramov",
    isGroup: false,
  },
  {
    id: 9,
    avatar: "https://github.com/sindresorhus.png",
    name: "Sindre Sorhus",
    handle: "sindresorhus",
    isGroup: false,
  },
  {
    id: 10,
    avatar: "https://github.com/timneutkens.png",
    name: "Tim Neutkens",
    handle: "timneutkens",
    isGroup: false,
  },
  {
    id: 11,
    avatar: "",
    name: "Frontend",
    handle: "frontend",
    isGroup: true,
  },
  {
    id: 12,
    avatar: "https://github.com/devongovett.png",
    name: "Devon Govett",
    handle: "devongovett",
    isGroup: false,
  },
  {
    id: 13,
    avatar: "https://github.com/shuding.png",
    name: "Shu Ding",
    handle: "shuding",
    isGroup: false,
  },
  {
    id: 14,
    avatar: "",
    name: "Open Source",
    handle: "opensource",
    isGroup: true,
  },
  {
    id: 15,
    avatar: "https://github.com/rickhanlonii.png",
    name: "Rick Hanlon",
    handle: "rickhanlonii",
    isGroup: false,
  },
  {
    id: 16,
    avatar: "https://github.com/sophiebits.png",
    name: "Sophie Alpert",
    handle: "sophiebits",
    isGroup: false,
  },
  {
    id: 17,
    avatar: "",
    name: "React Core",
    handle: "reactcore",
    isGroup: true,
  },
  {
    id: 18,
    avatar: "https://github.com/lydiahallie.png",
    name: "Lydia Hallie",
    handle: "lydiahallie",
    isGroup: false,
  },
];

const shareActions = [
  { label: "Copy link", icon: LinkIcon },
  { label: "Share to...", icon: SendIcon },
  { label: "Email", icon: MailIcon },
  { label: "Save", icon: BookmarkIcon },
  { label: "More", icon: EllipsisIcon },
];
