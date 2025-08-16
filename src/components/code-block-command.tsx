import { config } from "@/config";
import { CodeBlock } from "./code-block";
import { BunLogo, NPMLogo, PnpmLogo, YarnLogo } from "./icons";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/components/ui/tabs";

const tabs = [
  {
    value: "pnpm",
    icon: PnpmLogo,
  },
  {
    value: "npm",
    icon: NPMLogo,
  },
  {
    value: "yarn",
    icon: YarnLogo,
  },
  {
    value: "bun",
    icon: BunLogo,
  },
];

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

export function CodeBlockCommand({
  component,
  isShadcnComponent: shadcnComponent,
}: {
  component: string;
  isShadcnComponent?: boolean;
}) {
  const registryUrl = shadcnComponent ? component : getRegistryUrl(component);

  return (
    <Tabs defaultValue="pnpm" className="[&_figure]:mt-0">
      <TabsList className="font-mono h-8">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="font-normal leading-normal px-2.5 data-[selected]:shadow-xs"
          >
            <tab.icon className="size-4" /> {tab.value}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <CodeBlock
            lang="bash"
            code={getInstallationCommand(tab.value, registryUrl) || ""}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}
