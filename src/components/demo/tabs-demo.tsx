import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/components/ui/tabs";
import { CircleUserRound, FolderKanban, PanelsTopLeft } from "lucide-react";

export default function TabsDemo() {
  return (
    <Tabs
      defaultValue="overview"
      className="mx-auto border rounded-md overflow-hidden"
    >
      <TabsList className="border-b w-full gap-1 rounded-b-none">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="account">Account</TabsTrigger>
      </TabsList>
      <TabsContent
        value="overview"
        className="min-h-40 flex items-center justify-center"
      >
        <PanelsTopLeft className="size-10 text-muted-foreground" />
      </TabsContent>
      <TabsContent
        value="projects"
        className="min-h-40 flex items-center justify-center"
      >
        <FolderKanban className="size-10 text-muted-foreground" />
      </TabsContent>
      <TabsContent
        value="account"
        className="min-h-40 flex items-center justify-center"
      >
        <CircleUserRound className="size-10 text-muted-foreground" />
      </TabsContent>
    </Tabs>
  );
}
