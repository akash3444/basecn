import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { CodeBlockCommand } from "./components/code-block-command";
import ComponentPreview from "./components/component-preview";
import { cn } from "./lib/utils";

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    pre: ({ ref: _ref, className, ...props }) => (
      <CodeBlock {...props}>
        <Pre className={cn("text-sm", className)}>{props.children}</Pre>
      </CodeBlock>
    ),
    CodeBlockCommand,
    ComponentPreview,
  };
}
