import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import * as stepComponents from "fumadocs-ui/components/steps";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";

import { CodeBlockCommand } from "./components/code-block-command";
import CommonMigrationsStepsInfo from "./components/common-migrations-steps-info";
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
          "p-0 border-0", // figure
          "[&>div:not(:has(pre))]:size-8 [&>div:not(:has(pre))]:rounded-md", // copy button
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
    CodeBlockCommand,
    ComponentPreview,
    RadixUIIndependentInfo,
    CommonMigrationsStepsInfo,
    ...stepComponents,
  };
}
