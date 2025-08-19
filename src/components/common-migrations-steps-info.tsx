import Link from "next/link";

export default function CommonMigrationsStepsInfo({
  componentName,
}: {
  componentName: string;
}) {
  return (
    <div>
      <h3>Common Migration Steps</h3>
      <p>
        Before migrating the {componentName} component, review the{" "}
        <Link href="/docs/guides/migrating-from-radix-ui">
          common migration patterns
        </Link>{" "}
        that apply to most components.
      </p>
    </div>
  );
}
