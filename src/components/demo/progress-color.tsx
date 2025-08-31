"use client";

import * as React from "react";

import { Progress } from "@/registry/components/ui/progress";

export default function ProgressColor() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-sm w-full space-y-6">
      <Progress
        value={progress}
        className="[&_[data-slot='progress-indicator']]:bg-blue-500"
      />
      <Progress
        value={progress}
        className="[&_[data-slot='progress-indicator']]:bg-green-500"
      />
      <Progress
        value={progress}
        className="[&_[data-slot='progress-indicator']]:bg-red-500"
      />
    </div>
  );
}
