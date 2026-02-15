"use client";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/components/ui/avatar";
import { Button } from "@/registry/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/components/ui/drawer-base";
import { Input } from "@/registry/components/ui/input";
import {
  BookmarkIcon,
  EllipsisIcon,
  HeartIcon,
  LinkIcon,
  MailIcon,
  MessageCircleIcon,
  SendIcon,
  Share2Icon,
  UserCheckIcon,
  UserPlusIcon,
  UsersIcon,
} from "lucide-react";

export default function DrawerSnapPoints() {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <SnapPointsDrawer />
      <CommentsDrawer />
      <ReactionsDrawer />
      <ShareDrawer />
    </div>
  );
}

function SnapPointsDrawer() {
  const snapPoints = ["31rem", 1];

  return (
    <Drawer snapPoints={snapPoints}>
      <DrawerTrigger render={<Button variant="outline" />}>
        Open snap drawer
      </DrawerTrigger>
      <DrawerPopup className="pb-[max(0px,calc(var(--drawer-snap-point-offset)+var(--drawer-swipe-movement-y)+var(--bleed)))]! px-0 max-h-dvh flex flex-col  shadow-[0_2px_50px_rgb(0_0_0/0.15)] dark:shadow-[0_2px_200px_rgb(0_0_0/0.9)]">
        <div className="pb-4 border-b px-4">
          <DrawerTitle>Snap points</DrawerTitle>
          <DrawerDescription>
            Drag the sheet to snap between a compact peek and a near full-height
            view.
          </DrawerDescription>
        </div>
        <DrawerContent className="pt-4 px-4 flex-1 w-full overflow-y-auto overscroll-contain pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))]">
          <div className="max-w-lg mx-auto">
            <div className="grid gap-3 mt-4 mb-6" aria-hidden>
              {Array.from({ length: 20 }, (_, index) => (
                <div
                  key={index}
                  className="h-12 rounded-xl border bg-muted/80 border-muted"
                />
              ))}
            </div>
            <div className="flex items-center justify-end gap-4">
              <DrawerClose render={<Button variant="outline" />}>
                Close
              </DrawerClose>
            </div>
          </div>
        </DrawerContent>
      </DrawerPopup>
    </Drawer>
  );
}

function CommentsDrawer() {
  const snapPoints = ["40rem", 1];

  return (
    <Drawer snapPoints={snapPoints}>
      <DrawerTrigger render={<Button variant="outline" />}>
        <MessageCircleIcon className="size-4" />
        Comments
      </DrawerTrigger>
      <DrawerPopup className="pb-[max(0px,calc(var(--drawer-snap-point-offset)+var(--drawer-swipe-movement-y)+var(--bleed)))]! px-0 max-h-dvh flex flex-col shadow-[0_2px_50px_rgb(0_0_0/0.15)] dark:shadow-[0_2px_200px_rgb(0_0_0/0.9)]">
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
                  className="rounded-full shrink-0 self-start size-7 text-muted-foreground hover:text-red-500 hover:bg-red-500/10 dark:hover:bg-red-500/20"
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
      </DrawerPopup>
    </Drawer>
  );
}

function ReactionsDrawer() {
  const snapPoints = ["31rem", 1];

  return (
    <Drawer snapPoints={snapPoints} snapToSequentialPoints>
      <DrawerTrigger render={<Button variant="outline" />}>
        <HeartIcon className="size-4" />
        Reactions
      </DrawerTrigger>
      <DrawerPopup className="pb-[max(0px,calc(var(--drawer-snap-point-offset)+var(--drawer-swipe-movement-y)+var(--bleed)))]! px-0 max-h-dvh flex flex-col shadow-[0_2px_50px_rgb(0_0_0/0.15)] dark:shadow-[0_2px_200px_rgb(0_0_0/0.9)]">
        <div className="will-change-transform px-4 pb-4 border-b">
          <DrawerTitle className="text-sm">Reactions and plays</DrawerTitle>
          <DrawerDescription className="text-xs">
            <span className="font-medium text-foreground">12,847</span> likes
            &middot; <span className="font-medium text-foreground">248K</span>{" "}
            plays
          </DrawerDescription>
        </div>
        <DrawerContent
          className="will-change-transform flex-1 w-full overflow-y-auto overscroll-contain pb-[calc(1rem+env(safe-area-inset-bottom,0px))]"
          style={{
            scrollbarGutter: "stable",
          }}
        >
          <div className="max-w-md mx-auto">
            <div className="px-4 pt-3 pb-2">
              <Input placeholder="Search" className="h-8 text-sm" />
            </div>
            {likers.map((liker) => (
              <div key={liker.id} className="flex items-center gap-3 px-4 py-2">
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
                  {liker.isFollowing ? <UserCheckIcon /> : <UserPlusIcon />}
                  {liker.isFollowing ? "Following" : "Follow"}
                </Button>
              </div>
            ))}
          </div>
        </DrawerContent>
      </DrawerPopup>
    </Drawer>
  );
}

function ShareDrawer() {
  const snapPoints = ["40rem", 1];

  return (
    <Drawer snapPoints={snapPoints}>
      <DrawerTrigger render={<Button variant="outline" />}>
        <Share2Icon className="size-4" />
        Share
      </DrawerTrigger>
      <DrawerPopup className="pb-[max(0px,calc(var(--drawer-snap-point-offset)+var(--drawer-swipe-movement-y)+var(--bleed)))]! px-0 max-h-dvh flex flex-col shadow-[0_2px_50px_rgb(0_0_0/0.15)] dark:shadow-[0_2px_200px_rgb(0_0_0/0.9)]">
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
      </DrawerPopup>
    </Drawer>
  );
}

// --- Data ---

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
