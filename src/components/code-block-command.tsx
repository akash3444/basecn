import { config } from "@/config";
import { CodeBlock } from "./code-block";
import { BunLogo, NPMLogo, PnpmLogo, YarnLogo } from "./icons";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/components/ui/tabs";

const getInstallationCommand = (packageManager: string, component: string) => {
  switch (packageManager) {
    case "pnpm":
      return `pnpm dlx shadcn@latest add ${component}`;
    case "npm":
      return `npx shadcn@latest add ${component}`;
    case "yarn":
      return `yarn shadcn@latest add ${component}`;
    case "bun":
      return `bunx --bun shadcn@latest add ${component}`;
  }
};

const getRegistryUrl = (component: string) => {
  return `${config.appUrl}/r/${component}.json`;
};

export function CodeBlockCommand({ component }: { component: string }) {
  return (
    <Tabs defaultValue="pnpm" className="[&_figure]:mt-0">
      <TabsList className="font-mono h-8">
        <TabsTrigger value="pnpm" className="font-normal leading-normal px-2.5">
          <PnpmLogo className="size-3.5" /> pnpm
        </TabsTrigger>
        <TabsTrigger value="npm" className="font-normal leading-normal px-2.5">
          <NPMLogo className="size-4" /> npm
        </TabsTrigger>
        <TabsTrigger value="yarn" className="font-normal leading-normal px-2.5">
          <YarnLogo className="size-4" /> yarn
        </TabsTrigger>
        <TabsTrigger value="bun" className="font-normal leading-normal px-2.5">
          <BunLogo className="size-4" /> bun
        </TabsTrigger>
      </TabsList>

      <TabsContent value="pnpm">
        <CodeBlock
          lang="bash"
          code={getInstallationCommand("pnpm", getRegistryUrl(component)) || ""}
        />
      </TabsContent>
      <TabsContent value="npm">
        <CodeBlock
          lang="bash"
          code={getInstallationCommand("npm", getRegistryUrl(component)) || ""}
        />
      </TabsContent>
      <TabsContent value="yarn">
        <CodeBlock
          lang="bash"
          code={getInstallationCommand("yarn", getRegistryUrl(component)) || ""}
        />
      </TabsContent>
      <TabsContent value="bun">
        <CodeBlock
          lang="bash"
          code={getInstallationCommand("bun", getRegistryUrl(component)) || ""}
        />
      </TabsContent>
    </Tabs>
  );
}
