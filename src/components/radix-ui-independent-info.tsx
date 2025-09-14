import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

import { CodeBlockCommand } from "./code-block-command";
import { Button } from "./ui/button";

interface RadixUIIndependentInfoProps {
  component: string;
  showInstallation?: boolean;
}

export default function RadixUIIndependentInfo({
  component,
  showInstallation = true,
}: RadixUIIndependentInfoProps) {
  const officialDocsUrl = `https://ui.shadcn.com/docs/components/${component}`;

  return (
    <>
      <h2>Radix UI Independent Component</h2>

      <p>
        This component is <strong>Radix UI independent</strong> and does not
        depend on Radix UI primitives. It&apos;s a standalone implementation by
        shadcn/ui that uses standard HTML elements, custom styling and other
        dependencies.
      </p>

      <p>
        Since this component doesn&apos;t require Base UI migration, you can use
        the original shadcn/ui implementation directly.
      </p>

      <h2>Official Documentation</h2>

      <p>
        For complete documentation, examples, and installation instructions,
        please visit the official shadcn/ui documentation:
      </p>

      <Button
        render={
          <Link
            href={officialDocsUrl}
            target="_blank"
            rel="noopener noreferrer"
          />
        }
        className="not-prose !px-5"
      >
        View Official Docs <ArrowUpRightIcon />
      </Button>

      {showInstallation && (
        <>
          <h2>Quick Installation</h2>

          <CodeBlockCommand component={component} isShadcnComponent />
        </>
      )}

      <hr />

      <p>
        <em>
          This component is maintained by shadcn/ui and is compatible with any
          React project.
        </em>
      </p>

      <p>Thanks to shadcn for providing such amazing components! ❤️</p>
    </>
  );
}
