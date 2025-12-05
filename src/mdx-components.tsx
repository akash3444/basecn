import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import * as stepComponents from "fumadocs-ui/components/steps";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";

import { CodeBlockCommand } from "./components/code-block-command";
import ComponentPreview from "./components/component-preview";
import RadixUIIndependentInfo from "./components/radix-ui-independent-info";
import { cn } from "./lib/utils";

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    pre: ({ ref: _ref, className, ...props }) => (
      <CodeBlock
        data-line-numbers
        className={cn(
          "bg-muted/50 p-0 overflow-hidden rounded-md shadow-sm/5 my-3!",
          "[&_pre]:text-sm [&_pre]:font-normal [&_pre_span]:leading-[1.75]",
          "*:first:bg-background *:first:border  *:first:border-border/70 *:first:size-7 *:first:flex *:first:items-center *:first:justify-center",
          "[&>div:has(pre)]:max-h-[400px] [&>div:has(pre)]:rounded-md [&>div:has(pre)]:py-3 [&>div:has(pre)]:px-0 [&>div:has(pre)]:border-none my-0"
        )}
        {...props}
      >
        <Pre className={cn("text-sm leading-[1.75]", className)}>
          {props.children}
        </Pre>
      </CodeBlock>
    ),
    code: ({ ref: _ref, className, ...props }) => (
      <code className={cn("border-border/50 py-0.5", className)} {...props} />
    ),
    a: ({ ref: _ref, className, ...props }) => (
      <a className={cn("has-[code]:decoration-dotted", className)} {...props} />
    ),
    CodeBlockCommand,
    ComponentPreview,
    RadixUIIndependentInfo,
    ...stepComponents,
  };
}
