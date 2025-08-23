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
          "p-0", // figure
          "[&>div:has(figcaption)]:ps-5.5 [&>div:has(figcaption)]:pe-1", // Header with title and copy button
          "[&>div:has(figcaption)+div]:border-t [&>div:has(figcaption)+div]:rounded-t-none", // pre container when the header is visible
          "[&>div:not(:has(pre),:has(figcaption))]:size-8 [&>div:not(:has(pre),:has(figcaption))]:rounded-md", // copy button
          "[&>div:has(pre)]:py-4 [&>div:has(pre)]:border-0 [&>div:has(pre)]:max-h-[400px]" // pre container
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
