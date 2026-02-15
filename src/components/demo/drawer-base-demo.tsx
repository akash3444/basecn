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
import {
  HomeIcon,
  FolderIcon,
  LinkIcon,
  MailIcon,
  SlackIcon,
  TwitterIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";

export default function ExampleDrawer() {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Drawer swipeDirection="up">
        <DrawerTrigger render={<Button variant="outline" />}>Top</DrawerTrigger>
        <DrawerPopup>
          <DrawerContent className="max-w-lg mx-auto">
            <DrawerTitle>Notifications</DrawerTitle>
            <DrawerDescription>
              You have 3 unread notifications.
            </DrawerDescription>
            <ul className="mt-5 space-y-2 text-sm text-left">
              <li className="rounded-md border p-3">
                <p className="font-medium">New comment on your post</p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  2 min ago
                </p>
              </li>
              <li className="rounded-md border p-3">
                <p className="font-medium">Deployment succeeded</p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  15 min ago
                </p>
              </li>
              <li className="rounded-md border p-3">
                <p className="font-medium">You were mentioned in #design</p>
                <p className="text-muted-foreground text-xs mt-0.5">1 hr ago</p>
              </li>
            </ul>
            <div className="mt-4 flex justify-center gap-4">
              <DrawerClose render={<Button variant="outline" size="sm" />}>
                Dismiss
              </DrawerClose>
            </div>
          </DrawerContent>
        </DrawerPopup>
      </Drawer>

      <Drawer swipeDirection="right">
        <DrawerTrigger render={<Button variant="outline" />}>
          Right
        </DrawerTrigger>
        <DrawerPopup>
          <DrawerContent>
            <DrawerTitle>Detail Panel</DrawerTitle>
            <DrawerDescription>
              Task information and metadata.
            </DrawerDescription>
            <div className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status</span>
                <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-600">
                  Active
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Priority</span>
                <span>High</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Assignee</span>
                <span>Jane Doe</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Due date</span>
                <span>Feb 28, 2026</span>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2">
              <DrawerClose render={<Button variant="outline" size="sm" />}>
                Close
              </DrawerClose>
              <Button size="sm">Edit Task</Button>
            </div>
          </DrawerContent>
        </DrawerPopup>
      </Drawer>

      <Drawer swipeDirection="down">
        <DrawerTrigger render={<Button variant="outline" />}>
          Bottom
        </DrawerTrigger>
        <DrawerPopup>
          <DrawerContent className="max-w-sm mx-auto">
            <DrawerTitle>Share</DrawerTitle>
            <DrawerDescription>Share this page with others.</DrawerDescription>
            <div className="mt-4 grid grid-cols-4 gap-4 text-center text-xs">
              {shareOptions.map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  className="flex flex-col items-center gap-1.5 rounded-lg p-3 hover:bg-muted transition-colors"
                >
                  <div className="size-10 rounded-full bg-muted flex items-center justify-center">
                    <Icon className="size-5" />
                  </div>
                  <span>{label}</span>
                </button>
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              <DrawerClose render={<Button variant="outline" size="sm" />}>
                Cancel
              </DrawerClose>
            </div>
          </DrawerContent>
        </DrawerPopup>
      </Drawer>

      <Drawer swipeDirection="left">
        <DrawerTrigger render={<Button variant="outline" />}>
          Left
        </DrawerTrigger>
        <DrawerPopup>
          <DrawerContent>
            <DrawerTitle>Navigation</DrawerTitle>
            <DrawerDescription>Browse your favorite pages</DrawerDescription>
            <nav className="mt-4 -mx-2 space-y-1.5 text-sm">
              {navigationItems.map(({ label, icon: Icon }) => (
                <DrawerClose
                  key={label}
                  render={
                    <Button variant="ghost" className="w-full justify-start" />
                  }
                >
                  <Icon className="size-5 fill-muted" />
                  {label}
                </DrawerClose>
              ))}
            </nav>
          </DrawerContent>
        </DrawerPopup>
      </Drawer>
    </div>
  );
}

const shareOptions = [
  {
    label: "Copy Link",
    icon: LinkIcon,
  },
  {
    label: "Email",
    icon: MailIcon,
  },
  {
    label: "Twitter",
    icon: TwitterIcon,
  },
  {
    label: "Slack",
    icon: SlackIcon,
  },
];

const navigationItems = [
  {
    label: "Dashboard",
    icon: HomeIcon,
  },
  {
    label: "Projects",
    icon: FolderIcon,
  },
  {
    label: "Team",
    icon: UsersIcon,
  },
  {
    label: "Settings",
    icon: SettingsIcon,
  },
];
