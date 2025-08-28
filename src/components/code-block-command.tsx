import { config } from "@/config";
import { Separator } from "@/registry/components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/components/ui/tabs";
import { CodeBlock } from "./code-block";
import { BunLogo, NPMLogo, PnpmLogo, YarnLogo } from "./icons";

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
  isShadcnComponent,
}: {
  component: string;
  isShadcnComponent?: boolean;
}) {
  const registryUrl = isShadcnComponent ? component : getRegistryUrl(component);

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

          {!isShadcnComponent && (
            <>
              <div className="my-6 flex items-center justify-center gap-2 overflow-hidden">
                <Separator />
                <span className="text-sm text-muted-foreground uppercase">
                  or
                </span>
                <Separator />
              </div>

              <p className="text-sm text-muted-foreground">
                If you are using a namespaced registry, you can use the
                following command:
              </p>

              <CodeBlock
                lang="bash"
                code={
                  getInstallationCommand(tab.value, `@basecn/${component}`) ||
                  ""
                }
              />
            </>
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
}
