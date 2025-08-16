import Link from "next/link";
import { CodeBlockCommand } from "./code-block-command";

interface UILibraryIndependentInfoProps {
  component: string;
}

export default function UILibraryIndependentInfo({
  component,
}: UILibraryIndependentInfoProps) {
  const officialDocsUrl = `https://ui.shadcn.com/docs/components/${component}`;

  return (
    <>
      <h2>UI Library Independent Component</h2>

      <p>
        This component is <strong>UI library independent</strong> and does not
        depend on Radix UI or Base UI. It&apos;s a custom implementation by
        shadcn/ui that works independently of any specific UI library.
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

      <p>
        Link:{" "}
        <Link href={officialDocsUrl} target="_blank" rel="noopener noreferrer">
          {component.charAt(0).toUpperCase() + component.slice(1)} Component -
          shadcn/ui
        </Link>
      </p>

      <h2>Quick Installation</h2>

      <CodeBlockCommand component={component} isShadcnComponent />

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
