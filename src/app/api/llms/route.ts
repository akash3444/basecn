import { NextResponse, type NextRequest } from "next/server";

import { config } from "@/config";
import { source } from "@/lib/source";

export const revalidate = false;

const generateLLMsText = (tree: typeof source.pageTree) => {
  const introduction = [
    "# basecn \n",
    "basecn brings you the shadcn/ui components you know and love, rebuilt on Base UI.\n",
    "This is what basecn offers:",
    "- **shadcn/ui Components:** The same beautiful components you know, with familiar APIs and styling.",
    "- **Base UI Foundation:** Built on Base UI for rock-solid accessibility and performance.",
    "- **Multiple Examples:** Various implementations and patterns for each component.",
    "- **Same Philosophy:** Copy, paste, and customize - no lock-in, full source code ownership.",
  ];

  const generateTreeText = (
    items: typeof tree.children,
    level: number = 2
  ): string[] => {
    const result: string[] = [];

    for (const item of items) {
      if (item.type === "folder") {
        // Generate heading based on level (## for level 2, ### for level 3, etc.)
        const heading = "\n" + "#".repeat(level) + " " + item.name + "\n";
        result.push(heading);

        // Recursively process children if they exist
        if (item.children && item.children.length > 0) {
          result.push(...generateTreeText(item.children, level + 1));
        }
      }

      if (item.type === "page") {
        result.push(
          `- [${item.name}](${config.appUrl}${item.url}): ${item.description}`
        );
      }
    }

    return result;
  };

  const treeText = generateTreeText(tree.children);

  return [...introduction, ...treeText].join("\n");
};

export async function GET(_req: NextRequest) {
  const text = generateLLMsText(source.pageTree);

  return new NextResponse(text, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });

  // return new NextResponse(page.data.content, {
  //   headers: {
  //     "Content-Type": "text/markdown; charset=utf-8",
  //   },
  // });
}

export function generateStaticParams() {
  return source.generateParams();
}
