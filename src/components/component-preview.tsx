import { cn } from "@/lib/utils";
import { components } from "@/registry/__index__";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/components/ui/tabs";
import fs from "fs/promises";
import path from "path";
import { CodeBlock } from "./code-block";

export default async function ComponentPreview({
  name,
  center = true,
  constrainHeight = true,
}: {
  name: string;
  center?: boolean;
  constrainHeight?: boolean;
}) {
  const { component: Component, src } = components[name];

  const code = await fs.readFile(path.join(process.cwd(), src), "utf-8");

  let codeWithUpdatedImports = code.replaceAll(
    "@/registry/components/ui/",
    "@/components/ui/",
  );
  codeWithUpdatedImports = codeWithUpdatedImports.replaceAll(
    "@/components/ui/form-tanstack",
    "@/components/ui/form",
  );
  codeWithUpdatedImports = codeWithUpdatedImports.replaceAll(
    "@/components/ui/separator-extended",
    "@/components/ui/separator",
  );
  codeWithUpdatedImports = codeWithUpdatedImports.replaceAll(
    "@/components/ui/drawer-base",
    "@/components/ui/drawer",
  );

  return (
    <div className="not-prose">
      <Tabs defaultValue="preview">
        <TabsList className="h-8">
          <TabsTrigger value="preview" className="data-[selected]:shadow-xs">
            Preview
          </TabsTrigger>
          <TabsTrigger value="code" className="data-[selected]:shadow-xs">
            Code
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="preview"
          className={cn(
            "border rounded-lg p-2 min-h-[400px] flex overflow-y-auto",
            {
              "items-center justify-center": center,
              "max-h-[400px]": constrainHeight,
              "py-10": !constrainHeight,
            },
          )}
        >
          <Component />
        </TabsContent>
        <TabsContent value="code">
          <CodeBlock
            lang="tsx"
            code={codeWithUpdatedImports}
            className={cn(
              "bg-muted/50 p-0 overflow-hidden rounded-md shadow-sm/5",
              "[&_pre]:text-sm [&_pre]:font-normal [&_pre_span]:leading-[1.75]",
              "*:first:bg-background *:first:border  *:first:border-border/70 *:first:size-7 *:first:flex *:first:items-center *:first:justify-center",
              "[&>div:has(pre)]:rounded-md [&>div:has(pre)]:py-3 [&>div:has(pre)]:px-2 [&>div:has(pre)]:border-none [&>div:has(pre)]:min-h-[400px] my-0",
              {
                "[&>div:has(pre)]:max-h-[400px]": constrainHeight,
              },
            )}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
