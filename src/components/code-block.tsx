import * as Base from "fumadocs-ui/components/codeblock";
import { highlight } from "fumadocs-core/highlight";
import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export async function CodeBlock({
  code,
  lang,
  ...rest
}: HTMLAttributes<HTMLElement> & {
  code: string;
  lang: string;
}) {
  const rendered = await highlight(code, {
    lang,
    components: {
      pre: ({ className, ...props }) => (
        <Base.Pre className={cn("text-sm", className)} {...props} />
      ),
    },
  });

  return <Base.CodeBlock {...rest}>{rendered}</Base.CodeBlock>;
}
