"use client";

import { Button } from "@/registry/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPositioner,
  DropdownMenuTrigger,
} from "@/registry/components/ui/dropdown-menu";
import { useCopyToClipboard } from "@/registry/hooks/use-copy-to-clipboard";
import { Check, ChevronDown, Copy } from "lucide-react";
import { ClaudeLogo, MarkdownLogo, OpenAILogo, V0Logo } from "./icons";
import Link from "next/link";
import { useParams } from "next/navigation";
import { config } from "@/config";
import { cn } from "@/lib/utils";

function getPromptUrl(baseURL: string, url: string) {
  return `${baseURL}?q=${encodeURIComponent(
    `I'm reading this basecn documentation page: ${url}. Help me understand it thoroughly.

Please:  
- Summarize the key idea(s) in plain language.  
- If it's about a component: show minimal usage examples, list props/API, explain customization and accessibility.  
- If it's about a concept or guide: explain the concept step by step with practical examples where possible.  
- If it's about setup/configuration: walk me through the process and common pitfalls.  
- Be ready to clarify doubts, explain terms, or help debug issues related to this page.  
- Point out basecn-specific differences from shadcn/ui with Radix if relevant.
- Point out the migrating from Radix UI to Base UI steps if relevant.

If you can't access the page content, ask me to paste it here.
`
  )}`;
}

interface MarkdownActionsProps extends React.ComponentProps<"div"> {
  content: string;
}

export const MarkdownActions = ({
  content,
  className,
  ...props
}: MarkdownActionsProps) => {
  const { slug } = useParams<{ slug: string[] }>();
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  const url = `${config.appUrl}/docs/${slug.join("/")}`;

  if (!slug) return null;

  const menuItems = [
    {
      label: "View as Markdown",
      href: `/docs/${slug.join("/")}.md`,
      icon: MarkdownLogo,
    },

    {
      label: "Open in ChatGPT",
      href: getPromptUrl("https://chatgpt.com", url),
      icon: OpenAILogo,
    },

    {
      label: "Open in Claude",
      href: getPromptUrl("https://claude.ai/new", url),
      icon: ClaudeLogo,
    },

    {
      label: "Open in v0",
      href: getPromptUrl("https://v0.dev", url),
      icon: V0Logo,
    },
  ];

  return (
    <div className={cn("flex items-center", className)} {...props}>
      <Button
        variant="secondary"
        size="sm"
        className="rounded-e-none h-8 text-xs border"
        onClick={() => copyToClipboard(content)}
      >
        {isCopied ? (
          <Check className="size-3.5" />
        ) : (
          <Copy className="size-3.5" />
        )}
        Copy Page
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={<Button size="icon" variant="secondary" />}
          className="rounded-s-none size-8 border border-l-0"
        >
          <ChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuPositioner align="end">
          <DropdownMenuContent>
            {menuItems.map((item) => (
              <DropdownMenuItem
                key={item.label}
                render={
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <item.icon />
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenuPositioner>
      </DropdownMenu>
    </div>
  );
};
