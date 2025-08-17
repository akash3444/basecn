import { Button } from "@/components/ui/button";
import { source } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";
import { createRelativeLink } from "fumadocs-ui/mdx";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle className="text-4xl">{page.data.title}</DocsTitle>
      <DocsDescription className="mb-0 -mt-1">
        {page.data.description}
      </DocsDescription>
      <div className="mb-8 flex items-center gap-2">
        {page.data.links?.docs && (
          <Button
            variant="secondary"
            className="h-6 text-xs !px-2 gap-1.5"
            asChild
          >
            <Link
              href={page.data.links.docs}
              target="_blank"
              rel="noopener noreferrer"
            >
              Docs <ArrowUpRight className="size-3" />
            </Link>
          </Button>
        )}
        {page.data.links?.api && (
          <Button
            variant="secondary"
            className="h-6 text-xs !px-2 gap-1.5"
            asChild
          >
            <Link
              href={page.data.links.api}
              target="_blank"
              rel="noopener noreferrer"
            >
              API Reference <ArrowUpRight className="size-3" />
            </Link>
          </Button>
        )}
      </div>
      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
