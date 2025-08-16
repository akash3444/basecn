import { components } from "@/registry/__index__";
import fs from "fs/promises";
import path from "path";
import { CodeBlock } from "./code-block";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/components/ui/tabs";
import { cn } from "@/lib/utils";

export default async function ComponentPreview({ name }: { name: string }) {
  const { component: Component, src } = components[name];

  const code = await fs.readFile(path.join(process.cwd(), src), "utf-8");

  const codeWithUpdatedImports = code.replaceAll(
    "@/registry/components/ui/",
    "@/components/ui/"
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
          className="border rounded-lg p-2 min-h-[400px] max-h-[400px] flex items-center justify-center"
        >
          <Component />
        </TabsContent>
        <TabsContent value="code">
          <CodeBlock
            lang="tsx"
            code={codeWithUpdatedImports}
            className={cn(
              "bg-background p-0 overflow-hidden rounded-md",
              "[&_pre]:text-sm [&_pre]:font-normal [&_pre_span]:leading-[1.75]",
              "[&>div:not(:has(pre))]:top-0 [&>div:not(:has(pre))]:right-0 [&>div:not(:has(pre))]:size-8",
              "[&>div:has(pre)]:rounded-md [&>div:has(pre)]:py-3 [&>div:has(pre)]:px-2 [&>div:has(pre)]:border-none [&>div:has(pre)]:max-h-[400px] [&>div:has(pre)]:min-h-[400px] my-0"
            )}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
